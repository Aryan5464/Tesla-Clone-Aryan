import React from 'react';
import Styled from 'styled-components';
import { Fade } from 'react-reveal';



function Section({ title, description, leftBtnTxt, rightBtnTxt, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <div>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnTxt}
                        </LeftButton>
                        {
                            rightBtnTxt &&
                            <RightButton>
                                {rightBtnTxt}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src={`/images/down-arrow.svg`} />
            </div>
        </Wrap>
    )
}

export default Section

const Wrap = Styled.div`
    // position: relative;
    // z-index: -1;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url('/images/${props.bgImage}')`};
`

const ItemText = Styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = Styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;   
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    margin: 8px;
`

const RightButton = Styled(LeftButton)`
    color: black;
    opacity: 0.65;
    background-color: white;
`

const DownArrow = Styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`