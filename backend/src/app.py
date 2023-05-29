from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)


def get_db_connection():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row
    return conn


def create_user(user, email, password):
    conn = get_db_connection()
    c = conn.cursor()
    c.execute("INSERT INTO users (user, email, password) VALUES (?, ?, ?)",
              (user, email, password))
    conn.commit()
    conn.close()


def find_user_by_email(email):
    conn = get_db_connection()
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE email=?", (email,))
    user = c.fetchone()
    conn.close()
    return user


def find_user(username):
    conn = get_db_connection()
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE user=?", (username,))
    user = c.fetchone()
    conn.close()
    return user


@app.route('/api/login', methods=['POST', 'OPTIONS'])
def login():
    if request.method == 'OPTIONS':
        response = jsonify()
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    data = request.json
    usermail = data.get('email')
    password = data.get('password')

    user = find_user_by_email(usermail)

    print(f"Usuario: {user['user']}")
    print(f"Correo electrónico: {user['email']}")
    print(f"Contraseña: {user['password']}")

    if user and user['password'] == password:
        print(True)
        return jsonify({'authenticated': True})
    else:
        print(False)
        return jsonify({'authenticated': False})


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


def eliminar_en_buid_real():
    conn = get_db_connection()
    c = conn.cursor()
    c.execute("SELECT * FROM users")
    rows = c.fetchall()
    conn.close()

    for row in rows:
        print("Usuario:", row['user'])
        print("Correo electrónico:", row['email'])
        print("Contraseña:", row['password'])
        print()


if __name__ == '__main__':
    eliminar_en_buid_real()
    app.run(port=5000)
