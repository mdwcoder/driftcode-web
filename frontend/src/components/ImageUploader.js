import React, { useRef, useContext } from 'react';
import { AuthContext } from '../pages/acounts/AuthContext';
import axios from 'axios';

const ImageUploader = ({ msg }) => {
  const { setMainImage } = useContext(AuthContext);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
  
    // Crea un objeto FormData para enviar el archivo al servidor
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/upload/one', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Obtén el nombre de la imagen desde la respuesta del servidor
      const imageName = response.data.filename;
  
      // Guarda el nombre de la imagen en el estado mainImage
      setMainImage(imageName);
      console.log(imageName);
  
      // Maneja la respuesta del servidor
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      // Maneja los errores de la solicitud
      console.error('Error al subir el archivo:', error);
    }
  };
  
  return (
    <div className="image-uploader">
      <input
        type="file"
        accept="image/jpeg, image/png"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button
        className="image-uploader-button"
        onClick={handleButtonClick}
        style={{
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 16px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        {msg}
      </button>
      <style>
        {`
          .image-uploader-button:hover {
            background-color: rgb(77, 58, 255);
          }
        `}
      </style>
    </div>
  );
};

export default ImageUploader;
