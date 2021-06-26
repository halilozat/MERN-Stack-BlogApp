import React, { useState, useEffect } from 'react'
import { FcEditImage } from 'react-icons/fc'
import { AiOutlineLogin } from 'react-icons/ai'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  Navbar,
  Nav,
  Button,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions.js'

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const [user, setUser] = useState()

  const exit = async (id) => {
    await dispatch(logout(id))
    setUser(null)
    history.push('/')
  }

  useEffect(() => {
    console.log(user)
    if (localStorage.getItem('user') && !user) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
    console.log(user)
  }, [location, user])

  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <LinkContainer to='/'>
          <Navbar.Brand href='#home' className='ml-2'>-Blog App-</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            {
              user ? (
                <>
                  <LinkContainer to='/create'>
                    <Nav.Link>
                      <Button variant='outline-light'>
                        <FcEditImage className='m-1' size={20} />
                        Bir Yazı Paylaş
                      </Button>
                    </Nav.Link>
                  </LinkContainer>

                  <Nav.Link>
                    <Button
                      onClick={(e) => {
                        exit(user.user._id)
                      }}
                      variant='outline-danger'
                    >
                      <RiLogoutCircleLine size={20} className='mr-2' />
                      Çıkış Yap
                    </Button>
                  </Nav.Link>
                </>
              ) : (
                <LinkContainer to='/auth'>
                  <Nav.Link>
                    <Button variant='outline-light'>
                      <AiOutlineLogin size={20} className='m-1' />
                      Giriş Yap
                    </Button>
                  </Nav.Link>
                </LinkContainer>
              )
            }




          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header