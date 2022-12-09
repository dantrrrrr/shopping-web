import React from 'react'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {mobile} from '../responsive'

const Container = styled.div`

`;
const Wrapper =styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top =styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props=> props.type ==="filled" ? "none":"1px solid black"};
    background-color : ${props=> props.type ==="filled" ? "black":"white"};
    color :${props=> props.type ==="filled" ? "white" :"black"};
`
const TopTexts =styled.div`
     ${mobile({
        display:"none"
    })}
`
const TopText =styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`
const Bottom =styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection:"column"
    })}
`;
const Info =styled.div`
    flex: 3;
`;
const Product =styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection:"column"
    })}
`
const Hr =styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;

`;
const Image = styled.img`
   width: 200px ;
   aspect-ratio: 1;
    object-fit: cover;
`;
const Details = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props =>props.color};

`;
const ProductSize = styled.span`

`;
//summary 
const Summary =styled.div`

    flex:1;
    border:0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 60vh;
`;
const SummaryTitle =styled.h1`
    font-weight: 200;
    text-transform: uppercase;
    text-align: center;
`
const SummaryItem =styled.div`
    margin:30px 0 ;
    display: flex;
    justify-content: space-between;
    font-weight: ${props =>props.type === "total" && "500" };
    font-size: ${props =>props.type === "total" && "24px" };
`
const SummaryItemText =styled.span``
const SummaryItemPrice =styled.span``
const Button =styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color:white;
`

///
const PriceDetail = styled.span`
    flex:1;
    display: flex;
    align-items: center ;
    justify-content: center;
    flex-direction: column;
    ${mobile({
        margin:"10px 0px"
    })}
`;
const ProductAmountContainer =styled.div`
    display: flex;
    align-items:center;  
    margin-bottom: 20px;
    & svg{
        font-size:24px;
        font-weight: 500;
    }      
`;
const ProductAmount =styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({
        margin:"5px 15px"
    })}
`;
const ProductPrice =styled.div`
    font-size: 30px;
    font-weight: 300;
    ${mobile({
        marginBottom:"20px"
    })}
`;


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>

        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Cart (2)</TopText>
                    <TopText>Your wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECK OUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                            <Image src="https://pubcdn.ivymoda.com/files/product/thumab/1280/2022/10/12/2046bcfce3181ec40d1d958ce97f8a13.jpeg"/>
                            <Details>
                                <ProductName> <b>Product :</b>DAM NAM NU THOI TRANG </ProductName>
                                <ProductId> <b>ID :</b>3472313417 </ProductId>
                                <ProductColor color="black"></ProductColor>
                                <ProductSize> <b>Size : </b> M</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetail>
                             <ProductAmountContainer>
                                <IoIosAdd/>
                                <ProductAmount>2</ProductAmount>
                                <IoIosRemove/>

                             </ProductAmountContainer>
                              <ProductPrice>$ 30 </ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetails>
                            <Image src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/11/01/6de0dc05fe93ac555b0d97619f71c3b2.jpg"/>
                            <Details>
                                <ProductName> <b>Product :</b>AO TRang </ProductName>
                                <ProductId> <b>ID :</b>1221312 </ProductId>
                                <ProductColor color="red"></ProductColor>
                                <ProductSize> <b>Size : </b> L</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetail>
                             <ProductAmountContainer>
                                <IoIosAdd/>
                                <ProductAmount>1</ProductAmount>
                                <IoIosRemove/>

                             </ProductAmountContainer>
                              <ProductPrice>$ 10 </ProductPrice>
                        </PriceDetail>
                    </Product>

                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Sub Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimate Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 2.9</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount </SummaryItemText>
                        <SummaryItemPrice>$ -1</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText > Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECK OUT</Button>
                </Summary>

            </Bottom>
        </Wrapper>
        <Footer/>

    </Container>
  )
}

export default Cart