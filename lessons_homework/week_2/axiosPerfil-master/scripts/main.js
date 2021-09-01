import Usuario from '../scripts/class/Usuario.js';

let formulario = document.getElementById('formulario');
let btnCorreo = document.getElementById('btnCorreo');

const usuario = new Usuario();

formulario.addEventListener('submit', e => {
    e.preventDefault();
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value;
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    //console.log(usuario);
    usuario.crearPerfil(usuario);
})

btnCorreo.addEventListener('click', () => {
    let correos = document.getElementById('email').value;
    document.getElementById('email').readOnly = true;
    usuario.buscarPerfil(correos); 
    let perfil = JSON.parse(localStorage.getItem('Buscado'));
    console.log(perfil)
    const {nombre, apellido, correo,id} = perfil;
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('id').value = id;

})

btnEditar.addEventListener('click', () => {
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value;
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    usuario.editarPerfil(usuario,id);
})

btnEliminar.addEventListener('click', () => {
     let id = document.getElementById('id').value;
     usuario.eliminarPerfil(id)
})