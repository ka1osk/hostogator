import styled, { createGlobalStyle } from 'styled-components'
import { device } from './devices';
import checked from '../assets/images/checked.svg';
import unchecked from '../assets/images/unchecked.svg';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
	  -webkit-font-smoothing: antialiased;   
  }

  body {
    background-color: #F1F6FB;
  }
`;

export const Container = styled.div`  
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1280px;
  background-color: transparent;
  margin: 0 auto;
  padding-bottom: 20px;    
  margin-top: 40px;
  flex-direction: column;
`;

export const RadioButtonContainer = styled.div`
  position: relative;
  width: 325px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const RadioButtonContainerTitle = styled.p`
  font: Regular 14px/26px Montserrat;
  letter-spacing: 0;
  color: #1D5297;
  opacity: 1;
  align-self: center;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

export const RadioButtonContainerContent = styled.div`
  height: 41px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #4480C570;
  border: 1px solid #4480C5;
  border-radius: 21px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioButtonButtonContainer = styled.div`
  display: flex;
  width: 108px; 
  justify-content: center; 
`;

export const RadioButtonLabel = styled.label`
  text-align: center;
  font: Regular 16px/23px Montserrat;
  letter-spacing: 0;
  color: #16437E;
  opacity: 1;  
  width: 100%;
  height: 100%;
  width: 108px;
  height: 41px;
  line-height: 41px;
  cursor: pointer;
`;

export const RadioButtonButton = styled.input.attrs({
  type: 'radio'
})`
  width: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: calc(50% + 5px);
    left: 5px;
    background-image: url(${unchecked});
    width: 18px;
    height: 18px;
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: calc(50% + 5px);
    left: 5px;
    background-image: url(${checked});
    width: 18px;
    height: 18px;
  }

  &:checked + label {
    background: #4480C5 0% 0% no-repeat padding-box;
    border-radius: 21px;
    font-weight: bold;
    color: #FFFFFF;
  }
`;

export const PlansContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  
  @media ${device.tablet} {
    padding: 10px 20px;
    overflow-x: scroll;
  }
`;

export const PlanLeftArrow = styled.img`
  position: absolute;
  display: none;
  top: 40%;
  left: 10px;
  width: 35px;
  height: 35px;

  @media ${device.tablet} {
    display: block;
  }
`;

export const PlanRightArrow = styled.img`
  position: absolute;
  display: none;
  top: 40%;
  right: 10px;
  width: 35px;
  height: 35px;

  @media ${device.tablet} {
    display: block;
  }
`;

export const InfoTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 20px;

  @media ${device.tablet} {
    justify-content: center;
  }

`;

export const InfoText = styled.span`
  text-align: center;
  text-decoration: underline;
  font-size: 12px;
  letter-spacing: 0;
  color: #4480C5;
  opacity: 0.7;
`;
