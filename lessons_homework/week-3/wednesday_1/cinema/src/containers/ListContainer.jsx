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
            <div>
                {
                    this.state.peli.map((movie,index) => {
                        return(
                            <div>
                                <Cards  key={movie.id} movie={movie} />
                            </div>
                        )
                    })
                }
                {/* <Cards /> */}
            </div>    
        )
    }


    // render() {
    //     return (
    //         <div>
    //             <Cards />
    //         </div>
    //     )
    // }
}
