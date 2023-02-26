import styled from "styled-components";
import BigMoon from '/assets/bigMoon.png';
import MiddleStar from '/assets/middlestar.png';
import MiniStar from '/assets/ministar.png';
import MoonStar from '/assets/moonstar.png';
import Sun from '/assets/sun.png';
import ThreeStars from '/assets/threesmallstars.png';

function FormBox() {
    return(
        <Container>
            <LeftSmallContainer >
                <SunImgContainer>
                    <SunImg src={Sun} alt="sun" />
                </SunImgContainer>

                <MiddleStarImgContainer>
                    <MiddleStarImg src={MiddleStar} alt="middlestar" />
                </MiddleStarImgContainer>

                <ThreeStarsImgContainer>
                    <ThreeStarsImgLeft src={ThreeStars} alt="threestars" />
                </ThreeStarsImgContainer>
            </LeftSmallContainer >

            <FormContainer>
                <Form>
                    <EnterYourNameInput>
                        <label>Enter your name</label>
                        <Input type="text" />
                    </EnterYourNameInput>
                    <ChooseYourSignInput>
                        <label>Choose your sign</label>
                        <Input type="text" />
                    </ChooseYourSignInput>
                    <BtnContainer>
                        <Btn>What's my sign?</Btn>
                    </BtnContainer>
                </Form>
            </FormContainer>

            <RightSmallContainer>
                <MiniStarContainer>
                    <MiniStarImg src={MiniStar} alt="ministar" />
                </MiniStarContainer>

                <MoonStarContainer>
                    <MoonStarImg src={MoonStar} alt="moonstar" />
                </MoonStarContainer>

                <BigMoonAndThreeStarsImgContainer>
                    <ThreeStarsImgRight src={ThreeStars} alt="threestars" />
                    <BigMoonImg src={BigMoon} alt="bigmoon" />
                </BigMoonAndThreeStarsImgContainer>
            </RightSmallContainer>
        </Container>
    );
}

// BREAKINGPOINTS (kanske flytta detta till en egen fil?)
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileXL: '524px',
    mobileXXL: '592px',
    tablet: '768px',
    tabletXL: '809px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobileXL: `(max-width: ${size.mobileXL})`,
    mobileXXL: `(max-width: ${size.mobileXXL})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletXL: `(max-width: ${size.tabletXL})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

// STYLING
const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    @media ${device.mobileXXL} {
        margin-top: 1.5rem;
    }
`;

// EVERYTHING IN LEFT COINTAINER
const LeftSmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 34%;

    @media ${device.tabletXL} {
        width: 52%;
    }

    @media ${device.mobileXXL} {
        width: 75%;
    }

    @media ${device.mobileL} {
        display: none;
    }
`;

const SunImgContainer = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.mobileXXL} {
       justify-content: flex-end;
       padding-right: 10%;
    }
`;

const SunImg = styled.img`
    width: 45%;

    @media ${device.tabletXL} {
        width: 70%;
    }

    @media ${device.mobileXL} {
        width: 50%;
    }
`;

const MiddleStarImgContainer = styled.div`
    display: flex;
    align-items: flex-start;

    @media ${device.tabletXL} {
        justify-content: center;
    }
`;

const MiddleStarImg = styled.img`
    width: 20%;

    @media ${device.tabletXL} {
        width: 30%;
    }

    @media ${device.mobileXXL} {
        width: 25%;
    }
`;

const ThreeStarsImgContainer = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.mobileXXL} {
       justify-content: flex-end;
       padding-right: 10%;
    }
`;

const ThreeStarsImgLeft = styled.img`
    width: 40%;
`;

// EVERYTHING IN FORMCONTAINER
const FormContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Form = styled.div`
    background-color: white;
    font-family: 'Tenor Sans', sans-serif;
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.37);
    -webkit-box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.37);
    font-size: 1.4rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 4.5rem;
    gap: 2rem;

    @media ${device.tabletXL} {
        padding-right: 2rem;
        padding-left: 2rem;
    }

    @media ${device.mobileXXL} {
        font-size: 1.2rem;
        padding: 3rem;
        padding-right: 1rem;
        padding-left: 1rem;
    }
`;

const Input = styled.input`
    padding: 0.3rem;
    font-family: 'Tenor Sans', sans-serif;
    border: 0.05rem solid grey;
    border-radius: 0.3rem;
    box-shadow: 0px 0.5px 1px 0px rgba(0,0,0,0.61);
    -webkit-box-shadow: 0px 0.5px 2px 0px rgba(0,0,0,0.61);
    -moz-box-shadow: 0px 0.5px 2px 0px rgba(0,0,0,0.61);

    @media ${device.tabletXL} {
        padding: 0.4rem;
    }
`;

const EnterYourNameInput = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 23rem;

    @media ${device.tabletXL} {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      min-width: 15rem;
    }
`;

const ChooseYourSignInput = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${device.tabletXL} {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Btn = styled.button`
    color: white;
    background-color: black;
    font-family: 'Tenor Sans', sans-serif;
    font-size: 1.1rem;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem;
    padding-right: 0.7rem;
    padding-left: 0.7rem;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.61);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.61);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.61);
    cursor: pointer;

    &:hover {
        background-color: #F3E7DC;
        color: black;
    }

    @media ${device.mobileXXL} {
        font-size: 1rem;
    }
`;

// EVERYTHING IN RIGHT COINTAINER
const RightSmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.tabletXL} {
        justify-content: space-evenly;
    }

    @media ${device.mobileL} {
        display: none;
    }
`;

const MiniStarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const MiniStarImg = styled.img`
    width: 15%;
    padding-right: 3rem;

    @media ${device.tabletXL} {
        width: 20%;
    }

    @media ${device.mobileXXL} {
        width: 30%;
    }

    @media ${device.mobileXXL} {
        width: 40%;
    }
`;

const MoonStarContainer = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.tabletXL} {
        padding-left: 10%;
    }

    @media ${device.tabletXL} {
        padding-left: 0%;
        justify-content: flex-start;
    }
`;

const MoonStarImg = styled.img`
    width: 30%;
    padding-right: 8%;

    @media ${device.tabletXL} {
        width: 40%;
    }

    @media ${device.mobileXXL} {
        width: 50%;
    }
`;  

const BigMoonAndThreeStarsImgContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media ${device.mobileXXL} {
        justify-content: flex-start;
        padding-left: 12%;
    }
`;

const BigMoonImg = styled.img`
    width: 40%;

    @media ${device.mobileXXL} {
        width: 55%;
    }

    @media ${device.mobileXL} {
        display: none;
    }
`;  

const ThreeStarsImgRight = styled.img`
    width: 30%;
    height: 60%;

    @media ${device.mobileXXL} {
        height: 45%;
    }

    @media ${device.mobileXL} {
        height: 100%;
    }
`;  

export default FormBox;