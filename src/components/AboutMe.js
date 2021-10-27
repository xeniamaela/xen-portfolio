// React Library
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function AboutMe(){
    return(
        <Jumbotron className="my-5">
        <ul>
        <h1>About Me</h1>
            <li>First Name: Xen</li>
            <li>Last Name: Abano</li>
            <li>Age: 21</li>
        </ul>
        </Jumbotron>
    )
}