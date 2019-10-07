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
  
  const [valoresPlanoP, setValoresPlanoP] = useState({})
  const [valoresPlanoM, setValoresPlanoM] = useState({})
  const [valoresPlanoT, setValoresPlanoT] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const {data:{shared:{products}}} = await api.get('/prices');      
      setPlanoP(products.planoP);
      setPlanoM(products.planoM);
      setPlanoT(products.planoTurbo);

      setValoresPlanoP(calculatePlan(periodo, products.planoP));
      setValoresPlanoM(calculatePlan(periodo, products.planoM));
      setValoresPlanoT(calculatePlan(periodo, products.planoTurbo));
    }

    fetchData();
  }, []);

  const calculatePlan = (periodo, plan) => {
    let valorPlano = 0.00;
    let valorPlanoWithDiscount = 0.00;
    let valorPlanoMonth = 0.00;
    let valorPlanoSave = 0.00;
    
    if (periodo === 'trienal') {
      valorPlano = plan.cycle.triennially.priceOrder;
      valorPlanoWithDiscount = valorPlano - (valorPlano * 0.4);
      valorPlanoMonth = valorPlanoWithDiscount / plan.cycle.triennially.months;
      valorPlanoSave = valorPlano - valorPlanoWithDiscount;
    } else if (periodo === 'anual') {
        valorPlano = plan.cycle.annually.priceOrder;
        valorPlanoWithDiscount = valorPlano - (valorPlano * 0.4);
        valorPlanoMonth = valorPlanoWithDiscount / plan.cycle.annually.months;
        valorPlanoSave = valorPlano - valorPlanoWithDiscount;
    } else if (periodo === 'mensal') {
        valorPlano = plan.cycle.monthly.priceOrder;
        valorPlanoWithDiscount = valorPlano - (valorPlano * 0.4);
        valorPlanoMonth = valorPlanoWithDiscount / plan.cycle.monthly.months;
        valorPlanoSave = valorPlano - valorPlanoWithDiscount;
    }

    return {
      planValue: valorPlano.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace('R$', '').trim(),
      planValueWithDiscount: valorPlanoWithDiscount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace('R$', '').trim(),
      planValuePerMonth: valorPlanoMonth.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace('R$', '').trim(),
      planValueSave: valorPlanoSave.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace('R$', '').trim()
    }    
  }

  const onHandlePeriodo = (e) => {
    e.stopPropagation();
    setPeriodo(e.target.value);
    setValoresPlanoP(calculatePlan(periodo, planoP));
    setValoresPlanoM(calculatePlan(periodo, planoM));
    setValoresPlanoT(calculatePlan(periodo, planoT));
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
              <RadioButtonLabel htmlFor='trienal'>3 anos</RadioButtonLabel>
            </RadioButtonButtonContainer>
            <RadioButtonButtonContainer>
              <RadioButtonButton name={'periodo'} id='anual' value={'anual'} checked={periodo === 'anual'} onChange={onHandlePeriodo} />
              <RadioButtonLabel htmlFor='anual'>1 ano</RadioButtonLabel>
            </RadioButtonButtonContainer>
            <RadioButtonButtonContainer>
              <RadioButtonButton name={'periodo'} id='mensal' value={'mensal'} checked={periodo === 'mensal'} onChange={onHandlePeriodo} />
              <RadioButtonLabel htmlFor='mensal'>1 mês</RadioButtonLabel>
            </RadioButtonButtonContainer>
          </RadioButtonContainerContent>
        </RadioButtonContainer>        
        <PlansContainer>
          <Plan image={planP} title={'Plano P'} oldPrice={valoresPlanoP.planValue} newPrice={valoresPlanoP.planValueWithDiscount} price={valoresPlanoP.planValuePerMonth} savePrice={valoresPlanoP.planValueSave} siteQty={'Para 1 Site'} storage={'100'}/>
          <Plan image={planM} title={'Plano M'} oldPrice={valoresPlanoM.planValue} newPrice={valoresPlanoM.planValueWithDiscount} price={valoresPlanoM.planValuePerMonth} savePrice={valoresPlanoM.planValueSave} siteQty={'Sites Ilimitados'} storage={'100'} indication={true}/>
          <Plan image={planT} title={'Plano Turbo'} oldPrice={valoresPlanoT.planValue} newPrice={valoresPlanoT.planValueWithDiscount} price={valoresPlanoT.planValuePerMonth} savePrice={valoresPlanoT.planValueSave} siteQty={'Sites Ilimitados'} storage={'150'}/>
        </PlansContainer>
        <InfoTextContainer>
          <InfoText>*Confira as condições da promoção</InfoText>
        </InfoTextContainer>
      </Content>      
    </Container>
  );
}