import styled from 'styled-components';

import Background from '../../assets/images/background.jpg';

export const Container = styled.div`
    background-image: url(${Background});
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
`;

export const ContainerConteudo = styled.div`
    background: rgba(0,0,0,0.7);
    height: 100%;
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerConteudoInterno = styled.div`
  background: #fff;
`;

export const FormInputs = styled.div`
`;


export const GroupInfo = styled.div`
    
`;
