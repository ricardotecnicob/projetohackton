import React from 'react';
import AnyChart from 'anychart-react';
import anychart from 'anychart';

import { FaTrophy } from "react-icons/fa";

import { Container,Header,ContainerRede,AreaProvider,ConteudoBody,NotificationConteudo,Footer } from './styles';

export default function Dashboard() {

  var msftDataTable = anychart.data.table();
  msftDataTable.addData(window.get_msft_daily_short_data());
  var orclDataTable = anychart.data.table();
  orclDataTable.addData(window.get_orcl_daily_short_data());
  var cscoDataTable = anychart.data.table();
  cscoDataTable.addData(window.get_csco_daily_short_data());
  var ibmDataTable = anychart.data.table();
  ibmDataTable.addData(window.get_ibm_daily_short_data());
  var chart = anychart.stock();
  var firstPlot = chart.plot(0);
  firstPlot.area(msftDataTable.mapAs({'value': 4})).name('MSFT');
  var secondPlot = chart.plot(1);
  secondPlot.splineArea(orclDataTable.mapAs({'value': 4})).fill('#1976d2 0.65').stroke('1.5 #1976d2').name('ORCL');
  var thirdPlot = chart.plot(2);
  thirdPlot.stepArea(cscoDataTable.mapAs({'value': 4})).fill('#ef6c00 0.65').stroke('1.5 #ef6c00').name('CSCO');
  var forthPlot = chart.plot(3);
  forthPlot.line(msftDataTable.mapAs({'value': 4})).name('MSFT').tooltip(null);
  forthPlot.spline(orclDataTable.mapAs({'value': 4})).name('ORCL').tooltip(null);
  forthPlot.stepLine(cscoDataTable.mapAs({'value': 4})).name('CSCO').tooltip(null);
  chart.scroller().area(msftDataTable.mapAs({'value': 4}));
  chart.selectRange('2005-01-03', '2005-11-20');

  return (
    <Container >
      <Header>
          As atulizações Feitas na Plataforma de <span>PERFIL</span>, <span>METAS</span>, <span>EQUIPE</span>, <span>POSTS</span>, <span>NEGOCIAÇÕES</span>, gerar <label>PONTOS</label> que poderam ser trocados em <label>PRÊMIOS</label> <br/>
          PERFIL ATUALIZADO A CADA 30 DIAS GANHA PONTUAÇÃO <label>NOTA 1000</label>;
      </Header>
      <ContainerRede>
        <AreaProvider>
            <div className="areaImagemName">
                <div className="imgPerfil" >
                    
                </div>
                <div className="textPerfil" >
                    <strong>Nome da Statup</strong>
                </div>
                <p>BIO: <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</p>
            </div>
            <div className="areaMenuPerfil">
              <ul>
                <a href="" ><li>Meus Dados <span>80% Concluido</span></li></a>
                <a href="" ><li>Minha Negocições  <span>30</span></li></a>
                <a href="" ><li>Meus Posts  <span>30</span></li></a>
                <a href="" ><li>Metas  <span>30</span></li></a>
                <a href="" ><li>Equipes  <span>30</span></li></a>
                <a href="" ><li>Negociações  <span>30</span></li></a>
                <a href="" ><li>Sair </li></a>
              </ul>
            </div>
            <div className="areadecrescimento">
                <AnyChart
                      width="100%"
                      height={500}
                      instance={chart}
                      title="MEU CRESCIMENTO  "
                  />
            </div>
        </AreaProvider>
        <ConteudoBody>
            <div className="cardStatups" >
                <div className="logoStatupCard">Logo <br/> Statup</div><br />

                <div className="nomeStatupCard" >Nome Statup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" >VER CRESCIMENTO</button>
                  <button type="button" >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard">Logo <br/> Statup</div><br />

                <div className="nomeStatupCard" >Nome Statup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" >VER CRESCIMENTO</button>
                  <button type="button" >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard">Logo <br/> Statup</div><br />

                <div className="nomeStatupCard" >Nome Statup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" >VER CRESCIMENTO</button>
                  <button type="button" >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard">Logo <br/> Statup</div><br />

                <div className="nomeStatupCard" >Nome Statup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" >VER CRESCIMENTO</button>
                  <button type="button" >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard">Logo <br/> Statup</div><br />

                <div className="nomeStatupCard" >Nome Statup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" >VER CRESCIMENTO</button>
                  <button type="button" >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard">Logo <br/> Statup</div><br />

                <div className="nomeStatupCard" >Nome Statup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" >VER CRESCIMENTO</button>
                  <button type="button" >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard">Logo <br/> Statup</div><br />

                <div className="nomeStatupCard" >Nome Statup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" >VER CRESCIMENTO</button>
                  <button type="button" >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard">Logo <br/> Statup</div><br />

                <div className="nomeStatupCard" >Nome Statup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" >VER CRESCIMENTO</button>
                  <button type="button" >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard">Logo <br/> Statup</div><br />

                <div className="nomeStatupCard" >Nome Statup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" >VER CRESCIMENTO</button>
                  <button type="button" >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
        </ConteudoBody>
        <NotificationConteudo>
            <div className="areaDePontos">
                  <strong><FaTrophy /></strong>
                  <label htmlFor="">1250</label> 
                  <small>pts</small>
            </div>
            <div className="ultimaAtualizacao">
                <label> Última Atualização <br /> foi há 20 dias atrás</label>
            </div>
            <div className="areadenegiociacoes">
                <div className="areaNotNegocioPassado">
                    
                    <div>
                        <label>1000pts</label>
                    </div>
                    <div>
                        <label>Ver Negociações <br /> em Destaques</label>
                    </div>

                </div>
                <div className="areaNotNegocioPassado">
                     
                    <div>
                        <label>1000pts</label>
                    </div>
                    <div>
                        <label>Ver Negociações <br /> em Destaques</label>
                    </div>

                </div>
                <div className="areaNotNegocioPassado">
                     
                    <div>
                        <label>1000pts</label>
                    </div>
                    <div>
                        <label>Ver Negociações <br /> em Destaques</label>
                    </div>

                </div>
                <div className="areaNotNegocioPassado">
                     
                     <div>
                         <label>1000pts</label>
                     </div>
                     <div>
                         <label>Ver Negociações <br /> em Destaques</label>
                     </div>
                     
                 </div>
                 <div className="areaNotNegocioPassado">
                     
                     <div>
                         <label>1000pts</label>
                     </div>
                     <div>
                         <label>Ver Negociações <br /> em Destaques</label>
                     </div>
                     
                 </div>
                 <div className="areaNotNegocioPassado">
                     
                     <div>
                         <label>1000pts</label>
                     </div>
                     <div>
                         <label>Ver Negociações <br /> em Destaques</label>
                     </div>
                     
                 </div>
                 <div className="areaNotNegocioPassado">
                     
                     <div>
                         <label>1000pts</label>
                     </div>
                     <div>
                         <label>Ver Negociações <br /> em Destaques</label>
                     </div>
                     
                 </div>
            </div>
        </NotificationConteudo>
      </ContainerRede>
      <Footer>

      </Footer>
    </Container>
  );
}