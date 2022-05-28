import styled from "styled-components";
import img from "../../assets/BackGround.png";

let rosa = "#E8C547";
let amarelo = "#5C80BC"

export const Container = styled.div`
  background-image: url(${img});
  flex: 1;
  alignContents: space-between;
  flexWrap: wrap;
  flexDirection: row;
  width: 360px;
  height: 740px;
`;

export const Fetchs = styled.div`
    h1 {
        font-size: 1.875rem;
        padding-top: 1.875rem;
        color: ${amarelo};
    }
    a {
        display: inline-block;
        width: 50px;
        text-decoration: none;
      }
      nav, scroll-container {
        display: block;
        margin: 0 auto;
        text-align: center;
      }
      nav {
        width: 360px;
        padding: 5px;
        border: 1px solid black;
      }
      scroll-container {
        display: block;
        width: 360px;
        height: 740px;
        overflow-y: scroll;
        scroll-behavior: smooth;
      }
      scroll-page {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 5em;
      }
`;

export const Wrapper = styled.div`

  flexWrap: wrap;
  alignContent: space-between;

    buttonBack {
      background: transparent;
      color: ${rosa};
      border-bottom: 2px solid ${rosa};
      border-top: 1px solid ${rosa};
      border-left: 1px solid ${rosa};
      border-right: 2px solid ${rosa};
      margin: 10px;
      margin-right: 170px;
      font-size: 1.5rem;
    }

    buttonMsg {
      alignSelf: flex-end;
      background: transparent;
      color: ${rosa};
      border-bottom: 2px solid ${rosa};
      border-top: 1px solid ${rosa};
      border-left: 1px solid ${rosa};
      border-right: 2px solid ${rosa};
      margin: 10px;
      font-size: 1.5rem;
    }
`;

export const Baixo = styled.div`
    margin-top: -50px;
  flexWrap: wrap;
  alignContent: space-between;

  buttonHome {
    background: transparent;
    color: ${rosa};
    border-bottom: 2px solid ${rosa};
    border-top: 1px solid ${rosa};
    border-left: 1px solid ${rosa};
    border-right: 2px solid ${rosa};
    margin: 6px;
    font-size: 1.5rem;
  }

  buttonPedidos {
    background: transparent;
    color: ${rosa};
    border-bottom: 2px solid ${rosa};
    border-top: 1px solid ${rosa};
    border-left: 1px solid ${rosa};
    border-right: 2px solid ${rosa};
    margin: 6px;
    font-size: 1.5rem;
  }

  buttonPedidos {
    background: transparent;
    color: ${rosa};
    border-bottom: 2px solid ${rosa};
    border-top: 1px solid ${rosa};
    border-left: 1px solid ${rosa};
    border-right: 2px solid ${rosa};
    margin: 6px;
    font-size: 1.5rem;
  }

  buttonCalendario {
    background: transparent;
    color: ${rosa};
    border-bottom: 2px solid ${rosa};
    border-top: 1px solid ${rosa};
    border-left: 1px solid ${rosa};
    border-right: 2px solid ${rosa};
    margin: 6px;
    font-size: 1.5rem;
  }

  buttonPerfil {
    background: transparent;
    color: ${rosa};
    border-bottom: 2px solid ${rosa};
    border-top: 1px solid ${rosa};
    border-left: 1px solid ${rosa};
    border-right: 2px solid ${rosa};
    margin: 6px;
    font-size: 1.5rem;
  }
`;