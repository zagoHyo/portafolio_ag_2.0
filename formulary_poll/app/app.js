function Constructor(name,personality,age,pasion,comentary){
    this.name = name
    this.age = age
    this.personality = personality
    this.pasion = pasion
    this.comentary = comentary
    this.greeting = `My personality is oriented to ${this.personality}, I have ${this.age} years, Whay I am passionate ${this.pasion}`
}

function enviarInfo(){
    let nombre = document.getElementById('name').value;
    let edad = document.getElementById('age').value;
    let personalidad = document.getElementById('personality').value
    let pasion = document.getElementById('pasion').value
    let mensage = document.getElementById('mensage').value
    
    if(nombre === "" || edad === ""|| personalidad === "" || pasion === "" || mensage ===""){
        console.log("error, ningun dato ingresado")
    }else{
        animar = new Constructor(nombre, personalidad, edad, pasion, mensage)
    }
}

function mostrarinfo(){
    mostrarAnimar = document.querySelector('.animar')
    let animation = document.createElement('article')
    animation.classList.add("message")
    animation.classList.add("is-warning")
    animation.classList.add("box")
    animation.setAttribute('id', "alert")
    animation.innerHTML += `
    <div class="message-header">
        ${animar.name}
        <button class="delete" onclick="deleteAnimar()"></button>
    </div>
    <div class="message-body">
        ${animar.greeting}<br>
        ${animar.comentary}
    </div>
    `
    mostrarAnimar.appendChild(animation)
}

function deleteAnimar(){
    mostrarAnimar.innerHTML = ''
}

document.querySelector('#visualizar').addEventListener('click', mostrarinfo)
document.getElementById('submit').addEventListener('click', enviarInfo)