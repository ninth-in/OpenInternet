import Markdown from "markdown-to-jsx";
import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Container, Baixo } from "./style";

export default function Account() {
  const history = useHistory();
  return (
    <Container>
      <Wrapper>
          <buttonBack onClick={() => history.push("/mainUser/article")}>
            Voltar
          </buttonBack>
          <buttonMsg onClick={() => history.push("/mainUser/messenger")}>
            Conversas
          </buttonMsg>
      </Wrapper>
      <Baixo>
          <buttonHome onClick={() => history.push("/mainUser")}>
            Home
          </buttonHome>
          <buttonPedidos onClick={() => history.push("/mainUser/maps")}>
            Mapa
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