import axios from 'axios'
import md5 from 'md5'
import uuid from 'react-uuid'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const baseUrl = "https://git.heroku.com/class-component.git";

export default class Registro extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            form: {
                id: '',
                apellido_paterno: '',
                apellido_materno: '',
                nombre: '',
                username: '',
                password: ''
            }
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    registroUsuario = async ()=> {
        await axios.post(baseUrl, {
            id:uuid,
            apellido_paterno: this.state.form.apellido_paterno,
            apellido_materno: this.state.form.apellido_materno,
            nombre: this.state.form.nombre,
            username: this.state.form.username,
            password: md5(this.state.form.password)
        }).then(response => {
            alert('Usuario Registrado')
        }).catch(error => {
            console.log(error.message)
        })
    }

    render() {
        return (
            <div className="Registro py-5 container text-center">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">
                        ¡Registrate en nuestro sistema!
                    </h1>
                    <div className="fadeIn first">
                        <img src="" id="icon" alt="User Icon" width="100px"/> <h3>Crea una cuenta</h3>
                    </div>

                    <input type="text" placeholder="Apellido paterno" name="apellido_paterno" className="form-control" autoComplete="off" onChange={this.handleChange} />

                    <input type="text" placeholder="Apellido materno" name="apellido_materno" className="form-control" autoComplete="off" onChange={this.handleChange} />

                    <input type="text" placeholder="Nombre" name="nombre" className="form-control" autoComplete="off" onChange={this.handleChange} />

                    <input type="email" placeholder="Email" name="userName" className="form-control" autoComplete="off" onChange={this.handleChange} />
                    
                    <input type="password" placeholder="Password" name="password" className="form-control" autoComplete="off" onChange={this.handleChange} />

                    <br />

                    <button type="submit" className="btn btn-primary btn-block mb-1" onclick={() => this.registroUsuario()}>Registro</button>

                    <br />
                    <Link to="/" className="link">Already registered?</Link>
                </form>
            </div>
        )
    }
}
