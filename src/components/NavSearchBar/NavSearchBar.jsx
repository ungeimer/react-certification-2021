import React from 'react';   
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BiSearchAlt2 } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";


export const NavSearchBar = () => {
      return (
        <>
        <Navbar style={{ backgroundColor: '#1C5476' }} expand="lg">
            <Navbar.Brand style={{ color: '#FFFFFF', padding:'10px 10px' }} href="/">WizeTube</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' , backgroundColor: '#1C5476' }}
                navbarScroll>
                <NavDropdown title="Menu" id="navbarScrollingDropdown"  style={{ color: '#FFFFFF' }}>
                    <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
                </NavDropdown>
                
                </Nav>
                <Form className="d-flex" style={{  backgroundColor:'#3E6D8A', border: 'none', overflow: 'hidden',  borderRadius: '5px', outline:'none'}}>
                    <Button style={{  backgroundColor:'#3E6D8A', border: 'none', overflow: 'hidden', outline:'none' }}> 
                        <BiSearchAlt2 color="white" size="30px" />
                    </Button>
                    <FormControl
                    type="search"
                    placeholder="Search.."
                    aria-label="Search"
                    style={{  backgroundColor:'#3E6D8A', border: 'none', color: 'white', outline:'none', boxShadow: 'none' }}
                    defaultValue="wizeline"
                    />
                </Form>
                <Nav.Link href="/login"  > <FaRegUserCircle  color="white" size="35px" /> </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
        </>
      );
    }