import React from 'react'
import { FcEditImage } from 'react-icons/fc'
import { AiOutlineLogin } from 'react-icons/ai'
import {
  Navbar,
  Nav,
  Button,
} from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <LinkContainer to='/'>
          <Navbar.Brand href='#home' className='ml-2'>-Blog App-</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <LinkContainer to='/create'>
              <Nav.Link>
              <Button variant='outline-light'>
                  <FcEditImage className='m-1' size={20} />
                   Bir Yazı Paylaş
                </Button>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/auth'>
              <Nav.Link>
              <Button variant='outline-light'>
                  <AiOutlineLogin size={20} className='m-1' />
                  Giriş Yap
                </Button>
              </Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header