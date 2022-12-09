import React from 'react'
import styled from "styled-components"
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { mobile } from '../responsive'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input placeholder="search" />
                        <FaSearch style={{ color: "gray", fontSize: "16px" }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>dantr.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge  >
                            <span className="quantity" >7</span>

                            <FaShoppingCart className='shoppingCart' />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}



const Container = styled.div`
    height:auto;
   
    box-sizing: border-box;
    ${mobile({ backgroundColor: "none" })}
    
    
    
`
const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items:center;
`
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
    display: "none"
})}
`
const SearchContainer = styled.div`
    border:1px solid lightgray;
    display: flex;
    align-items:center;
    margin-left: 25px;
    padding: 5px;
    width: 50%;
    justify-content: flex-end;
    cursor: pointer;
    color:black;
`
const Input = styled.div`
    border:none;
    ${mobile({
    width: "50px"
})}
    color:black;
    

`
const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
    fontSize: "24px"
})}
    
`
const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    align-items:center;
     ${mobile({
    justifyContent: "center",
    flex: 2
})}
`
const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({
    fontSize: "12px",
    marginLeft: "10px"
})}
`
const Badge = styled.div`
    height: 20px;
    width: 20px;
    font-size: 16px;
    position: relative;
    
    span.quantity{
       
        height: 80%;
        width: 80%;
        background: red;
        color: #fff;
        border-radius: 50%;
        font-size: 0.7em;
        font-weight: 800;
        display: flex;
        justify-content:center;
        padding: 2px;
        text-align: center;
       
        z-index: 1;
        box-sizing: border-box;
        position: absolute;
       top:-0.7em;
       right: -0.5em;
       

    }
    svg{
        height: 100%;
        width: 100%;
        font-size: 1em;
        z-index: 0;
        ${mobile({
        })}
    }
    
   
`

export default Navbar