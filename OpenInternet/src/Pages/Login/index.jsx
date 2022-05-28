import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Container, Baixo, Input} from "./style";


export default function Login() {
  const history = useHistory();

    return (
      <Container>
        <Wrapper>
        </Wrapper>
        <Baixo>
            <buttonCriar onClick={() => history.push("/")}>
              Criar conta  
            </buttonCriar>
            <buttonLogin onClick={() => history.push("/mainUser")}>
              Login
            </buttonLogin>
        </Baixo>
      </Container>
     );
}
