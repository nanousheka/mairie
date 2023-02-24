import styled from 'styled-components';
import color from '../../utils/colors';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
`
const TopHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
`
const WelcomeTitle = styled.p`
    font-size: 26px;
    font-weight: 100;
    letter-spacing: -1.5px;
    color: #368742;
    margin: 0;
`
const WelcomeSubtitle = styled.p`
    margin: 0;
    font-size: 16px;
    letter-spacing: -1px;
    color: ${color.yellow};
`
const TopNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TopNavLinksWrapper = styled.div`
    display: flex;
    justify-content: end;
`

const TopNavLink = styled(Link)`
    margin-left: 15px;
    text-decoration: none;
    color: ${color.brown};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -1px;
`
const TopNavSearchContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
`

const TopNavSearchInput = styled.input`
    width: 300px;
    height: 40px;
    border: 1px solid ${color.brown};
    border-radius: 5px;
    padding: 15px;
`
const TopNavSearchIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
`

const MainNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const HalfMainNavContainer = styled.div`
    width: 100%;
`
const PrimaryNav = styled.div`
    display: flex;
    justify-content: space-between;
    height: 20px;
    font-size: 18px;
`
const PrimaryNavLink = styled.div`
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    color: ${color.brown};
    letter-spacing: -1px;
`

const SecondaryNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;
    border-top: 1px solid ${color.green};
    border-bottom: 1px solid ${color.green};
`
const SecondaryNavLink = styled.div`
    color: ${color.green};
    font-weight: 800;
    text-align: center;
    letter-spacing: 2px;
    text-decoration : none;
    text-transform: uppercase;
    &hover {
        text-decoration: none;
    }
`
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LogoTitle = styled.h1`
    width: 70px;
    text-align: center;
    color: ${color.brown};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -1px;
`
const Logo = styled.img`
`
function Header({isSubMenuContainerOpen,setIsSubmenuContainerOpen,setLinkName}) {
    
    const openSubmenuContainer = (event) => {
        isSubMenuContainerOpen === false ? setIsSubmenuContainerOpen(true) : setIsSubmenuContainerOpen(false);
        setLinkName(event.target.textContent)
    }
    
    return(
        <>
            <HeaderContainer>
                <TopHeader>
                    <WelcomeContainer>
                        <WelcomeTitle>BIENVENUE</WelcomeTitle>
                        <WelcomeSubtitle>Site officiel de la ville de Petit-Bourg</WelcomeSubtitle>
                    </WelcomeContainer>

                    <TopNavContainer>
                        <TopNavLinksWrapper>
                            <TopNavLink>Numéros utiles</TopNavLink>
                            <TopNavLink>Mon compte</TopNavLink>
                        </TopNavLinksWrapper>
                        <TopNavSearchContainer>
                            <TopNavSearchInput placeholder="Rechercher sur le site"></TopNavSearchInput>
                            <TopNavSearchIcon>
                                <lord-icon
                                    src="https://cdn.lordicon.com/xfftupfv.json"
                                    trigger="hover"
                                    style={{width:'25px',height:'25px'}}>
                                </lord-icon>
                            </TopNavSearchIcon>
                            
                        </TopNavSearchContainer>
                    </TopNavContainer>

                </TopHeader>

                <MainNavContainer>
                    <HalfMainNavContainer>
                        <PrimaryNav>
                            <PrimaryNavLink onClick={openSubmenuContainer}>la ville</PrimaryNavLink>
                            <PrimaryNavLink onClick={openSubmenuContainer}>économie</PrimaryNavLink>
                            <PrimaryNavLink onClick={openSubmenuContainer}>ville numérique</PrimaryNavLink>
                            <PrimaryNavLink onClick={openSubmenuContainer}>police municipale</PrimaryNavLink>

                        </PrimaryNav>
                        <SecondaryNav>
                            <SecondaryNavLink onClick={openSubmenuContainer}>découvrir</SecondaryNavLink>
                            <SecondaryNavLink onClick={openSubmenuContainer}>se déplacer</SecondaryNavLink>
                            <SecondaryNavLink onClick={openSubmenuContainer}>s'installer</SecondaryNavLink>
                        </SecondaryNav>
                    </HalfMainNavContainer>
                    

                    <LogoContainer>
                        <Logo src={logo} alt='Logo de la ville'/>
                        <LogoTitle>Mairie de Petit-Bourg</LogoTitle>
                    </LogoContainer>

                    <HalfMainNavContainer>
                        <PrimaryNav>
                            <PrimaryNavLink onClick={openSubmenuContainer}>événements</PrimaryNavLink>
                            <PrimaryNavLink onClick={openSubmenuContainer}>état-civil</PrimaryNavLink>
                            <PrimaryNavLink onClick={openSubmenuContainer}>démarches en ligne</PrimaryNavLink>
                            <PrimaryNavLink onClick={openSubmenuContainer}>marchés publics</PrimaryNavLink>
                            
                            
                        </PrimaryNav>

                        <SecondaryNav>
                            <SecondaryNavLink onClick={openSubmenuContainer}>habiter</SecondaryNavLink>
                            <SecondaryNavLink onClick={openSubmenuContainer}>se divertir</SecondaryNavLink>
                            <SecondaryNavLink onClick={openSubmenuContainer}>travailler</SecondaryNavLink>
                            
                        </SecondaryNav>
                    </HalfMainNavContainer>
                    

                </MainNavContainer>
                
            </HeaderContainer>
        </>
    )
}

export default Header;