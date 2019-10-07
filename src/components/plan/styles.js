import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 350px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DFECFF;
  border-radius: 4px;

  &::before{
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    background-color:  ${props => props.indication ? '#FF6A17' : 'transparent'};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color:  ${props => props.indication ? '#FF6A17' : 'transparent'};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #DFECFF;
  height: 100px;
`;

export const Image = styled.img`
  width: 42px;
  height: 39px;
`;

export const Title = styled.p`
  text-align: center;
  font: Bold 26px/26px Montserrat;
  letter-spacing: 0;
  color: #1D5297;
  opacity: 1;
`;

export const Content = styled.div`
  border-bottom: 1px solid #DFECFF;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FullPriceContainer = styled.div`
  margin-top: 40px;
`;

export const OldPriceText = styled.span`
  text-align: center;
  text-decoration: line-through;
  font-size: 13px;
  letter-spacing: 0;
  color: #333333;
`;

export const NewPriceText = styled.span`
  text-align: center;
  font: Bold 13px/19px Montserrat;
  letter-spacing: 0;
  color: #333333;
`;

export const PriceInfoText = styled.span`
  text-align: center;
  font-size: 13px;
  letter-spacing: 0;
  color: #333333;
  margin: 10px 0;
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.span`
  text-align: center;
  font: Bold 35px/24px Montserrat;
  letter-spacing: 0;
  color: #1D5297;
`;

export const PriceLabel = styled.span`
  text-align: center;
  font: Regular 20px/24px Montserrat;
  letter-spacing: 0;
  color: #1D5297;
`;

export const Button = styled.a`
  width: 280px;
  height: 52px;
  background: ${props => props.indication ? '#FF6A17' : '#4480C5'} 0% 0% no-repeat padding-box;
  border-radius: 26px;
  text-align: center;
  font: Bold 22px/27px Montserrat;
  letter-spacing: 0;
  color: #FFFFFF;  
  text-decoration: none;
  line-height: 52px;
  margin: 25px 0;
`;

export const DomainTextContainer = styled.div`
  margin-bottom: 10px;
`;

export const DomainText = styled.span`
  text-align: center;
  font: Bold 15px/20px Montserrat;
  letter-spacing: 0;
  color: #333333;  
`;

export const SaveContainer = styled.div`
  margin-bottom: 40px;
`;

export const SaveText = styled.span`
  text-align: left;
  font: Regular 14px/18px Montserrat;
  letter-spacing: 0;
  color: #1D5297;
  opacity: 1;
`;

export const SaveBadge = styled.span`
  width: 80px;
  height: 24px;
  background: #51C99C 0% 0% no-repeat padding-box;
  border-radius: 12px;
  text-align: left;
  font: Bold 14px/18px Montserrat;
  text-align: center;
  letter-spacing: 0;
  color: #FFFFFF;
  text-transform: uppercase;
  line-height: 24px;
  opacity: 1;
  padding: 5px;
`;

export const InfoImage = styled.img`
  width: 16px;
  height: 16px;
`;

export const Footer = styled.div`
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterList = styled.ul`
  list-style: none;
`;

export const FooterListItem = styled.li`
  text-align: left;
  letter-spacing: 0;
  color: #333333;
  opacity: 1;
`;

export const FooterHightLightText = styled.span`
  text-align: left;
  font: Bold 16px/32px Montserrat;
  letter-spacing: 0;
  color: #333333;
`;