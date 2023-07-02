import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;  
  height: 100vh;

  > header {
    height: 14.4rem;
    background: rgba(255, 133, 155, 0.05);
    display: flex;
    align-items: center;
    
    a {
      display: flex;
      align-items: center;
      gap: .8rem;

      color: ${({ theme }) => theme.COLORS.PINK};

      margin-left:14.4rem;
    }
  }
`

export const Content = styled.div`
  width: 34.0rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  div:nth-child(3) {
    margin-bottom: 2.4rem;
  }

  margin: 0 auto;

  > .imgUser {
    margin: -9.5rem 0 6.5rem;
    position: relative;

    img {
      width: 18.4rem;
      height: 18.4rem;
      border-radius: 93px;
    }

    > label {
      position: absolute;
      bottom: 7px;
      right: 7px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${({ theme }) => theme.COLORS.PINK};
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;

      input {
        display: none;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      }
    }
  }
  
`