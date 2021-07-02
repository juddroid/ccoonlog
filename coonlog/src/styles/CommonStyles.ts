import styled from 'styled-components';

export const Button = {
  AsideButton: styled.button`
    width: 120px;
    height: 50px;
    outline: none;
    background: transparent;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.pink};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    font-size: 1rem;
    margin: 10px 0;
    padding: 10px;
    cursor: pointer;
    transition: all 0.4s;

    :hover {
      background: ${({ theme }) => theme.colors.white};
      font-size: 1.1rem;
    }

    :active {
      font-size: 0.6rem;
      color: #333;
    }
  `,
};
