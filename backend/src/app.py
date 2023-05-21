from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['pydriftcode']

@app.route('/login', methods=['POST'])
def login():
  email = request.json.get('email')
  password = request.json.get('password')

  user = db.users.find_one({'email': email, 'password': password})

  print(email, password)
    
  if user:
    return jsonify({'message': 'Inicio de sesión exitoso'})
  else:
    return jsonify({'message': 'Error al iniciar sesión'})

if __name__ == '__main__':
    app.run(debug=True)
