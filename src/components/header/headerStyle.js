import styled from 'styled-components';
import React from "react";
import SearchIcon from '@material-ui/icons/Search';


export const HeaderBody = styled.div`
display: flex;
height: 60px;
align-items: center;
background-color: #131921;
top: 0;
position: sticky;
z-index: 99999;
`

export const Image = styled.img`
width: 100px;
object-fit: contain;
margin: 18px 20px 0 20px;
`

export const HeaderSearchIcon = styled(SearchIcon)`
padding: 5px;
height: 22px !important;
background-color: #cd9042;
`

export const HeaderSearch = styled.div`
display: flex;
flex: 1;
align-items: center;
border-radius: 24px;
`

export const HeaderSearchInput = styled.input`
height: 12px;
padding: 10px;
border: none;
width: 100%;
`

export const HeaderNav = styled.div`
display: flex;
justify-content: space-evenly;
`

export const HeaderOptions = styled.div`
display: flex;
flex-direction: column;
margin: 0 10px;
color: white;
`

export const HeaderOptionLine1 = styled.span`
font-size: 10px;
`

export const HeaderOptionLine2 = styled.span`
font-size: 13px;
font-weight: 800;
`

//TODO: put shopping basket icon from material ui
export const HeaderOptionBasket = styled.div`
display: flex;
align-items: center;
color: white;
`

export const HeaderBasketCount = styled(HeaderOptionLine2)`
margin-left: 10px;
margin-right: 10px;
`
