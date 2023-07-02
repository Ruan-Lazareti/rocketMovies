import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "content";

  width: 100%;
  height: 100vh;

  padding-bottom: 5.0rem;
  overflow-y: hidden;

  > main {
    grid-area: "content";
    overflow-y: auto;
    width: 114.0rem;
    margin: 4.0rem auto 0;

    a {
      display: flex;
      align-items: center;
      gap: .8rem;

      color: ${({ theme }) => theme.COLORS.PINK};
      margin-bottom: 2.4rem;
    }
  }
`

export const Content = styled.div`
  margin-bottom: 10.0rem;

  > .title {
    display: flex;
    align-items: baseline;
    gap: 1.9rem;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
    }

    > .rating {
      svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-left: .5rem;
    }
    }

  }

  > .profile {
    display: flex;
    align-items: center;
    gap: .8rem;

    margin-top: 2.4rem;
    margin-bottom: 4.0rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 35px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  p {
    margin-top: 4.0rem;
    text-align: justify;
  }
`