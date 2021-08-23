document.addEventListener('DOMContentLoaded', () => {
    pintar_dates()
})

import {list} from "./module/list_group.js"
import {introduction, que_es_react, primeros_pasos_react, react_features, Componentes_React, class_ES6,properties, link} from "./module/description's.js"
let list_index = document.getElementById('list')
let description = document.getElementById('description')

function pintar_dates(){
    list_index.innerHTML = list
    description.innerHTML = introduction
    description.innerHTML += que_es_react
    description.innerHTML += primeros_pasos_react
    description.innerHTML += react_features
    description.innerHTML += Componentes_React
    description.innerHTML += class_ES6
    description.innerHTML += properties
    description.innerHTML += link
}