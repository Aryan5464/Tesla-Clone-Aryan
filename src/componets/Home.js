import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for touchless delivery'
                backgroundImg='model-s.jpg'
                leftBtnTxt='Custom Order'   
                rightBtnTxt='Existing Inventory'
            />
            <Section
                title='Model Y'
                description='Order Online for touchless delivery'
                backgroundImg='model-y.jpg'
                leftBtnTxt='Custom Order'   
                rightBtnTxt='Existing Inventory'
            />
            <Section
                title='Model 3'
                description='Order Online for touchless delivery'
                backgroundImg='model-3.jpg'
                leftBtnTxt='Custom Order'   
                rightBtnTxt='Existing Inventory'
            />
            <Section
                title='Model X'
                description='Order Online for touchless delivery'
                backgroundImg='model-x.jpg'
                leftBtnTxt='Custom Order'   
                rightBtnTxt='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-back guaranted'
                backgroundImg='solar-panel.jpg'
                leftBtnTxt='Order now'   
                rightBtnTxt='Learn more'
            />
            <Section
                title='Accessories'
                description=''
                backgroundImg='accessories.jpg'
                leftBtnTxt='Shop now'  
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`