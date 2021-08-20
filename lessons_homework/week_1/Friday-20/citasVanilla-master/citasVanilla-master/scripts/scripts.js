document.addEventListener('DOMContentLoaded', () => {
    getLocalStorage()
    citas = (JSON.parse(localStorage.getItem('Citas')));
});

let formulario = document.querySelector('form');
let listarCita = document.getElementById('listarCita');
let buscar = document.getElementById('btnBuscar');
let busqueda = document.getElementById('busqueda');
let login_register = document.getElementById('registro')
let registerLocal = []
let citas = [];


function register(num) {
    if(num === 1){
        login_register.innerHTML = ''
        login_register.innerHTML = `
        <form class="bg-light">
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">nombre de usuario</label>
            <input type="text" class="form-control" id="nombre_usuario" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="contraseña">
            </div>
            <button type="button" class="btn btn-primary" onclick="subirLocalRegister()">registrarte</button>
        </form>
        `    
    }else{
        login_register.innerHTML = ''
        login_register.innerHTML = `
        <form class="bg-light">
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
            <input type="email" class="form-control" id="email_login" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">nombre de usuario</label>
            <input type="text" class="form-control" id="nombre_usuario_login" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="contraseña_login">
            </div>
            <button type="button" class="btn btn-primary" onclick="entrar()">Iniciar</button>
        </form>
        `
    }
}

function subirLocalRegister(){
    let email = document.getElementById('email').value
    let nombre_usuario = document.getElementById('nombre_usuario').value
    let contraseña = document.getElementById('contraseña').value
    if(contraseña.length < 4 || nombre_usuario === "" || email === ""){
        login_register.innerHTML += `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> Fallas
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `}
    else{
    let registerArray = {
        email,
        nombre_usuario,
        contraseña
    }
    login_register.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Hola querido usuario!</strong> Existen fallas en su nombre o contraseña, verifique que todo este bien por favor
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
    registerLocal.unshift(registerArray)
    localStorage.setItem('register', JSON.stringify(registerLocal))
    }
}

function entrar(){
    let email_login = document.getElementById('email_login').value
    let nombre_usuario_login = document.getElementById('nombre_usuario_login').value
    let contraseña_login = document.getElementById('contraseña_login').value
    let panela = JSON.parse(localStorage.getItem('register'))
    console.log(panela[0].email)
    if(panela[0].nombre_usuario === nombre_usuario_login && email_login === panela[0].email && contraseña_login === panela[0].contraseña){
        login_register.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>${nombre_usuario_login}</strong> Bienvenido, Nos alegra volver a verte
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
    }else{
        login_register.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Error</strong> Los datos no coinciden
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
    }
}

const capturaDatos = () => {
    
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;
    
    let registro = {
        nombre,
        fecha,
        hora,
        sintomas
    }    
    citas.unshift(registro);
    localStorage.setItem('Citas',JSON.stringify(citas));
    getLocalStorage();
}    

formulario.addEventListener('submit', e => {
    // Detiene e evento si este es cancelable, sin detener el resto de las funciones
    e.preventDefault();
    capturaDatos();
})    


const getLocalStorage = () =>{
    listarCita.innerHTML = '';
    citasLocalStorage = JSON.parse(localStorage.getItem('Citas'));
    //console.log(citasLocalStorage);
    citasLocalStorage.map(cita => {
        const {nombre,fecha,hora,sintomas} = cita;
        listarCita.innerHTML += `
                            <td>${nombre}</td>
                            <td>${fecha}</td>
                            <td>${hora}</td>
                            <td>${sintomas}</td>
        `                       
     })   
}     



buscar.addEventListener('click', e => {
    e.preventDefault();
    let input = document.getElementById('inputBuscar').value;
    data = JSON.parse(localStorage.getItem('Citas'));
    filtro = data.filter(cita => cita.nombre.toLowerCase()  === input.toLowerCase())
    busqueda.innerHTML = '';  
    console.log(filtro)  
   
     filtro.length === 0 ?
          busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe</div>`
          :
          (
            filtro.map(cita => { 
                const {nombre,fecha,hora,sintomas} = cita;
                busqueda.innerHTML += `
                                    <div style="color:white;">${nombre}</div>
                                    <div style="color:white;">${fecha}</div>
                                    <div style="color:white;">${hora}</div>
                                    <div style="color:white;">${sintomas}
                                    <button id="borrar" class="borrar" onclick="delete_history()">Borrar</Button></div><br>
                `   
             })
          )
          
})

function delete_history(){
    console.log(filtro)
    filtro.map((borrar,index) => {
        console.log(borrar, index)
        filtro.splice(index, 1)
        data.splice(index, 1)
        localStorage.setItem('Citas', JSON.stringify(data))
        busqueda.innerHTML = '';
    })
}


