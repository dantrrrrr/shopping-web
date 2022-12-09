import React from 'react'
import styled from "styled-components"
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { GrMail } from 'react-icons/gr'
import { mobile } from '../responsive'


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>dantr. </Logo>
                <Desc>
                    This is my project web site E-Commerce - dantr
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FaFacebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <FaInstagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <FaTwitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <FaTelegram />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Acount</ListItem>
                    <ListItem>Term</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <FaMapMarkerAlt style={{marginRight:"10px   "}} /> Go Vap,Ho Chi Minh, Viet Nam
                </ContactItem>
                <ContactItem>
                    <FaPhoneAlt style={{marginRight:"10px   "}} />07 0679 0639
                </ContactItem>
                <ContactItem>
                    <GrMail style={{marginRight:"10px   "}} />huynhngdantr@gmail.com
                </ContactItem>
                <Payment src ="https://www.pngkey.com/png/full/333-3335493_follow-us-payment-method-icons-png.png"/>
            </Right>

        </Container>
    )
}
const Container = styled.div`
 display: flex;
 width: 100vw;
 overflow:hidden;
 ${mobile({
     flexDirection: "column"
           
        })}


`
const Left = styled.div`
    flex :1;
    display: flex; 
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
margin: 0;`
const Desc = styled.p`
     margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
  

`
const SocialIcon = styled.div`
    width: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex :1;
    padding: 20px;
    ${mobile({
        display:"none"    
    })}
`
const Title = styled.h3`
    margin: 0;
    margin-bottom: 20px;    
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none ;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50% ;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex :1;
    padding: 20px;
    ${mobile({
        backgroundColor:"#fcf5f5"
    })}

`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
   

`
const Payment = styled.img`
    width: 50%;
`

export default Footer