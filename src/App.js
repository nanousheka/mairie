import {createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './components/Header';
import Normalize from 'react-normalize';
import {useState} from 'react';
import SubmenuContainer from './components/SubmenuContainer';

const GlobalStyle = createGlobalStyle`
        *{
            font-family: 'Roboto Flex', sans-serif;
            font-size: 16px;
            font-weight: 400;
            box-sizing: border-box;
        }
    `
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 1000px;
`

function App() {
    const [isSubMenuContainerOpen, setIsSubmenuContainerOpen] = useState(false);
    const [linkName, setLinkName] = useState('');

    return(
        <>
            <Normalize />
            <GlobalStyle/>
            {isSubMenuContainerOpen === true ? (
                    <SubmenuContainer linkName={linkName} />
                ) : null}
            <MainContainer>
            <Header isSubMenuContainerOpen={isSubMenuContainerOpen} setIsSubmenuContainerOpen={setIsSubmenuContainerOpen} setLinkName={setLinkName} />
            </MainContainer>
        </>
        
    )
}

export default App;

