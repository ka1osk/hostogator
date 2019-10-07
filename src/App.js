import React, {useState, useEffect} from 'react';
import { 
  GlobalStyle, 
  Container, 
  Content,
  RadioButtonContainer,
  RadioButtonContainerTitle,
  RadioButtonContainerContent,
  RadioButtonButtonContainer,
  RadioButtonLabel,
  RadioButtonButton,
  PlansContainer,
  InfoTextContainer,
  InfoText
} from './styles';
import api from './services/Api';
import Header from './components/header';
import Plan from './components/plan';
import planP from './assets/images/Grupo 29909.svg';
import planM from './assets/images/Grupo 29910.svg';
import planT from './assets/images/Grupo 29911.svg';

export default () => {
  const [periodo, setPeriodo] = useState('trienal');
  const [planoP, setPlanoP] = useState(null);
  const [planoM, setPlanoM] = useState(null);
  const [planoT, setPlanoT] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const {data:{shared:{products:{planoP, planoM, planoTurbo}}}} = await api.get('/prices');
      setPlanoP(planoP);
      setPlanoM(planoM);
      setPlanoT(planoTurbo);
      console.log(planoP);
      console.log(planoM);
      console.log(planoTurbo);
    }

    fetchData();
  }, []);

  const onHandlePeriodo = (e) => {
    console.log(e.target);
    setPeriodo(e.target.value);
  }

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content>
        <RadioButtonContainer>
          <RadioButtonContainerTitle>Quero pagar a cada:</RadioButtonContainerTitle>
          <RadioButtonContainerContent>
            <RadioButtonButtonContainer>
              <RadioButtonButton name={'periodo'} id='trienal' value={'trienal'} checked={periodo === 'trienal'} onChange={onHandlePeriodo} />
              <RadioButtonLabel for='trienal'>3 anos</RadioButtonLabel>
            </RadioButtonButtonContainer>
            <RadioButtonButtonContainer>
              <RadioButtonButton name={'periodo'} id='anual' value={'anual'} checked={periodo === 'anual'} onChange={onHandlePeriodo} />
              <RadioButtonLabel for='anual'>1 ano</RadioButtonLabel>
            </RadioButtonButtonContainer>
            <RadioButtonButtonContainer>
              <RadioButtonButton name={'periodo'} id='mensal' value={'mensal'} checked={periodo === 'mensal'} onChange={onHandlePeriodo} />
              <RadioButtonLabel for='mensal'>1 mês</RadioButtonLabel>
            </RadioButtonButtonContainer>
          </RadioButtonContainerContent>
        </RadioButtonContainer>        
        <PlansContainer>
          <Plan image={planP} title={'Plano P'} oldPrice={'431,64'} newPrice={'302,15'} price={'8,31'} siteQty={'Para 1 Site'} storage={'100'}/>
          <Plan image={planM} title={'Plano M'} oldPrice={'647,64'} newPrice={'453,35'} price={'12,59'} siteQty={'Sites Ilimitados'} storage={'100'} indication={true}/>
          <Plan image={planT} title={'Plano Turbo'} oldPrice={'1.439,64'} newPrice={'1.007,75'} price={'27,99'} siteQty={'Sites Ilimitados'} storage={'150'}/>
        </PlansContainer>
        <InfoTextContainer>
          <InfoText>*Confira as condições da promoção</InfoText>
        </InfoTextContainer>
      </Content>      
    </Container>
  );
}