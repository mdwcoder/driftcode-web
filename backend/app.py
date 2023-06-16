from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os, re
import argparse
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def get_db_connection(database):
    conn = sqlite3.connect(database)
    conn.row_factory = sqlite3.Row
    return conn


def create_user(user, email, password):
    conn = get_db_connection('users.db')
    c = conn.cursor()
    c.execute("INSERT INTO users (user, email, password, admin) VALUES (?, ?, ?, ?)",
              (user, email, password, False))
    conn.commit()
    conn.close()


def delete_user(username):
    conn = get_db_connection('users.db')
    c = conn.cursor()
    c.execute("DELETE FROM users WHERE user=?", (username,))
    conn.commit()
    conn.close()


def delete_all_users():
    conn = get_db_connection('users.db')
    c = conn.cursor()
    c.execute("DELETE FROM users")
    conn.commit()
    conn.close()


def delete_product(name):
    conn = get_db_connection('products.db')
    c = conn.cursor()
    c.execute("DELETE FROM products WHERE name=?", (name,))
    conn.commit()
    conn.close()


def find_user_by_email(email):
    conn = get_db_connection('users.db')
    c = conn.cursor()
    c.execute("SELECT *, admin FROM users WHERE email=?", (email,))
    user = c.fetchone()
    conn.close()
    return user


def find_user(username):
    conn = get_db_connection('users.db')
    c = conn.cursor()
    c.execute("SELECT *, admin FROM users WHERE user=?", (username,))
    user = c.fetchone()
    conn.close()
    return user


def make_admin(username):
    conn = get_db_connection('users.db')
    c = conn.cursor()
    c.execute("UPDATE users SET admin = 1 WHERE user = ?", (username,))
    conn.commit()
    conn.close()


@app.route('/api/user/admin', methods=['POST'])
def make_admin_routed():
    data = request.json
    username = data.get('user')

    conn = get_db_connection('users.db')
    c = conn.cursor()
    c.execute("UPDATE users SET admin = 1 WHERE user = ?", (username,))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Usuario promovido a administrador exitosamente'})

def print_all_users():
    conn = get_db_connection('users.db')
    c = conn.cursor()
    c.execute("SELECT * FROM users")
    rows = c.fetchall()
    conn.close()

    for row in rows:
        print("Usuario:", row['user'])
        print("Email:", row['email'])
        print("Contraseña:", row['password'])
        print("Administrador:", row['admin'])
        print("---")



@app.route('/api/user/degrade', methods=['POST'])
def degrade_to_user():
    data = request.json
    username = data.get('user')

    conn = get_db_connection('users.db')
    c = conn.cursor()
    c.execute("UPDATE users SET admin = 0 WHERE user = ?", (username,))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Usuario degradado a usuario estándar exitosamente'})

def print_all_products():
    conn = get_db_connection('products.db')
    c = conn.cursor()
    c.execute("SELECT * FROM products")
    rows = c.fetchall()
    conn.close()

    for row in rows:
        print("Nombre:", row['name'])
        print("Precio:", row['price'])
        print("Descripción:", row['description'])
        print("Características:", row['features'])
        print("Imagen principal:", row['main_image'])
        print("Imágenes secundarias:", row['secondary_images'])
        print("Sección:", row['section'])
        print("---")

@app.route('/api/printproducts', methods=['GET'])
def print_products():
    print_all_products()
    return jsonify({'message': 'Productos impresos en la consola'})


@app.route('/api/product/delete', methods=['DELETE'])
def delete_product_by_name():
    data = request.get_json()
    name = data.get('name')

    conn = get_db_connection('products.db')
    c = conn.cursor()

    c.execute("DELETE FROM products WHERE name=?", (name,))
    conn.commit()
    conn.close()

    return jsonify({'message': f'Producto {name} eliminado exitosamente'})


@app.route('/api/product/delete/all', methods=['GET'])
def delete_all_products():
    conn = get_db_connection('products.db')
    c = conn.cursor()

    c.execute("DELETE FROM products")
    conn.commit()
    conn.close()

    return jsonify({'message': 'Todos los productos han sido eliminados'})


@app.route('/api/login', methods=['POST', 'OPTIONS'])
def login():
    def validate_email(email):
        # Expresión regular para validar un correo electrónico
        email_regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
        return re.match(email_regex, email) is not None
    if request.method == 'OPTIONS':
        response = jsonify()
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    data = request.json
    userform = data.get('userform') 
    password = data.get('password')

    if validate_email(userform):
        user = find_user_by_email(userform)  # Utiliza el campo 'email' para buscar el usuario
    else:
        user = find_user(userform)  # Si no se encuentra por email, busca por usuario

    if user and user['password'] == password:
        return {
            'message': 'Login correcto',
            'Authenticated': True,
            'admin': user['admin'],
            'user': user['user'],
            'email': user['email'],
            'password': user['password']
        }
    else:
        return {
            'message': 'Login incorrecto',
            'Authenticated': False,
            'admin': False
        }



