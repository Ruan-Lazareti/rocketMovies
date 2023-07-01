import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 11.6rem;

  display: flex;
  justify-content: space-between;
  gap: 6.4rem;
  padding: 2.4rem 12.3rem;


  align-items: center;
  border-bottom: 1px solid #3E3B47;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    font-weight: 700;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  gap: .9rem;
  white-space: nowrap;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 35px;
    border: 1px solid #3E3B47;
  }

  > .wrapper {
    > h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.4rem;
      font-weight: 700;
    }

    > a { 
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 1.4rem;
      font-weight: 400;
    }

  }



`