import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
        url("https://images.unsplash.com/photo-1666434307943-3190f90888a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content:center;
   
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
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
    flex-wrap: wrap ;
`
const Input = styled.input`
    flex: 1;
    min-width:40%;
    margin:20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin:20px 0px ;
    & b{
        text-transform: uppercase;
    }
`
const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px ;
    background-color: teal;
    color:white;    
    cursor: pointer;
`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACOUNT</Title>
                <Form>
                    <Input placeholder="name"></Input>
                    <Input placeholder="last name"></Input>
                    <Input placeholder="email"></Input>
                    <Input placeholder="username"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="confirm password"></Input>
                    <Agreement>
                        By creating an acount ,I consent to the processing of my personal data in accordance with the
                        <b> Privacy Policy</b>

                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>

        </Container>
    )
}

export default Register