import { useState } from 'react';
import styled from 'styled-components';
import Intercommunalite from '../../../assets/icons/intercommunalite.png';
import Mairie from '../../../assets/icons/mairie.png';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 1000px;
  height: 100%;
  position: relative;
`;
const FirstLevelContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`
const FirstLevelLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 170px;
  cursor: pointer;
`

const FirstLevelIcon = styled.img`
  width: 50px;
  height: 50px;
`;
const FirstLevelTitle = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -.5px;
`

const SecondLevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SecondLevelTitle = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
`
const SecondLevelLinks = styled.div`
  display: flex;
  justify-content: center;
  max-width: 70%;
`

const SecondLevelLink = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
`

const SecondLevelLinkIcon = styled.img`
`
const SecondLevelLinkTitle = styled.p`
  color: white;
  font-size: 14px;

`

const LaVilleMenu = () => {
  const [intercommunaliteIsOpen, setintercommunaliteIsOpen] = useState(false);

  const openIntercommunalite = () => {
    setintercommunaliteIsOpen(true);
  }

  return (
    <MenuContainer>
      <FirstLevelContainer>
        <FirstLevelLink onClick={openIntercommunalite}>
          <FirstLevelIcon src={Intercommunalite} alt="icone de l'intercommunalité"/>
          <FirstLevelTitle>L'intercommunalité</FirstLevelTitle>
        </FirstLevelLink>

        <FirstLevelLink>
          <FirstLevelIcon src={Mairie} alt="icone de la mairie"/>
          <FirstLevelTitle>La mairie</FirstLevelTitle>
        </FirstLevelLink>

      </FirstLevelContainer>
      {intercommunaliteIsOpen ? (
      <SecondLevelContainer>
        <SecondLevelTitle>L'intercommunalité</SecondLevelTitle>
        <SecondLevelLinks>
          <SecondLevelLink>
            <SecondLevelLinkIcon/>
            <SecondLevelLinkTitle>La CANBT</SecondLevelLinkTitle>
          </SecondLevelLink>

          <SecondLevelLink>
            <SecondLevelLinkIcon/>
            <SecondLevelLinkTitle>L'intercommunalité à Petit-Bourg'</SecondLevelLinkTitle>
          </SecondLevelLink>

        </SecondLevelLinks>
        

      </SecondLevelContainer>
      ) : null}
      
    </MenuContainer>
  );
};

export default LaVilleMenu;





