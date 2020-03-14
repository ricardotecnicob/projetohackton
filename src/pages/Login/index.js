import React from 'react';

import { Container, ContainerConteudo, GroupInfo, FormInputs, ContainerConteudoInterno } from './styles';

export default function Login() {
  return (
    <Container >
        <ContainerConteudo>
          <ContainerConteudoInterno>
            <div className="areaConteudo01">
                <div className="optionsForm">
                    <button type="buttom" className="opt01" >LOGIN</button>
                    <button type="buttom" className="opt02" >CADASTRO</button>
                </div>
                <FormInputs>
                    <GroupInfo>
                        <input type="email" placeholder="E-mail do Usuário" />
                    </GroupInfo>
                    <GroupInfo>
                        <input type="password" placeholder="Senha do Usuário" />
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
