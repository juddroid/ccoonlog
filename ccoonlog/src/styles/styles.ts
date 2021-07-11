import styled from 'styled-components';

export const App = {
  App: styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    padding: 2.625rem 1.3125rem;
    font-family: 'Merriweather', 'Georgia', serif;
    font-weight: 400;
    font: 100%/1.75 'Merriweather', 'Georgia', serif;
  `,
};

export const Main = {
  Main: styled.main``,
};

export const Home = {
  Home: styled.div`
    position: relative;
    width: 43rem;
    padding: 2.625rem 1.3125rem;
    font-weight: 400;
    font: 100%/1.75 'Merriweather', 'Georgia', serif;
    margin: 0 10px;
  `,
};

export const Header = {
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.paddings.xxxl};
  `,

  Title: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.white};
    line-height: ${({ theme }) => theme.sizes.xxxl};
  `,
};

export const ReactToggle = {
  ReactToggle: styled.div`
    touch-action: pan-x;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;
    margin-left: 40px;
  `,
  ReactToggleTrackCheck: styled.div`
    border: 1px solid #fff;
    position: absolute;
    width: 17px;
    height: 17px;
    left: 5px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    opacity: 0;
    transition: opacity 0.25s ease;
  `,
  ReactToggleThumb: styled.div`
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fafafa;
    box-sizing: border-box;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform: ${({ modePosition }: { modePosition: number }) =>
      `translateX(${modePosition}px)`};
  `,
};

export const AsideMain = {
  AsideMain: styled.div`
    display: flex;
    align-items: center;

    p {
      color: ${({ theme }) => theme.colors.black};
      max-width: 310px;
      margin-bottom: ${({ theme }) => theme.margins.xl};

      a {
        box-shadow: 0 1px 0 0 currentColor;
        color: ${({ theme }) => theme.colors.pink};
        text-decoration: none;
        cursor: pointer;
      }
    }
  `,
  ProfileImageBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    width: 3.5rem;
    height: 3.5rem;
    margin-right: 0.875rem;
    margin-bottom: 1.75rem;
    border-radius: 50%;
  `,

  ProfileImage: styled.img`
    width: 100%;
    transition: all ease-out 0.4s;

    :hover {
      width: 150%;
    }
  `,
};

export const AsideSticky = {
  AsideSticky: styled.div`
    position: relative;
    top: 270px;
    left: -10px;
  `,

  AsideStickyBox: styled.div`
    position: sticky;
    border: 1px solid #ffa7c4;
    top: 100px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.black};
    height: 100px;
    width: 100%;
    height: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    box-sizing: border-box;
  `,
};

export const Article = {
  Article: styled.div`
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Merriweather', 'Georgia', serif;
    p {
      margin-bottom: 1.75rem;
    }
  `,

  ArticleButtonBox: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 3.5rem;
  `,

  ArticleDetail: styled.div`
    margin-top: 3.5rem;
  `,

  ArticleDetailHeader: styled.div`
    color: ${({ theme }) => theme.colors.black};

    h2 {
      font-family: Montserrat, sans-serif;
      font-weight: 900;
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
      margin-bottom: 0.4375rem;
      margin-top: 3.5rem;
      line-height: 1.1;
    }

    h3 {
      font-family: Montserrat, sans-serif;
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSizes.xl};
      margin-bottom: 0.4375rem;
      margin-top: 1rem;
      line-height: 1.1;
    }
  `,

  ArticleDetailViewer: styled.div`
    .tui-editor-contents p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ol,
    li,
    hr {
      color: #fff;
      line-height: 2;
      margin: 20px 0;
    }

    .tui-editor-contents h1 {
      font-size: 28px;
    }
    .tui-editor-contents p {
      font-size: 20px;
    }
    .tui-editor-contents li,
    .tui-editor-contents ul {
      font-size: 20px;

      ::before {
        color: #fff;
        line-height: 2;
      }
    }

    .tui-editor-contents code {
      color: #fff;
      background-color: #363c48;
      padding: 2px 3px;
      letter-spacing: -0.3px;
      border-radius: 5px;
      font-size: 16px;
    }

    .tui-editor-contents pre {
      margin: 2px 0 8px;
      padding: 18px;
      background-color: #363c48;
      border-radius: 5px;
    }
  `,
};

export const Post = {
  Post: styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding: 3.5rem 0;
    width: 100%;
  `,

  PostBox: styled.div`
    margin: 5px 0;
    display: flex;
  `,

  PostTitle: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.black};
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    font-size: 1rem;
    margin-right: 5px;
  `,

  PostInput: styled.input`
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    width: 100%;
    height: 50px;
    border-radius: 5px;
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;
    font-size: 1.5rem;
    font-family: Montserrat, sans-serif;
    font-weight: 900;

    ::placeholder {
      color: ${({ theme }) => theme.colors.dark};
      opacity: 0.2;
    }
  `,

  Editor: styled.div``,
};
