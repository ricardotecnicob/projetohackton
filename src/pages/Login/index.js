import React, { useState } from 'react';

import { Container, ContainerConteudo, GroupInfo, FormInputs, ContainerConteudoInterno } from './styles';

export default function Login() {

  const [pageTab,setPageTab] = useState('login');

  const Tabs = value => {
    setPageTab(value);
  } 

  const handleDashboard = redirec => {
      window.location.href = "/dashboard";
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
                        <input type="email" placeholder="E-mail da Statup" value="statup@gmail.com" />
                    </GroupInfo>
                    <GroupInfo>
                        <input type="password" placeholder="Senha da Statup" value="123456" />
                    </GroupInfo>
                    <GroupInfo>
                        <input type="buttom" value="Entrar" onClick={() => handleDashboard('/dashboard')} />
                    </GroupInfo>

                    {
                      pageTab === 'login' ? 
                      <GroupInfo>
                          <strong>USER</strong>: statup@gmail.com <br/>
                          <strong>PASS</strong>: 123456
                      </GroupInfo>
                      :
                      ''
                    }
  
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
