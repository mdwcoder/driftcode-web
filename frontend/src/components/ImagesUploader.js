import React, { useRef, useContext } from 'react';
import { AuthContext } from '../pages/acounts/AuthContext';
import axios from 'axios';

const ImagesUploader = ({ msg }) => {
  const { setSecondariImages, secondariImages } = useContext(AuthContext);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const files = event.target.files;
  
    // Crea un objeto FormData para enviar los archivos al servidor
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i], files[i].name);
    }
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/upload/more', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Guarda los nombres de las imágenes en el estado mainImage
      setSecondariImages(secondariImages.concat(response.data.filenames));
      console.log(response.data.filenames);
      // Maneja la respuesta del servidor
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      // Maneja los errores de la solicitud
      console.error('Error al subir los archivos:', error);
    }
  };
  

  return (
    <div className="images-uploader">
      <input
        type="file"
        accept="image/jpeg, image/png"
        multiple
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button
        className="images-uploader-button"
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
          .images-uploader-button:hover {
            background-color: rgb(77, 58, 255);
          }
        `}
      </style>
    </div>
  );
};

export default ImagesUploader;
