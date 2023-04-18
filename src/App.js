import './App.css';
import React, { useEffect, useState } from "react";
import Journal from './Journal';

//React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/"> <img src="/img/expresume-logo.png" className='navLogo' /> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/journal">Journal</Nav.Link>
            <Nav.Link href="/myresume">My Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ <div>Landing Page (Home)</div> } />
        <Route path="/journal" element={ <div><Journal /></div> } />
        <Route path="/myresume" element={ <div>My Resume Page</div> } />
      </Routes>

    </div>
  );
}

export default App;
