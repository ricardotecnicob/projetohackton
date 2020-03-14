import React, { useState } from 'react';

import { Container, ContainerConteudo, GroupInfo, FormInputs, ContainerConteudoInterno } from './styles';

export default function Login() {

  const [pageTab,setPageTab] = useState('login');

  const Tabs = value => {
    setPageTab(value);
  } 

  return (
    <Container >
        <ContainerConteudo>
          <ContainerConteudoInterno activoaba={pageTab} >
            <div className="areaConteudo01">
                <div className="optionsForm">
                    <button type="buttom" className="opt01" onClick={() => Tabs('login')} >LOGIN</button>
                    <button type="buttom" className="opt02" onClick={() => Tabs('cadastro')} >CADASTRO</button>
                </div>
                <FormInputs>
                    {
                      pageTab === 'cadastro' ? 
                      <GroupInfo>
                        <input type="text" placeholder="Nome Statup" />
                      </GroupInfo>
                      :
                      ''
                    }
                   
                    <GroupInfo>
                        <input type="email" placeholder="E-mail da Statup" />
                    </GroupInfo>
                    <GroupInfo>
                        <input type="password" placeholder="Senha da Statup" />
                    </GroupInfo>
                    <GroupInfo>
                        <input type="buttom" value="Entrar"  />
                    </GroupInfo>
                </FormInputs>
              </div>
              <div className="areaConteudo02">
                  <strong>LOGO</strong><br />
                  <small>Venha fazer parte desse crescimento de Statups</small>
              </div>
            </ContainerConteudoInterno>
        </ContainerConteudo>
    </Container>
  );
}
