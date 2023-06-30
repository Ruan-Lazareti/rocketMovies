import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  margin-top: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 10px;
  border: none;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  font-weight: 500;
`