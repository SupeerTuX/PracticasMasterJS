'use strict'

//Fetch peticiones a API REST

var div_usuarios = document.querySelector('#usuarios');
var div_user = document.querySelector('#user');
var div_profesor = document.querySelector('#profesor');
getUsers()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);


        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;
        return getUser();
    })
    .then(data => data.json())
    .then(user => {
        mostrarUser(user.data);

    });




function getUsers() {
    return fetch('https://reqres.in/api/users');
}

function getUser() {
    return fetch('https://reqres.in/api/users/2');
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name;
        div_usuarios.appendChild(nombre);

        document.querySelector("#loading").style.display = 'none';
    });
}

function getInfo() {
    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'https://ditg.mx'
    };

    return new Promise((resolve, reject) => {

        var profesorString = "";

        setTimeout(function () {
            profesorString = JSON.stringify(profesor);
            console.log(profesorString);
            if (typeof profesorString != 'string' || profesorString == '') return reject('error1');

            return resolve(profesorString);

        }, 3000);


    });

}

function mostrarUser(user) {

    console.log(user);
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');
    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    div_user.appendChild(nombre);
    div_user.appendChild(avatar);

    document.querySelector("#loadingUser").style.display = 'none';

} 