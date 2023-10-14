import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import Message from '../components/Message'

function LoginScreen() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    
    const dispatch = useDispatch()
    const history = useNavigate(); 

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    const location = useLocation()
    const redirect = location.search ? location.search.split('=')[1] : '/availability-create'

    useEffect(() => {
        if(userInfo){
            history(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }

  return (
    <FormContainer>
      <h1 className='mb-4 mt-5'>Sign In</h1>

      {error && <Message variant='danger'>{error}</Message>}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}>
            </Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}>
            </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='my-3'> Sign In</Button>

      </Form>


    </FormContainer>
  )
}

export default LoginScreen