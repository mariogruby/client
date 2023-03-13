
// import React, { useState } from 'react';
// import axios from 'axios';

// function Avatar() {
//   // estado para almacenar la imagen
//   const [image, setImage] = useState('');

//   // función para manejar la carga de la imagen
//   function handleImageUpload(event) {
//     const { files } = event.target;
//     setImage(URL.createObjectURL(files[0]));
//   }

//   // función para manejar el envío del formulario
//   function handleSubmit(event) {
//     event.preventDefault();

//     // crear una instancia de FormData para enviar la imagen
//     const formData = new FormData();
//     formData.append('avatar', event.target.elements.avatar.files[0]);

//     // enviar la imagen al backend usando axios
//     axios.post('/api/avatar', formData)
//       .then(response => {
//         console.log('La imagen ha sido cargada con éxito');
//       })
//       .catch(error => {
//         console.error('Hubo un error al cargar la imagen', error);
//       });
//   }

//   return (
//     <div>
//       {/* mostrar la imagen */}
//       <img src={image} alt="avatar" />

//       {/* formulario para cargar la imagen */}
//       <form onSubmit={handleSubmit}>
//         <input type="file" accept="image/*" name="avatar" onChange={handleImageUpload} />
//         <button type="submit">Cargar imagen</button>
//       </form>
//     </div>
//   );
// }

// export default Avatar;
// import React, { useState } from 'react';
// import axios from 'axios';

// function Avatar({ userId }) {
//     // estado para almacenar la imagen
//     const [image, setImage] = useState('');

//     // función para manejar la carga de la imagen
//     function handleImageUpload(event) {
//         const { files } = event.target;
//         setImage(URL.createObjectURL(files[0]));
//     }

//     // función para manejar el envío del formulario
//     function handleSubmit(event) {
//         event.preventDefault();

//         // crear una instancia de FormData para enviar la imagen y el ID del usuario
//         const formData = new FormData();
//         formData.append('avatar', event.target.elements.avatar.files[0]);
//         formData.append('userId', userId);

//         // enviar la imagen y el ID del usuario al backend usando axios
//         axios.post('/api/avatar', formData)
//             .then(response => {
//                 console.log('La imagen ha sido cargada con éxito');
//             })
//             .catch(error => {
//                 console.error('Hubo un error al cargar la imagen', error);
//             });
//     }

//     return (
//         <div>
//             {/* mostrar la imagen */}
//             <img src={image} alt="avatar" />

//             {/* formulario para cargar la imagen */}
//             <form onSubmit={handleSubmit}>
//                 <input type="file" accept="image/*" name="avatar" onChange={handleImageUpload} />
//                 <input type="hidden" name="userId" value={userId} />
//                 <button type="submit">Cargar imagen</button>
//             </form>
//         </div>
//     );
// }

// export default Avatar;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import the service since we need it to send (and get) the data to(from) the server
// import service from "../../api/service";

// function AddMovie() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

//   const navigate = useNavigate();

//   // ******** this function handles the file upload ********
//   const handleFileUpload = (e) => {
//     // console.log("The file to be uploaded is: ", e.target.files[0]);

//     const uploadData = new FormData();

//     // imageUrl => this name has to be the same as in the model since we pass
//     // req.body to .create() method when creating a new movie in '/api/movies' POST route
//     uploadData.append("imageUrl", e.target.files[0]);

//     service
//       .uploadImage(uploadData)
//       .then((response) => {
//         // console.log("response is: ", response);
//         // response carries "fileUrl" which we can use to update the state
//         setImageUrl(response.fileUrl);
//       })
//       .catch((err) => console.log("Error while uploading the file: ", err));
//   };

//   // ******** this function submits the form ********
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     service
//       .createMovie({ title, description, imageUrl })
//       .then((res) => {
//         // console.log("added new movie: ", res);
//         // Reset the form
//         setTitle("");
//         setDescription("");
//         setImageUrl("");

//         // navigate to another page
//         navigate("/");
//       })
//       .catch((err) => console.log("Error while adding the new movie: ", err));
//   };

//   return (
//     <div>
//       <h2>New Movie</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <label>Description</label>
//         <textarea
//           type="text"
//           name="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <input type="file" onChange={(e) => handleFileUpload(e)} />

//         <button type="submit">Save new movie</button>
//       </form>
//     </div>
//   );
// }

// export default AddMovie;

import React, { useState } from "react";
import axios from "axios";

const Avatar = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", selectedFile);
      const response = await axios.post("/api/upload", formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Avatar;