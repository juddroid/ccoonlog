import styled from 'styled-components';

export const Common = {
  Header: styled.div`
    color: #fff;

    h3 {
      font-family: Montserrat, sans-serif;
      font-weight: 900;
      font-size: 1.75rem;
      margin-bottom: 0.4375rem;
      margin-top: 3.5rem;
      line-height: 1.1;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.hotPink};
    }

    small {
      font-size: 80%;
    }
  `,
};

export const Button = {
  AsideButton: styled.button`
    width: 120px;
    height: 50px;
    outline: none;
    background: transparent;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.hotPink};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    font-size: 1rem;
    margin: 5px 0;
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

  MenuButton: styled.button`
    width: 120px;
    height: 50px;
    outline: none;
    background: transparent;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.hotPink};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    font-size: 1rem;
    margin: 10px 0px;
    margin-right: 10px;
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

  OAuthButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ theme }) => theme.boxSizes.xxxl};
    height: ${({ theme }) => theme.sizes.xxxl};
    margin: ${({ theme }) => theme.margins.small};
    border-radius: 11px;
    font-family: Montserrat, sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 700;
    background: ${({ background }: { background: string | undefined }) =>
      background ? background : `transparent`};
    color: ${({ color }) => color};
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    border: 1px solid ${({ theme }) => theme.colors.black};

    :hover {
      font-size: 0.9rem;
    }

    :active {
      font-size: 0.6rem;
      color: #333;
    }
  `,
};

export const Info = {
  Info: styled.div`
    font-size: 80%;
    display: flex;
    color: ${({ theme }) => theme.colors.black};
  `,

  InfoDate: styled.div``,

  InfoDot: styled.div`
    padding: 0 3px;
  `,

  InfoRead: styled.div``,
};
