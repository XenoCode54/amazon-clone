import React, {Component} from 'react';
import {
    HeaderBasketCount,
    HeaderBody,
    HeaderNav,
    HeaderOptionLine1, HeaderOptionLine2,
    HeaderOptions,
    HeaderSearch, HeaderSearchIcon,
    HeaderSearchInput, HeaderOptionBasket,
    Image
} from "./headerStyle";
import {ShoppingBasket} from "@material-ui/icons";

class Header extends Component {
    render() {
        return (
            <HeaderBody>
                <Image src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo"/>
                <HeaderSearch>
                    <HeaderSearchInput type="text"/>
                    <HeaderSearchIcon/>
                </HeaderSearch>
                <HeaderNav>
                    <HeaderOptions>
                        <HeaderOptionLine1>Hello Guest</HeaderOptionLine1>
                        <HeaderOptionLine2>Sign In</HeaderOptionLine2>
                    </HeaderOptions>
                    <HeaderOptions>
                        <HeaderOptionLine1>Returns</HeaderOptionLine1>
                        <HeaderOptionLine2>& Orders</HeaderOptionLine2>
                    </HeaderOptions>
                    <HeaderOptions>
                        <HeaderOptionLine1>Your</HeaderOptionLine1>
                        <HeaderOptionLine2>Sign In</HeaderOptionLine2>
                    </HeaderOptions>
                    <HeaderOptions>
                        <HeaderOptionLine1>Your</HeaderOptionLine1>
                        <HeaderOptionLine2>Prime</HeaderOptionLine2>
                    </HeaderOptions>
                    <HeaderOptionBasket>
                        <ShoppingBasket />
                        <HeaderBasketCount>0</HeaderBasketCount>
                    </HeaderOptionBasket>
                </HeaderNav>
            </HeaderBody>
        );
    }
}

export default Header;
