import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {IoIosRemove,IoIosAdd} from 'react-icons/io'
import { mobile } from '../responsive'


const Container = styled.div``
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
        padding:"10px",
        flexDirection:"column",
    })}
`
const ImgContainer = styled.div`
  flex:1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
        height:"40vh"
    })}
`
const InfoContainer = styled.div`
  flex:1;
  padding: 0 50px;
  ${mobile({
        padding:"10px"
    })}
`
const FilterContainer =styled.div`
  display: flex;
  justify-content: space-between;
  width: 60% ;
  margin: 30px 0px ;
  ${mobile({
        width:"100%"
    })}
  
`

const Filter =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

const FliterTitle =styled.span`
  font-size:20px; 
  font-weight: 200;   
`

const FilterColor =styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  border:  1px solid black;
  margin:  0 5px ;
  cursor: pointer;
`

const FilterSize =styled.select`
  margin-left: 10px;
  
`
const AddContainer =styled.div`
  display: flex;
  align-items:center;
  width: 60%;
  justify-content: space-between ;
  ${mobile({
        width:"100%"
    })} 
`
const AmountContainer =styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  & svg{
    font-size:30px;
  font-weight:700;
  }
`

const Amount =styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border:1px solid teal;
  display: flex;
  align-items:center;
  justify-content: center;
  margin:0 5px;
`

const Button =styled.button`
  padding: 15px;
  border :2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: #f8f4f4;
  }
`

const FilterSizeOption =styled.option``


const Title = styled.h1`
  font-weight: 200;

`
const Desc = styled.p`
  margin:20px 0;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const Product = () => {
  return (
    <Container>

      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://pubcdn.ivymoda.com/files/product/thumab/1280/2022/11/01/c66a84c96b507df1df82951860544083.jpg">
          </Image>
        </ImgContainer>
        <InfoContainer>
          <Title>ĐẦM VEST DÁNG XÒE</Title>
          <Desc>
            Nằm trong BST Timeless với phong
            cách chủ đạo là Academia nên thiết kế của mẫu đầm
            có dáng vẻ đứng đắn và thanh lịch hơn. Với thiết kế cổ áo cổ
            2 ve, tay dài, eo ôm, dáng đầm dài qua đầu gối xòe nhẹ giúp che khuyết điểm
            phần bắp tay và phần thân dưới, mang lại dáng vẻ thanh mảnh hơn cho nàng.
          </Desc>
          <Price> $ 20 </Price>
          <FilterContainer>
            <Filter>
              <FliterTitle>Color </FliterTitle>
              <FilterColor color="black"/>
              <FilterColor color="white"/>
              <FilterColor color="red"/>
              <FilterColor color="gray"/>
            </Filter>
            <Filter>
              <FliterTitle>Size </FliterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>

            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <IoIosRemove/> 
              <Amount>1</Amount>
              <IoIosAdd/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product