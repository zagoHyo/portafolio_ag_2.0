import React, { Component } from 'react'
import Cards from '../components/Cards'
import 'bootswatch/dist/solar/bootstrap.min.css'

export default class ListContainer extends Component {
    constructor(){
        super();
        this.state= {
            peli: []
        }
    }
    async componentDidMount() {
        const url = 'http://localhost:4000/peliculas';
            const resp = await fetch(url);
            const data = await resp.json()
            console.log(data)
            this.setState({peli:data})
    }
    render(){
        return(
            <div className="container row row-cols-1 row-cols-md-4 g-4 py-5 text-center ms-5">
                {
                    this.state.peli.map((movie,index) => {
                        return(
                            <div key={index}>
                                <Cards movie={movie} />
                            </div>
                        )
                    })
                }
                {/* <Cards /> */}
            </div>    
        )
    }
}
