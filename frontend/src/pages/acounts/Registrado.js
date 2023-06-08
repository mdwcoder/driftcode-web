import React, { useContext, useState } from "react";
import { BarraSuperior } from "../../components/BarraSuperior";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import "./myaccount.css";
import ImageUploader from "../../components/ImageUploader";
import ImagesUploader from "../../components/ImagesUploader";

export const Registrado = () => {
  const { isAdmin, actualUser, logout, mainImage, setMainImage, setSecondariImages, secondariImages} = useContext(AuthContext);
  const [send_name, setName] = useState("");
  const [send_price, setPrice] = useState("");
  const [send_description, setDescription] = useState("");
  const [send_features, setFeatures] = useState("");
  const [send_section, setSection] = useState("");
  const [lista_usuarios, setListaUsers] = useState([]);
  const [usuarioseleccionado, seleccionarusuario] = useState("");
  const [accionejecutar, seleccionaraccionejecutar] = useState("");

  const createProduct = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/product/create", {
        'name': send_name,
        'price': send_price,
        'description': send_description,
        'features': send_features,
        'section': send_section,
        'main_image': mainImage,
        'secondary_images': secondariImages
      });
  
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
    setMainImage("");
    setSecondariImages([]);
  };

  const eliminarUsuario = async (user = actualUser) => {
    const response = await axios.post("http://127.0.0.1:5000/api/user/erase", {
        'username': user,
      });
    console.log("Respuesta del servidor:", response.data);
    logout();
  };

  const hacer_administrador = async (user) => {
    const response = await axios.post("http://127.0.0.1:5000/api/user/admin", {
        'username': user,
      });
    console.log("Respuesta del servidor:", response.data);
  }

  const degradar_usuario = async (user) => {
    const response = await axios.post("http://127.0.0.1:5000/api/user/degrade", {
        'username': user,
      });
    console.log("Respuesta del servidor:", response.data);
  }

  const ejecutar_accion = async () => {
    if (accionejecutar === "Eliminar") {
      eliminarUsuario(usuarioseleccionado);
    } else if (accionejecutar === "Ascender a administrador"){
      hacer_administrador(usuarioseleccionado);
    } else if (accionejecutar === "Degradar a usuario"){
      degradar_usuario(usuarioseleccionado);
    } else if (accionejecutar === "Banear"){
      console.log("Banear");
    }
  }

  const obtener_todos_los_usuarios = async () => {
    const response = await axios.get("http://127.0.0.1:5000/api/users/all");
    setListaUsers(response.data);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFeaturesChange = (event) => {
    setFeatures(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  }

  const handleUserChange = (event) => {
    seleccionarusuario(event.target.value);
  }

  const handleAccionChange = (event) => {
    seleccionaraccionejecutar(event.target.value);
  }

  const [actualform, setActualForm] = useState('mainform');

  let name_admin;
  let extra_button;
  let getback_button;

  const None = () => {
    console.log("None");
  };

  const mainform_fn = () => {
    setActualForm('mainform');
  }
  const pagos_fn = () => {
    setActualForm('pagosform');
  };

  const seguridad_fn = () => {
    setActualForm('seguridadform');
  };

  const ajustes_fn = () => {
    setActualForm('ajustesform');
  };

  const admin_fn = () => {
    setActualForm('adminform');
  };

  const create_product_fn = () => {
    setActualForm('createproduct');
  }

  const gestion_usuarios_fn = () => {
    obtener_todos_los_usuarios();
    setActualForm('gestionusuarios');
  }

  if (isAdmin) {
    name_admin = "Administrador";
    extra_button = (
      <div>
        <button className="button-account admin" onClick={admin_fn}>
          admin settings
        </button>
      </div>
    );
  } else {
    name_admin = "";
  }

  getback_button = (
    <button className="button-account getback" onClick={mainform_fn}>
      Go Back
    </button>
  );

  const mainform = (
    <div>
      <h2 className="title-myaccount-mensaje quien-eres">
        Bienvenido {actualUser} {name_admin}
      </h2>
      <div className="button-account-grid">
        <button onClick={seguridad_fn} className="button-account seguridad">
          Seguridad
        </button>
        <button onClick={pagos_fn} className="button-account pagos">
          Pagos
        </button>
        <button onClick={ajustes_fn} className="button-account ajustes-cuenta">
          Ajustes de cuenta
        </button>
        <button onClick={logout} className="button-account cerrar-sesion">
          Cerrar sesión
        </button>
      </div>
      {extra_button}
    </div>
  );

  const seguridadform = (
    <div>
      <h2 className="title-myaccount-mensaje quien-eres">Seguridad</h2>
      <div className="button-account-grid">
        <button onClick={None} className="button-account seguridad">
          Cambiar contraseña
        </button>
        <button onClick={None} className="button-account seguridad">
          Cambiar Correo
        </button>
      </div>
      {getback_button}
    </div>
  );

  const pagosform = (
    <div>
      <h2 className="title-myaccount-mensaje quien-eres">Pagos</h2>
      <div className="button-account-grid">
        <button onClick={None} className="button-account pagos">
          Forma de pago
        </button>
        <button onClick={None} className="button-account pagos">
          Pedidos
        </button>
      </div>
      {getback_button}
    </div>
  );

  const ajustesform = (
    <div>
      <h2 className="title-myaccount-mensaje quien-eres">Ajustes de cuenta</h2>
      <div className="button-account-grid">
        <button onClick={None} className="button-account ajustes-cuenta">
          Personalizar cuenta
        </button>
        <button onClick={eliminarUsuario} className="button-account ajustes-cuenta">
          Eliminar cuenta
        </button>
      </div>
      {getback_button}
    </div>
  );

  const adminform = (
    <div>
      <h2 className="title-myaccount-mensaje quien-eres">Administrador</h2>
      <div className="button-account-grid">
        <button onClick={create_product_fn} className="button-account admin-second">
          Añadir producto
        </button>
        <button onClick={gestion_usuarios_fn} className="button-account admin-second">
          Gestión de usuarios
        </button>
        <button onClick={None} className="button-account admin-second">
          Gestión de productos
        </button>
        <button onClick={None} className="button-account admin-second">
          Gestión de videos
        </button>
      </div>
      {getback_button}
    </div>
  );

  const create_product = (
    <div className="create-product">
      <h2 className="title-myaccount-mensaje quien-eres">Crear producto</h2>
      <input type="text" className="nombre_producto_input" placeholder="Nombre del producto" onChange={handleNameChange}/>
      <input type="number" className="precio_input" placeholder="Precio" onChange={handlePriceChange}/>
      <textarea className="descripcion_input" placeholder="Descripcion del producto" onChange={handleDescriptionChange}/>;
      <textarea 
        className="descripcion_input" 
        placeholder="Poner caracteristicas con formato:
        <nombre caracteristica> ::: <valor> "
        rows={4}
        cols={50}
        onChange={handleFeaturesChange}
        />;
      <div className="button-image-upload">
        <ImageUploader msg={"Imagen principal"} />
        <ImagesUploader msg={"Imagenes secundarias"} />
        <select onChange={handleSectionChange}>
          <option value={"E30"}>E30</option>
          <option value={"E34"}>E34</option>
          <option value={"E36"}>E36</option>
          <option value={"E46"}>E46</option>
          <option value={"UNIVERSAL"}>UNIVERSAL</option>
        </select>
      </div>
      <div className="button-image-upload">
        {getback_button}
        <button onClick={createProduct} className="button-account admin-second">
          Crear producto
        </button>
      </div>
    </div>
  );

  const administracion_usuarios = (
    <div>
      <h2 className="title-myaccount-mensaje quien-eres">Gestión de usuarios</h2>
      <div className="button-image-upload" style={{ margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.5)', width: '50%' }}>
        <select
          onAbort={handleUserChange}
          className="nombre_usuario_input"
          placeholder="Nombre de usuario"
          style={{
            background : 'rgba(255, 255, 255, 0.5)',
            border: 'none',
            borderBottom: '1px solid gray',
            fontSize: '16px',
            padding: '20px',
            width: '100%',
          }}>
          {lista_usuarios.map((usuario, index) => (
            <option key={index}>{usuario}</option>
          ))}
        </select>
        <select
          onChange={handleAccionChange}
          style={{
            background : 'rgba(255, 255, 255, 0.5)',
            border: 'none',
            borderBottom: '1px solid gray',
            fontSize: '16px',
            padding: '20px',
            width: '100%',
          }}
        >
          <option>Eliminar</option>
          <option>Banear</option>
          <option>Degradar a usuario</option>
          <option>Ascender a administrador</option>
        </select>
      </div>

      <div className="button-account-grid">
        <button className="button-account admin-second" onClick={ejecutar_accion}>Ejecutar</button>
        {getback_button}
      </div>
    </div>
  );

  let renderedForm;

  switch (actualform) {
    case 'mainform':
      renderedForm = mainform;
      break;
    case 'seguridadform':
      renderedForm = seguridadform;
      break;
    case 'pagosform':
      renderedForm = pagosform;
      break;
    case 'ajustesform':
      renderedForm = ajustesform;
      break;
    case 'adminform':
      renderedForm = adminform;
      break;
    case 'createproduct':
      renderedForm = create_product;
      break;
    case 'gestionusuarios':
      renderedForm = administracion_usuarios;
      break;
    default:
      renderedForm = mainform;
      break;
  }

  return (
    <div>
      <BarraSuperior />
      <h1 className="title-myaccount-mensaje">Account Management</h1>
      {renderedForm}
    </div>
  );
};
