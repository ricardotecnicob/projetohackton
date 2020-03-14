import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Header = styled.div`
    padding: 30px;
    background: #000;
    text-align: center;
    color: white;
    font-size: 20px;

      span{
        color: red;
        font-weight: bold;
      }

      label{
        text-decoration: underline;
      }

`;

export const ContainerRede = styled.div`
  display: flex;
`;


export const AreaProvider = styled.div`
  flex: 1;

  @media only screen and (min-width: 1920px){
  }

  
  background: red;
  
  .areaMenuPerfil{
      width: 90%;
      margin:auto;
      margin-left: -0px;
      ul{
        list-style: none;
        a{
          color: white;
          font-weight: bold;
          text-decoration: none;

          li{
            padding: 5px; 
            background: #000;
            margin-bottom: 5px; 
            
              span{
                background: red;
                margin-left: 10px;
              }

          }
        }
      }
  }

  .areaImagemName{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    border-bottom: 2px solid #ccc;
    width: 80%;
    margin:auto;

    .imgPerfil{
      background: pink;
      width: 150px;
      height: 170px;
      
    }

    .imgPerfil img{
      height: 100%;
    }

    .textPerfil{
      margin-bottom: 10px;
    }


  }


  .areadecrescimento{
    
    width: 100%;
  }

`;



export const ConteudoBody = styled.div`
  flex: 3;
  @media all and(min-width: 1920px){
  }
  background: green;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  .cardStatups{
    width: 320px;
    height: 400px;
    background: #fff;
    text-align: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-right: 20px;

      .logoStatupCard{
         width: 130px;
         height: 130px;
         background: #000;
         border-radius: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         color: white;
         font-size: 20px;
         font-weight: bold;
         text-align: center;
         margin-bottom: 20px;
      }

      .nomeStatupCard{
        font-weight: bold;
      }

      .bioStatupCard{
        margin-bottom: 20px;
      }

      .areaPontos{
        margin-bottom: 20px;
        font-size: 1.3em;
        font-weight: bold;
        color: white;
        background: #000;
        width: 100%;

          .valorPontos{
            font-size: 1.7em;
          }

      }

      .areaButtons{
        
        button{
          padding: 10px;
          cursor: pointer;
          color: white;
          font-weight: bold;
        }

        button:nth-child(1){
          background: #0000FF;
          border: 1px solid #0000FF;
          margin-right: 10px;
        }

        button:nth-child(1):hover{
          background: #00008B;
          border: 1px solid #00008B;
          margin-right: 10px;
        }

        button:nth-child(2){
          background: #4876FF;
          border: 1px solid #4876FF;
        }

        button:nth-child(2):hover{
          background: #3A5FCD;
          border: 1px solid #3A5FCD;
        }

      }

  }

`;



export const NotificationConteudo = styled.div`
  flex: 1;

  @media only screen and (min-width: 1920px){
  }

  background: yellow;
  padding-top: 20px;


  .areaDePontos{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border-bottom: 2px solid #ccc;
    background: #ccc;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;  


      strong{
        font-size: 3em;
        margin-top: 10px;
      }

      label{
        font-size: 3em;
      }

      small{
        margin-top: 20px;
      }

  } 

  .ultimaAtualizacao{
    background: #00008B;
    width: 100%;
    min-height: 50px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

      label{
        font-size: 1.2em;
        color: white;
        font-weight: bold;
      }

  }
  
  .areaNotNegocioPassado{
    width: 90%;
    margin:auto;
    padding: 10px;
    background: #000;
    margin-top: 20px;
    display:flex;
    justify-content:center;
    align-items: center
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;

      label{
        color: #fff;
        font-weight: bold;
      }

  }


  .verpremios{
    margin-top: 30px;
    text-align: center;
    margin-bottom: 30px;

    a{
      background: #000;
      text-decoration: none;
      padding: 10px;
      color:white; 
    }

    a:hover{
      background: #292929;
    }

  }

`;



export const Footer = styled.div`
  
`;
