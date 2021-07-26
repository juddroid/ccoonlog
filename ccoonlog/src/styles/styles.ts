import styled from 'styled-components';
import { Button } from './CommonStyles';

// App
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

// LogIn
export const LogIn = {
  LogIn: styled.div`
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.hotPink};
    border-radius: 16px;
    margin-top: ${({ theme }) => theme.margins.xxxl};
    margin-left: ${({ theme }) => theme.margins.lg};
    padding: ${({ theme }) => theme.margins.small};
  `,
};

// Main
export const Main = {
  Main: styled.main``,
};

// Home
export const Home = {
  Home: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 43rem;
    padding: 2.625rem 1.3125rem;
    font-weight: 400;
    font: 100%/1.75 'Merriweather', 'Georgia', serif;
    margin: 0 10px;
  `,
};

// Header
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

// ReactToggle
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

// AsideMain
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
        color: ${({ theme }) => theme.colors.hotPink};
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

// AsideSticky
export const AsideSticky = {
  AsideSticky: styled.div`
    position: relative;
    top: 270px;
    left: -10px;
  `,

  AsideStickyBox: styled.div`
    position: sticky;
    border: 1px solid ${({ theme }) => theme.colors.hotPink};
    top: 100px;
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    box-sizing: border-box;
  `,

  LogInButton: styled(Button.AsideButton)`
    color: ${({ theme }) => theme.colors.hotPink};
  `,
};

// Article
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
    align-items: center;
    margin-top: 3.5rem;
  `,

  ArticleDetail: styled.div``,

  ArticleDetailHeader: styled.div`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${({ theme }) => theme.margins.xxxl};

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

  ArticleDetailCategory: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 0.7rem;
    margin-right: 5px;
    padding: 0px 5px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.black};
  `,

  ArticleDetailCategoryBox: styled.div`
    display: flex;
    margin-top: 1rem;
  `,

  ArticleDetailViewer: styled.div`
    .toastui-editor-contents p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ol,
    li,
    hr {
      color: #222;
      line-height: 1.3;
      margin: 20px 0;
      font-family: Montserrat, 'Merriweather', 'Georgia', sans-serif;
    }

    .toastui-editor-contents h1 {
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
      margin-top: ${({ theme }) => theme.margins.xxl};
    }

    .toastui-editor-contents h2 {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
      margin-top: ${({ theme }) => theme.margins.xxl};
    }

    .toastui-editor-contents p {
      font-size: ${({ theme }) => theme.fontSizes.base};
    }
    .toastui-editor-contents li,
    .toastui-editor-contents ul {
      font-size: ${({ theme }) => theme.fontSizes.base};

      ::before {
        color: #222;
        line-height: 2;
      }
    }

    .toastui-editor-contents code {
      padding: 2px 3px;
      letter-spacing: -0.3px;
      border-radius: 5px;
      font-size: 16px;
    }

    .toastui-editor-contents pre {
      margin: 2px 0 8px;
      padding: 18px;
      font-size: ${({ theme }) => theme.fontSizes.base};
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
    min-width: 100px;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.black};
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    font-size: 1rem;
    margin-right: 5px;
    box-sizing: border-box;
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

  PostCategory: styled.div.attrs(({ state }: { state: boolean }) => state)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    border-radius: 5px;
    color: ${({ theme, state }) =>
      state ? theme.colors.white : theme.colors.black};
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 1rem;
    margin-right: 5px;
    padding: 0px 5px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    background: ${({ theme, state }) =>
      state ? theme.colors.black : theme.colors.white};

    :hover {
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    }
  `,

  Editor: styled.div``,

  PostButtonBox: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${({ theme }) => theme.margins.base};
  `,
};

// Loader
export const Loader = {
  Loader: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  `,
  LoaderContent: styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 1rem;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.black};
    border-radius: 20px;
  `,
};

// About
export const About = {
  About: styled.div`
    margin-top: 3.5rem;
  `,
};
