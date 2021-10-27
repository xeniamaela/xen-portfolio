// React Library
import React from 'react'

// App.css
import './App.css'

// Reusable Components
import Navbar from './components/Navbar'
import Card from './components/Card'
import Jumbotron from './components/Jumbo'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'

// Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap'


export default function App(){
	return (
		<>
			<Navbar/>
			<Jumbotron/>
			<Container>
				<Row>
					<Col><Card/></Col>
					<Col><Card/></Col>
					<Col><Card/></Col>
				</Row>
			</Container>
			<Container><AboutMe/></Container>
			<Footer/>
		</>
	)
}