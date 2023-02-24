import styled from 'styled-components';
import colors from '../../utils/colors.js'
//import {useState} from 'react';
import LaVilleMenu from '../Submenus/LaVilleMenu';

const MainContainer = styled.div`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 50vh;
    background-color: ${colors.yellow};
    opacity: 0.95;
    transform: scale(1);
    transition: transform 0.5s ease-in-out;
`

function SubmenuContainer({linkName}) {

    console.log(linkName)

    return(
        <MainContainer>
            {linkName === 'la ville' ? <LaVilleMenu /> : null}
        </MainContainer>
    )
}

export default SubmenuContainer;