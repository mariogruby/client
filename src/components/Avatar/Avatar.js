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
import React, { useState } from 'react';
import axios from 'axios';

function Avatar({ userId }) {
    // estado para almacenar la imagen
    const [image, setImage] = useState('');

    // función para manejar la carga de la imagen
    function handleImageUpload(event) {
        const { files } = event.target;
        setImage(URL.createObjectURL(files[0]));
    }

    // función para manejar el envío del formulario
    function handleSubmit(event) {
        event.preventDefault();

        // crear una instancia de FormData para enviar la imagen y el ID del usuario
        const formData = new FormData();
        formData.append('avatar', event.target.elements.avatar.files[0]);
        formData.append('userId', userId);

        // enviar la imagen y el ID del usuario al backend usando axios
        axios.post('/api/avatar', formData)
            .then(response => {
                console.log('La imagen ha sido cargada con éxito');
            })
            .catch(error => {
                console.error('Hubo un error al cargar la imagen', error);
            });
    }

    return (
        <div>
            {/* mostrar la imagen */}
            <img src={image} alt="avatar" />

            {/* formulario para cargar la imagen */}
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" name="avatar" onChange={handleImageUpload} />
                <input type="hidden" name="userId" value={userId} />
                <button type="submit">Cargar imagen</button>
            </form>
        </div>
    );
}

export default Avatar;