@app.route('/api/registro', methods=['POST', 'OPTIONS'])
def registro():
    if request.method == 'OPTIONS':
        response = jsonify()
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    data = request.json
    user = data.get('user')
    email = data.get('email')
    password = data.get('password')

    # Verificar si el usuario ya existe por nombre de usuario
    existing_user = find_user(user)
    if existing_user:
        return jsonify({'message': 'Usuario ya en uso'})

    # Verificar si el correo electrónico ya está en uso
    existing_email_user = find_user_by_email(email)
    if existing_email_user:
        return jsonify({'message': 'Email ya en uso'})

    # Crear el nuevo usuario
    create_user(user, email, password)

    print(f"Usuario: {user}")
    print(f"Correo electrónico: {email}")
    print(f"Contraseña: {password}")

    return 'Datos recibidos'


@app.route('/api/user/update', methods=['POST'])
def update_user():
    data = request.json
    tipo = data.get('tipo')
    dato_nuevo = data.get('dato_nuevo')
    usuario = data.get('usuario')

    # Verificar si el usuario existe
    existing_user = find_user(usuario)
    if not existing_user:
        return jsonify({'message': 'Usuario no encontrado'})

    # Modificar el campo correspondiente del usuario
    conn = get_db_connection('users.db')
    c = conn.cursor()
    if tipo == 'user':
        c.execute("UPDATE users SET user = ? WHERE user = ?",
                  (dato_nuevo, usuario))
    elif tipo == 'email':
        c.execute("UPDATE users SET email = ? WHERE user = ?",
                  (dato_nuevo, usuario))
    elif tipo == 'password':
        c.execute("UPDATE users SET password = ? WHERE user = ?",
                  (dato_nuevo, usuario))
    else:
        return jsonify({'message': 'Tipo de dato no válido'})
    conn.commit()
    conn.close()

    return jsonify({'message': f'Campo {tipo} del usuario {usuario} modificado correctamente'})


@app.route('/api/user/erase', methods=['POST', 'OPTIONS'])
def erase_user():
    if request.method == 'OPTIONS':
        response = jsonify()
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    data = request.json
    username = data.get('username')

    # Verificar si el usuario existe
    existing_user = find_user(username)
    if not existing_user:
        return jsonify({'message': 'Usuario no encontrado'})

    # Eliminar el usuario
    delete_user(username)

    return jsonify({'message': f'Usuario {username} eliminado correctamente'})


@app.route('/api/product/create', methods=['POST'])
def create_product():
    data = request.json
    name = data.get('name')
    price = data.get('price')
    description = data.get('description')
    features = data.get('features')
    section = data.get('section')
    main_image = data.get('main_image')
    secondary_images = data.get('secondary_images')

    conn = get_db_connection('products.db')
    c = conn.cursor()
    c.execute("INSERT INTO products (name, price, description, features, main_image, secondary_images, section) VALUES (?, ?, ?, ?, ?, ?, ?)",
              (name, price, description, features, main_image, secondary_images, section))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Producto creado exitosamente'})


@app.route('/api/upload/more', methods=['POST'])
def upload_files():
    if 'files' not in request.files:
        return jsonify({'message': 'No se encontraron archivos en la solicitud'})

    files = request.files.getlist('files')
    filenames = []

    for file in files:
        if file.filename == '':
            continue

        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        filenames.append(filename)

    return jsonify({
        'message': 'Archivos subidos exitosamente',
        'filenames': filenames
    })


@app.route('/api/upload/one', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'message': 'No se encontró ningún archivo en la solicitud'})

    file = request.files.get('file')

    if file.filename == '':
        return jsonify({'message': 'No se seleccionó ningún archivo'})

    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return jsonify({
            'message': 'Archivo subido exitosamente',
            'filename': file.filename
        })

    return jsonify({'message': 'Error al subir el archivo'})


@app.route('/api/users/all', methods=['GET'])
def get_all_users():
    conn = get_db_connection('users.db')
    c = conn.cursor()
    c.execute("SELECT user FROM users")
    rows = c.fetchall()
    conn.close()

    users = [row['user'] for row in rows]
    return jsonify(users)


# Terminar el return de los objetos --> productos
@app.route('/api/products/selection', methods=['GET'])
def get_product_section():
    section = request.args.get('section')

    conn = get_db_connection('products.db')
    c = conn.cursor()

    c.execute("SELECT * FROM products WHERE section=?", (section,))
    rows = c.fetchall()

    products = []
    for row in rows:
        product = {
            'name': row[1],
            'price': row[2],
            'description': row[3],
            'features': row[4],
            'main_image': row[5],
            'secondary_images': row[6],
            'section': row[7]
        }
        products.append(product)

    conn.close()

    return jsonify({'products': products})


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-i', '--interactive',
                        action='store_true', help='Run in interactive mode')
    args = parser.parse_args()
    print_all_users()
    print_all_products()

    if args.interactive:
        username = input(
            'Ingrese el nombre de usuario al que desea asignar como administrador: ')
        make_admin(username)
        print(f'El usuario {username} se ha convertido en administrador')

    app.run(port=5000)
