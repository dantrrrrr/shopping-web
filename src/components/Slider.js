import React from 'react'
import styled from 'styled-components'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({
       display:"none"
    })}

`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1s ease-in-out;

`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};

`
const ImgContainer = styled.div`
    flex:1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


`
const Image = styled.img`
    height: 80%;

`
const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`
const Title = styled.h1`
    font-size:70px;
`
const Desc = styled.p`
    margin:50px 0px ;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding:10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;


`


const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: lightgray;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left:${props => props.direction === "left" && "10px"};  
    right:${props => props.direction === "right" && "10px"};  
    opacity: 0.5;
    z-index: 2;



`
const Slider = () => {
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2); // if item is at first -> left -> 2 (last item )
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);//if is last item 2 -> right->fisrt item 0
        }
    };
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <Container>
            {
                <Arrow direction="left"
                    onClick={() => handleClick('left')}
                >
                    <FaAngleLeft />

                </Arrow>}
            <Wrapper slideIndex={slideIndex} >
                {sliderItems.map(item => (

                    <Slide bg={item.bg} >

                        <ImgContainer >
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button> SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            {
                <Arrow direction="right" onClick={() => handleClick('right')}>
                    <FaAngleRight />
                </Arrow>
            }

        </Container>
    )
}

export default Slider