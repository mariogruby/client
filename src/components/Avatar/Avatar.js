import React, { useState , useContext} from 'react';
import axios from "axios";
import { AuthContext } from '../../context/auth.context';
const Avatar = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const {user} = useContext(AuthContext)

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", selectedFile);
      const response = await axios.post(process.env.REACT_APP_SERVER_URL + "/api/upload/"+user._id, formData);
      console.log(response.data);

      // Llamada a axios a la ruta que edita el usuario en back y pasarle el response.data

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