import React, { FC } from "react";
import { Container, Image, Title, SubTitle, Wrapper } from "./styles";

import Input from "../Input";

import logo from "../../assets/images/logo.png";

const Header: FC = () => {
  return (
    <Container>
      <Image src={logo} />
      <Title>EXPLORE O UNIVERSO</Title>
      <SubTitle>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </SubTitle>

      <Wrapper>
        <Input placeholder="Procure por heróis" color="red" />
      </Wrapper>
    </Container>
  );
};

export default Header;
