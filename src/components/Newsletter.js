import React from 'react'
import styled from 'styled-components'
import { FiSend } from 'react-icons/fi'
import { mobile } from '../responsive'

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter </Title>
            <Desc>Get timely update from our products.</Desc>
            <InputContainer>
                <Input type="email" placeholder='Your email' />
                <Button>
                    <FiSend />
                </Button>
            </InputContainer>

        </Container>
    )
}
const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-style: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({
           width:"80%"
        })}
`
const Input = styled.input`
    padding-left: 20px; 

    border: none;
    flex: 8;
   
    &:focus{
        outline: none ;
    }
`
const Button = styled.button`
    flex: 1;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: #fff;
    svg{
        font-size: 24px;
        font-weight: 500;
    }
`
export default Newsletter