import React, { Component } from 'react'
import  './Display.css'

export default class Footer extends Component{

    render(){
        return(
            <div className = "foot" >
                <div className = "fot">
                <a href="https://www.nineleaps.com/privacy-policy">
                <font color="white">Privacy Policy</font>
            </a>
            </div>
            <p style = {{textAlign : "center", backgroundColor: "#197EFF"}}>© 2019 Nineleaps</p>
            </div>
        )
    }
}