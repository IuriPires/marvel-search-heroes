import styled from "styled-components";
import { PRIMARY, SECONDARY } from "../../global/colors";

export const Container = styled.div`
  width: 100%;
  border-radius: 45px;
  padding: 16px;
  background-color: ${SECONDARY};
  display: flex;
  align-items: center;

  input {
    border: none;
    background-color: transparent;
    margin-left: 16px;
    width: 90%;
    color: ${PRIMARY};

    ::placeholder {
      color: ${PRIMARY};
    }
  }
`;

export const Icon = styled.img`
  color: ${PRIMARY};
`;
