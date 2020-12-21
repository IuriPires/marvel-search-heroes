import React, { FC, InputHTMLAttributes } from "react";
import { Container, Icon } from "./styles";

import searchIcon from "../../assets/icons/search.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  color: string;
}

const Input: FC<InputProps> = ({ placeholder, color, ...rest }: InputProps) => {
  return (
    <Container>
      <Icon src={searchIcon} />
      <input placeholder={placeholder} color={color} {...rest} />
    </Container>
  );
};

export default Input;
