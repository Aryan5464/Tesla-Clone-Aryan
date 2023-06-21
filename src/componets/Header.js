import React, { useState } from 'react'
import Styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
            </RightMenu>

            <CoustomMenu onClick={() => setBurgerStatus(burgerStatus ? false : true)} />

            <BurgerNav show={burgerStatus}>
                <CrossWrapper>
                    <CrossIcon onClick={() => setBurgerStatus(burgerStatus ? false : true)} />
                </CrossWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>

    )
}

export default Header

const Container = Styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;  
    }

    @media (max-width: 786px) {
        display: none;
    }
`

const RightMenu = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 15px;
    }

    @media (max-width: 786px) {
        flex: 1;
    }
`

const CoustomMenu = Styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = Styled.div`
    position: fixed;
    top: 0;
    bottom: 0; 
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transition: transform 0.2s;
    
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        
        a { 
            font-weight: 600;
        }
    }
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(300px)'}
`

const CrossIcon = Styled(CloseIcon)`
    cursor: pointer;
`

const CrossWrapper = Styled.div`
    display: flex;
    justify-content: flex-end; 
`