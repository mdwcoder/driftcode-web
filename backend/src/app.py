from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb://localhost/pydriftcode')
db = client.pydriftcode

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()

    # Procesa los datos recibidos desde el componente de React
    email = data['email']
    password = data['password']

    # Verifica las credenciales del usuario en la base de datos
    user = db.users.find_one({'email': email, 'password': password})

    if user:
        # Si las credenciales son válidas, devuelve una respuesta en formato JSON al componente de React
        response = {
            'status': 'success',
            'message': 'Inicio de sesión exitoso.'
        }
    else:
        # Si las credenciales no son válidas, devuelve una respuesta en formato JSON al componente de React
        response = {
            'status': 'error',
            'message': 'Credenciales inválidas.'
        }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)