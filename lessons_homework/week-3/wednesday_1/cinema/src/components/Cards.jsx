import React, { Component } from 'react'
import 'bootswatch/dist/solar/bootstrap.min.css'

export default class Cards extends Component {
    render() {
        const {Title,Poster,Year,Type} = this.props.movie
        return (
            <div className="container ms-1 text-center">
                    <div className="card text-white bg-dark m-2 d-flex">
                        <img src={Poster} className="w-100" height="300px" />
                        <div className="card-body">
                            <h5 className="card-title">{Title} </h5>
                            <h6 className="card-subtitle mb-2 text-muted">{Year} </h6>
                        </div>
                        <div className="m-2">
                            <a
                                className="btn btn-danger"
                                href="/"
                            >detalle
                            </a>
                        </div>
                </div>
            </div>
        )
    }
}