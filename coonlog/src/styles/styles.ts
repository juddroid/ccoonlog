import styled from 'styled-components';

export const Home = {
  Home: styled.div``,
};

export const Header = {
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.paddings.xxxl};
  `,

  Title: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    color: #fff;
    line-height: 2.625rem;
  `,
};
