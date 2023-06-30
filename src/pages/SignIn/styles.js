import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  width: 64.0rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  padding: 23.5rem 15rem;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 4.8rem;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 4.8rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin: 4.2rem auto 0;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}), no-repeat center center;
  background-size: cover;
  filter: opacity(80%) grayscale(50%) contrast(110%) brightness(0.6);
`