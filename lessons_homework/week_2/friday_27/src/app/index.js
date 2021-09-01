import Comentario from './comentario.js';
import './style.css';

console.log("paila")
async function inicio(){
    const com = new Comentario();
    const res = await com.obtenerCategotias();
    console.log(res.categories)
}

inicio()