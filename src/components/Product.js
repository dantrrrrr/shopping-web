import React from 'react'
import styled from'styled-components'
import {FaSearch,FaRegHeart} from 'react-icons/fa'
import {HiOutlineShoppingCart} from 'react-icons/hi'
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <HiOutlineShoppingCart/>
            </Icon>
            <Icon>
                <FaSearch/>
            </Icon>
            <Icon>
                <FaRegHeart/>
            </Icon>
        </Info>

         
    </Container>
  )
}
const Info=styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.5s  ease;
    cursor: pointer;
   
`
const Container=styled.div`

    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fdf9;
    position: relative;
    &:hover ${Info}{
        opacity: 1 ;
    }

`
const Circle=styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    z-index: 1;
`
const Image=styled.img`
    height: 75%;
    z-index: 2;

`

const Icon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);

    }
`
export default Product