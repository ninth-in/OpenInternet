import Markdown from "markdown-to-jsx";
import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Container } from "./style";

const input = `
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
`

export default function Article() {
    const history = useHistory();
    return (
      <Container>
        <Wrapper>
          <Markdown>{input}</Markdown>
        </Wrapper>
      </Container>
    );
  }