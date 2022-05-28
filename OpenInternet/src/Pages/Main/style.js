import styled from "styled-components";
import img from "../../assets/MainUser.png";

let rosa = "#E8C547";

export const Container = styled.div`
  background-image: url(${img});
  flex: 1;
  alignContents: space-between;
  flexWrap: wrap;
  flexDirection: row;
  width: 360px;
  height: 740px;
`;

export const Wrapper = styled.div`
  width: 360px;
  height: 740px;

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
    margin-top: -30px;
  flexWrap: wrap;
  alignContent: space-between;

  buttonHome {
    background: transparent;
    color: ${rosa};
    border-bottom: 2px solid ${rosa};
    border-top: 1px solid ${rosa};
    border-left: 1px solid ${rosa};
    border-right: 2px solid ${rosa};
    margin: 8px;
    font-size: 1.5rem;
  }

  buttonPedidos {
    background: transparent;
    color: ${rosa};
    border-bottom: 2px solid ${rosa};
    border-top: 1px solid ${rosa};
    border-left: 1px solid ${rosa};
    border-right: 2px solid ${rosa};
    margin: 8px;
    font-size: 1.5rem;
    margin-left: 8px;
  }

  buttonPedidos {
    background: transparent;
    color: ${rosa};
    border-bottom: 2px solid ${rosa};
    border-top: 1px solid ${rosa};
    border-left: 1px solid ${rosa};
    border-right: 2px solid ${rosa};
    margin: 8px;
    font-size: 1.5rem;
  }

  buttonCalendario {
    background: transparent;
    color: ${rosa};
    border-bottom: 2px solid ${rosa};
    border-top: 1px solid ${rosa};
    border-left: 1px solid ${rosa};
    border-right: 2px solid ${rosa};
    margin: 8px;
    font-size: 1.5rem;
  }

  buttonPerfil {
    background: transparent;
    color: ${rosa};
    border-bottom: 2px solid ${rosa};
    border-top: 1px solid ${rosa};
    border-left: 1px solid ${rosa};
    border-right: 2px solid ${rosa};
    margin: 8px;
    font-size: 1.5rem;
  }
`;