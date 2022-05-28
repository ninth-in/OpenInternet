import React, { useState, useEffect } from "react";
import axios from "axios";
import {Wrapper, Container,Baixo,Fetchs} from "./style";
import { useHistory } from "react-router-dom";

function ListSightings({ props }) {
  return (
    <>
      <h1>isp: {props.isp}</h1>
    </>
  );
}

export default function Mapa() {
  const [info, setInfo] = useState([]);
  const history = useHistory();

  axios
  .get(`https://app-challenge-api.herokuapp.com/plans`)
  .then(function (response) {
    setInfo(response.data)
    console.log(info);
    
  })
  .catch(function (error) {
    console.log(error);
    alert(error);
  })


  return (
    <Container>
      <Wrapper>
        <buttonBack onClick={() => history.push("/menu/article")}>
            Voltar
          </buttonBack>
          <buttonMsg onClick={() => history.push("/menu/article")}>
            Conversas
          </buttonMsg>
          <Fetchs><scroll-container>
            {info.map((event) => (
                <ListSightings props={event} />
              ))}
              </scroll-container></Fetchs>
      </Wrapper>
      <Baixo>
          <buttonHome onClick={() => history.push("/mainUser")}>
            Home
          </buttonHome>
          <buttonPedidos onClick={() => history.push("/mainUser/maps")}>
            Mapas
          </buttonPedidos>
          <buttonCalendario onClick={() => history.push("/mainUser/calendar")}>
            Calendario
          </buttonCalendario>
          <buttonPerfil onClick={() => history.push("/mainUser/account")}>
            Perfil
          </buttonPerfil>
      </Baixo>
    </Container>
  );
}
