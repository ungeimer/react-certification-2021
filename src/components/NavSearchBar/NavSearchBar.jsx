import React, { useState, useContext } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';
import { AppContext } from '../../providers/App/AppProvider';
import { types } from '../../providers/App/types';

export const NavSearchBar = () => {
  const { dispatch } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
    dispatch({
      type: types.setDarkMode,
    });
  };

  const onSubmit = (event) => {
    dispatch({
      type: types.setPlayVideo,
      payload: false,
    });
    dispatch({
      type: types.setSearchButton,
      payload: true,
    });
    dispatch({
      type: types.setPassToChild,
      payload: searchTerm,
    });
    event.preventDefault();
  };

  return (
    <Navbar style={{ backgroundColor: '#1C5476' }} expand="lg">
      <Navbar.Brand
        style={{
          color: '#FFFFFF',
          padding: '10px 10px',
          justifyContent: 'space-around',
        }}
        href="/"
      >
        WizeTube
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" style={{ justifyContent: 'space-around' }}>
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{
            maxHeight: '100px',
            backgroundColor: '#1C5476',
            justifyContent: 'space-around',
          }}
          navbarScroll
        >
          {' '}
        </Nav>
        <div style={{ justifyContent: 'space-around' }}>
          <Form
            className="d-flex"
            onSubmit={onSubmit}
            style={{
              backgroundColor: '#3E6D8A',
              border: 'none',
              overflow: 'hidden',
              borderRadius: '5px',
              outline: 'none',
            }}
          >
            <Button
              style={{
                backgroundColor: '#3E6D8A',
                border: 'none',
                overflow: 'hidden',
                outline: 'none',
              }}
              onClick={() => {
                dispatch({
                  type: types.setSearchButton,
                  payload: true,
                });
                dispatch({
                  type: types.setPlayVideo,
                  payload: false,
                });
                dispatch({
                  type: types.setPassToChild,
                  payload: searchTerm,
                });
              }}
            >
              <BiSearchAlt2 color="white" size="30px" />
            </Button>
            <FormControl
              type="search"
              placeholder="Search.."
              aria-label="Search"
              style={{
                backgroundColor: '#3E6D8A',
                border: 'none',
                color: 'white',
                outline: 'none',
                boxShadow: 'none',
              }}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </Form>{' '}
        </div>
        <FormControlLabel
          control={<Switch checked={checked} onChange={toggleChecked} />}
          label="Dark mode"
          style={{
            color: 'white',
          }}
        />
        <div style={{ justifyContent: 'space-around' }}>
          <Nav>
            <Link to="/login">
              {' '}
              <FaRegUserCircle color="white" size="35px" />
            </Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
