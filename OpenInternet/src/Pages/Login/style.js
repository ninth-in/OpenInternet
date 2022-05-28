import styled from "styled-components";
import img from "../../assets/Login.png";

let rosa = "#E8C547";
let amarelo = "#CE2D4F";

export const Container = styled.div`
  background-image: url(${img});
  flex: 1;
  alignItems: left;
  flexWrap: wrap;
  flexDirection: columm;
  width: 360px;
  height: 740px;
`;

export const Wrapper = styled.div`
  width: 360px;
  height: 740px;

`;

export const Input = styled.div`
  margin-top: -20px;

  inputCriar{
    background:transparent;
    margin: 150px;
    margin-left: 20px;
    margin-right: 26px; 
    margin-bot: 30px;
    font-size: 2.5rem;
  }
`;

export const Baixo = styled.div`
  margin-top: -50px;
  flexWrap: wrap;
  alignContent: space-between;

  buttonCriar {
    background: ${rosa};
    color: ${amarelo};
    border-bottom: 2px solid ${rosa};
    border-top: 1px solid ${rosa};
    border-left: 1px solid ${rosa};
    border-right: 2px solid ${rosa};
    margin: 150px;
    margin-left: 30px;
    margin-right: 26px; 
    margin-bot: 30px;
    font-size: 2.5rem;
  }

    buttonLogin {
      background: ${rosa};
      color: ${amarelo};
      border-bottom: 2px solid ${rosa};
      border-top: 1px solid ${rosa};
      border-left: 1px solid ${rosa};
      border-right: 2px solid ${rosa};
      font-size: 2.5rem;
    }

`;
