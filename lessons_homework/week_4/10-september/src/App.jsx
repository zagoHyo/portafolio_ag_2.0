import {useEffect,useState} from 'react'
import axios from 'axios'
const url = "http://maestrogeekapp.herokuapp.com/data/"

export default function App(){
    const [usuario, setUsuario] = useState([]);

    const [values, setValues] = useState({
        documento: '',
        nombres: '',
        apellidos: '',
        telefono: '',
        celular: '',
        direccion: '',
        imagen: ''
    })

    const {documento, nombres, apellidos, telefono, celular, direccion, imagen} = values;

    useEffect(() => {
        peticionGek();
    }, [])

    const peticionGek = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setUsuario(data)
    }

    const peticionPost = async (e) => {
        await axios.post(url,values)
        .then(response => {
            console.log(response); 
            peticionGek()
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const handleChange = async ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
            console.log(values);
    }

    return(
        <div>
            <h1>Registro</h1>
            <form>
                <label>Documento</label>
                <input type="text" id="documento" name="documento" value={documento} onChange={handleChange}/>

                <label>Nombres</label>
                <input type="text" id="nombres" name="nombres" value={nombres} onChange={handleChange} />

                <label>Apellidos</label>
                <input type="text" id="apellidos" name="apellidos" value={apellidos}  onChange={handleChange} />

                <label>Telefonos</label>
                <input type="text" id="telefono" name="telefono" value={telefono} onChange={handleChange} />

                <label>Celular</label>
                <input type="text" id="celular" name="celular" value={celular} onChange={handleChange} />

                <label>Dirección</label>
                <input type="text" id="direccion" name="direccion" value={direccion} onChange={handleChange} />

                <label>Imagen</label>
                <input type="text" id="imagen" name="imagen" value={imagen} onChange={handleChange} />

                <br />

                <button type="button" onClick={() => peticionPost()}>Enviar</button>

            </form>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Documento</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Teléfono</th>
                        <th>Celular</th>
                        <th>Direccion</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuario.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.documento}</td>
                                <td>{user.nombres}</td>
                                <td>{user.apellidos}</td>
                                <td>{user.telefono}</td>
                                <td>{user.celular}</td>
                                <td>{user.direccion}</td>
                                <td><img src={user.imagen} alt="" height="100px" width="100px" /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}