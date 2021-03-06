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
  PlanLeftArrow,
  PlanRightArrow,
  InfoTextContainer,
  InfoText
} from './styles';
import api from './services/Api';
import Header from './components/header';
import Plan from './components/plan';
import planP from './assets/images/Grupo 29909.svg';
import planM from './assets/images/Grupo 29910.svg';
import planT from './assets/images/Grupo 29911.svg';
import rightArrow from './assets/images/Grupo 31453.svg';
import leftArrow from './assets/images/Grupo 31454.svg';

export default () => {
  const [periodo, setPeriodo] = useState('triennially');

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
    
    if (periodo === 'triennially') {
      valorPlano = plan.cycle.triennially.priceOrder;
      valorPlanoWithDiscount = valorPlano - (valorPlano * 0.4);
      valorPlanoMonth = valorPlanoWithDiscount / plan.cycle.triennially.months;
      valorPlanoSave = valorPlano - valorPlanoWithDiscount;
    } else if (periodo === 'annually') {
        valorPlano = plan.cycle.annually.priceOrder;
        valorPlanoWithDiscount = valorPlano - (valorPlano * 0.4);
        valorPlanoMonth = valorPlanoWithDiscount / plan.cycle.annually.months;
        valorPlanoSave = valorPlano - valorPlanoWithDiscount;
    } else if (periodo === 'monthly') {
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

  const onHandleRightClick = (e) => {
    const plansContainer = document.getElementById('plansContainer');

    plansContainer.scrollLeft = plansContainer.scrollLeft + 200;
  }

  const onHandleLeftClick = (e) => {
    const plansContainer = document.getElementById('plansContainer');

    plansContainer.scrollLeft = plansContainer.scrollLeft - 200;
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
              <RadioButtonButton name={'periodo'} id='trienal' value={'triennially'} checked={periodo === 'triennially'} onChange={onHandlePeriodo} />
              <RadioButtonLabel htmlFor='trienal'>3 anos</RadioButtonLabel>
            </RadioButtonButtonContainer>
            <RadioButtonButtonContainer>
              <RadioButtonButton name={'periodo'} id='anual' value={'annually'} checked={periodo === 'annually'} onChange={onHandlePeriodo} />
              <RadioButtonLabel htmlFor='anual'>1 ano</RadioButtonLabel>
            </RadioButtonButtonContainer>
            <RadioButtonButtonContainer>
              <RadioButtonButton name={'periodo'} id='mensal' value={'monthly'} checked={periodo === 'monthly'} onChange={onHandlePeriodo} />
              <RadioButtonLabel htmlFor='mensal'>1 mês</RadioButtonLabel>
            </RadioButtonButtonContainer>
          </RadioButtonContainerContent>
        </RadioButtonContainer>        
        <PlansContainer id="plansContainer"> 
          <Plan image={planP} planLink={`a=add&pid=${planoP && planoP.id}&billingcycle=${periodo}&promocode=renatoosaka`} title={'Plano P'} oldPrice={valoresPlanoP.planValue} newPrice={valoresPlanoP.planValueWithDiscount} price={valoresPlanoP.planValuePerMonth} savePrice={valoresPlanoP.planValueSave} siteQty={'Para 1 Site'} storage={'100'}/>
          <Plan image={planM} planLink={`a=add&pid=${planoM && planoM.id}&billingcycle=${periodo}&promocode=renatoosaka`} title={'Plano M'} oldPrice={valoresPlanoM.planValue} newPrice={valoresPlanoM.planValueWithDiscount} price={valoresPlanoM.planValuePerMonth} savePrice={valoresPlanoM.planValueSave} siteQty={'Sites Ilimitados'} storage={'100'} indication={true}/>
          <Plan image={planT} planLink={`a=add&pid=${planoT && planoT.id}&billingcycle=${periodo}&promocode=renatoosaka`} title={'Plano Turbo'} oldPrice={valoresPlanoT.planValue} newPrice={valoresPlanoT.planValueWithDiscount} price={valoresPlanoT.planValuePerMonth} savePrice={valoresPlanoT.planValueSave} siteQty={'Sites Ilimitados'} storage={'150'}/>
          <PlanLeftArrow src={leftArrow} onClick={onHandleLeftClick}/>
          <PlanRightArrow src={rightArrow} onClick={onHandleRightClick}/>
        </PlansContainer>
        <InfoTextContainer>
          <InfoText>*Confira as condições da promoção</InfoText>
        </InfoTextContainer>
      </Content>      
    </Container>
  );
}