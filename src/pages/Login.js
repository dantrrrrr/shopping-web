import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
        url("https://images.unsplash.com/photo-1666434307853-3be50c649f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content:center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: #fff;
    ${mobile({
       width:"60%"
    })}

`
const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width:40%;
    margin:10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 100%;
    border:none;
    padding: 15px 20px ;
    background-color: teal;
    color:white;    
    cursor: pointer;
    margin: 20px 0 ;
`
const Link =styled.a`
    margin:5px 0px;
    font-size: 12px;
    text-decoration :underline ;
    cursor: pointer;
    text-transform: uppercase;
`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>

                    <Input placeholder="username"></Input>
                    <Input placeholder="password"></Input>
                   
                   
                    <Button>LOG IN</Button>

                    <Link>Forgot password ?</Link>
                    <Link>Create new acount</Link>
                </Form>
            </Wrapper>

        </Container>
    )
}

export default Login