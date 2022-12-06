import React from 'react'
import styled from "styled-components"
import { FaSearch, FaShoppingCart } from 'react-icons/fa'



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input/>
                        <FaSearch style={{color:"gray",fontSize:"16px"}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>dantr.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge>
                            <span className="quantity">7</span>

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
`
const Input = styled.div`
    border:none;
    

`
const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    
`
const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    align-items:center;
    
`
const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
`
const Badge = styled.div`
   
   
    
    span.quantity{
        height: 20px;
        width: 20px;
        background: red;
        color: #fff;
        border-radius: 50%;
        font-size: 14px;
        font-weight: 800;
        display: flex;
        justify-content:center;
        padding: 2px;
        text-align: center;
        margin-left: 15px;
        margin-bottom: -7px;
        z-index: 1;
        box-sizing: border-box;

    }
    .shoppingCart{
        font-size: 25px;
        z-index: 0;
    }
`

export default Navbar