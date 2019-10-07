import styled from 'styled-components';
import checkIcon from '../../assets/images/icon-check.svg';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1280px;
  background-color: #fff;
  height: 100%;
  margin: 0 auto;  
  height: 52px;
`;

export const Logo = styled.img`
  width: 198px;
  height: 35px;
`;

export const PageHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #F1F6FB;
`;

export const PageHeaderBackground = styled.div`
  width: 100%;
  height: 380px;
  background-color: #1d5297;
  display: flex;
  justify-content: center;
`;

export const PageHeaderBackgroundWave = styled.div`
  height: 80px;
  overflow: hidden;
  position: relative;
  z-index: 0;
`;

export const PageHeaderBackgroundArrowDown = styled.img`
  position: absolute;
  bottom: 35px;
  left: 50%;
  width: 32px;
  height: 32px;
  transform: translateX(-50%);
`;

export const PageHeaderDeskImage = styled.img`
  position: absolute;
  top: 136px;
  left: 68px;
  width: 484px;
  height: 353px;
`;

export const PageHeaderManImage = styled.img`
  position: absolute;
  top: 141px;
  right: 68px;  
  width: 438px;
  height: 346px;
`;

export const PageHeaderContent = styled.div`
  width: 752px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PageHeaderTitle = styled.p`
  text-align: center;
  font: SemiBold 16px/27px Montserrat;
  letter-spacing: 1.6px;
  color: #B9D0EF;
`;

export const PageHeaderHighlight = styled.p`
  text-align: center;
  font: Bold 30px/45px Montserrat;
  letter-spacing: 0;
  color: #FFFFFF;
  opacity: 1;
`;

export const PageHeaderCheckContainer = styled.div`
  margin-top: 20px;
`;

export const PageHeaderCheckContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 25px;
`;

export const PageHeaderCheckText = styled.span`
  position: relative;
  text-align: left;
  font: Regular 16px/22px Montserrat;
  letter-spacing: 0;
  color: #B9D0EF;
  opacity: 1;
  padding: 5px 10px 0px 20px;

  &::before {
    content: '';
    position: absolute;    
    width: 16px;
    height: 16px;
    background-image: url(${checkIcon});
    top: 5px;
    left: 0;
  }
`;