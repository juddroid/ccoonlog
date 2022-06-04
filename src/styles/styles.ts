import styled from 'styled-components';
import { Button } from './CommonStyles';

// App
export const App = {
  App: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 2.625rem 1.3125rem;
    font-weight: 400;
    min-width: 500px;
  `,
};

// LogIn
export const LogIn = {
  LogIn: styled.div`
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.hotPink};
    border-radius: 16px;
    margin-top: ${({ theme }) => theme.margins.xxxl};
    padding: ${({ theme }) => theme.margins.small};
  `,
};

// Main
export const Main = {
  Main: styled.main`
    padding: 0px 1px;
  `,

  Error: styled.main`
    margin-top: 3.5rem;
    color: ${({ theme }) => theme.colors.black};
  `,
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
    background: ${({ theme }) => theme.colors.white};
    transition: all ease-in-out 0.4s;

    @media (max-width: 768px) {
      position: sticky;
      top: 0px;
      padding: 10px 0px;
      z-index: 9999;
    }
  `,

  Title: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-family: Montserrat, 'Nanum Gothic Coding', 'Georgia', sans-serif;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.dark};
    line-height: ${({ theme }) => theme.sizes.xxxl};
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
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

  ReactToggleTrack: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #0f1114;
    transition: all 0.4s ease;
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
    background-color: #fff;
    box-sizing: border-box;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform: ${({ modePosition }: { modePosition: number }) =>
      `translateX(${modePosition}px)`};
  `,
};

// AsideMain
export const AsideMain = {
  AsideMain: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

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

    @media (max-width: 768px) {
      position: sticky;
      top: -32px;
      padding: 10px 0px;
      z-index: 9998;
    }
  `,

  AsideInfoWrapper: styled.div`
    display: flex;
  `,

  AsideSmallWrapper: styled.div`
    display: none;
    background: ${({ theme }) => theme.colors.white};
    transition: all ease-in-out 0.4s;

    @media (max-width: 768px) {
      display: flex;
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
    /* border: 1px solid ${({ theme }) => theme.colors.dark}; */
  `,

  ProfileImage: styled.img`
    width: 100%;
    transition: all ease-out 0.4s;

    :hover {
      width: 150%;
    }
  `,
};

// AsideSmall
export const AsideSmall = {
  AsideSmall: styled.div`
    width: 100%;
  `,

  AsideSmallBox: styled.div`
    border: 1px solid ${({ theme }) => theme.colors.hotPink};
    max-width: 476px;
    width: 100%;
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.black};
    height: fit-content;
    padding: 3px 5px;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 15px;
    justify-content: space-evenly;
  `,

  AsideSmallButton: styled(Button.AsideButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 30px;
    font-size: 0.7rem;
    font-weight: 600;
    margin-right: 3px;
    padding: 0px;
    box-sizing: border-box;

    :hover {
      font-size: 12px;
    }

    :active {
      font-size: 0.6rem;
      color: #333;
    }
  `,

  LogInButton: styled(Button.AsideButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 30px;
    font-size: 0.7rem;
    font-weight: 600;
    margin-right: 3px;
    padding: 0px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.hotPink};

    :hover {
      background: ${({ theme }) => theme.colors.white};
      font-size: 13px;
    }

    :active {
      font-size: 0.6rem;
      color: #333;
    }

    :last-child {
      margin-right: 0px;
    }
  `,
};

// AsideSticky
export const AsideSticky = {
  AsideSticky: styled.div`
    position: relative;
    top: 270px;
    left: -10px;
    transition: all ease-in-out 0.4s;

    @media (max-width: 768px) {
      opacity: 0;
      transform: translateX(-100px);
      display: none;
    }
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
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
      Tahoma, Geneva, sans-serif;
  `,

  ArticleButtonBox: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 3.5rem;
  `,

  ArticleDetail: styled.div`
    padding: 0px 1px;
  `,

  ArticleDetailHeader: styled.div`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${({ theme }) => theme.margins.xxxl};

    h2 {
      font-family: Montserrat, -apple-system, BlinkMacSystemFont,
        'Helvetica Neue', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕',
        나눔고딕, 'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial,
        돋움, Dotum, Tahoma, Geneva, sans-serif;
      font-weight: 900;
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
      margin-bottom: 0.4375rem;
      margin-top: 3.5rem;
      line-height: 1.1;
    }

    h3 {
      font-family: Montserrat, -apple-system, BlinkMacSystemFont,
        'Helvetica Neue', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕',
        나눔고딕, 'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial,
        돋움, Dotum, Tahoma, Geneva, sans-serif;
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSizes.xl};
      margin-bottom: 0.4375rem;
      margin-top: 1rem;
      line-height: 1.1;
    }
  `,

  ArticleCategoryBox: styled.div`
    display: flex;
  `,

  ArticleDetailCategory: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    border-radius: 5px;
    color: #fff;
    font-family: Montserrat, 'Nanum Gothic Coding', 'Georgia', sans-serif;
    font-weight: 500;
    font-size: 0.7rem;
    margin-right: 5px;
    padding: 0px 5px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.back};
  `,

  ArticleDetailCategoryBox: styled.div`
    display: flex;
    margin-top: 1rem;
  `,

  ArticleDetailViewer: styled.div`
    position: relative;

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
      color: ${({ theme }) => theme.colors.dark};
      line-height: 2;
      margin: 10px 0;
      font-family: Montserrat, -apple-system, BlinkMacSystemFont,
        'Helvetica Neue', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕',
        나눔고딕, 'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial,
        돋움, Dotum, Tahoma, Geneva, sans-serif;
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

      p {
        line-height: 2;
      }

      ::before {
        color: ${({ theme }) => theme.colors.dark};
        line-height: 1.3;
        margin-top: 6px;
      }
    }

    .toastui-editor-contents ul > li {
      ::before {
        margin-top: 13px;
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

      code {
        color: #222;
      }
    }
    .toastui-editor-contents td,
    th,
    tr {
      color: ${({ theme }) => theme.colors.dark};
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
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
      Tahoma, Geneva, sans-serif;
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
    font-family: Montserrat, 'Nanum Gothic Coding', 'Georgia', sans-serif;
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
    font-family: Montserrat, 'Nanum Gothic Coding', 'Georgia', sans-serif;
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

  Editor: styled.div`
    background: #fff;
  `,

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
      color: ${({ theme }) => theme.colors.dark};
      line-height: 1.5;
      margin: 10px 0;
      font-family: Montserrat, -apple-system, BlinkMacSystemFont,
        'Helvetica Neue', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕',
        나눔고딕, 'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial,
        돋움, Dotum, Tahoma, Geneva, sans-serif;
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

      p {
        line-height: 2;
      }

      ::before {
        color: #222;
        line-height: 2;
        margin-top: 12px;
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

// Comment

export const Comment = {
  Comment: styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
  `,
  CommentInput: styled.textarea`
    border: 1px solid ${({ theme }) => theme.colors.hotPink};
    height: 200px;
    border-radius: 16px;
    padding: 20px;
    background: ${({ theme }) => theme.colors.white};
    outline: none;
    width: 100%;
    min-height: 150px;
    resize: none;
    box-sizing: border-box;
    transition: all ease-in-out 0.4s;

    :focus-within {
      border: 1px solid ${({ theme }) => theme.colors.back};
      background: #fff;
    }
  `,

  CommentDisplayBox: styled.div``,

  CommentButtonBox: styled.div`
    display: flex;
    justify-content: flex-end;
  `,

  CommentDisplay: styled.div`
    width: 100%;
    margin-bottom: ${({ theme }) => theme.margins.base};
    font-family: inherit;
  `,

  CommentDisplayHeader: styled.div`
    border: 1px solid ${({ theme }) => theme.colors.hotPink};
    padding: 5px 20px;
    box-sizing: border-box;
    height: fit-content;
    border-radius: 16px 16px 0px 0px;
    font-size: 12px;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
      Tahoma, Geneva, sans-serif;
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  CommentDisplayHeaderInfoBox: styled.div`
    display: flex;
  `,

  CommentDisplayHeaderInfoName: styled.div``,

  CommentDisplayHeaderInfoDate: styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 10px;
    font-size: 10px;
  `,

  CommentDisplayHeaderButtonBox: styled.div`
    display: flex;
  `,

  CommentDisplayBody: styled.div`
    border: 1px solid ${({ theme }) => theme.colors.hotPink};
    padding: 5px;
    box-sizing: border-box;
    border-radius: 0px 0px 16px 16px;
    border-top: 0px;
    font-size: 12px;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
      Tahoma, Geneva, sans-serif;
    color: ${({ theme }) => theme.colors.black};
  `,

  CommentPawButton: styled(Button.MenuButton)`
    color: ${({ theme }) => theme.colors.hotPink};
    margin: 0px 0px 0px 3px;

    :disabled {
      opacity: 0.2;
      font-size: inherit;
      cursor: default;
    }
  `,

  CommentButton: styled(Button.MenuButton)`
    margin: 0px 3px;
  `,

  CommentHeaderButton: styled.div`
    margin-left: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease-in-out 0.4s;
    border-radius: 50%;
    width: 20px;
    height: 20px;

    svg {
      color: ${({ theme }) => theme.colors.hotPink};
    }
  `,

  CommentProfileImageBox: styled.div`
    padding: 3px 0px 0px 3px;
  `,

  CommentProfileImageWrapper: styled(AsideMain.ProfileImageBox)``,

  CommentProfileImage: styled(AsideMain.ProfileImage)``,

  CommentDisplayUpperBox: styled.div`
    display: flex;
    flex-direction: column;
  `,

  CommentDisplayUpperBoxWrapper: styled.div`
    display: flex;
  `,

  CommentDisplayBottomBox: styled.div``,

  CommentDisplayContent: styled.div`
    padding: 10px 20px;
    box-sizing: border-box;

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
      color: ${({ theme }) => theme.colors.dark};
    }
  `,

  CommentEditTextArea: styled.textarea`
    color: inherit;
    resize: vertical;
    width: 100%;
    min-height: 50px;
    outline: none;
    border-radius: 16px;
    padding: 15px 20px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    box-sizing: border-box;
    display: flex;
    background: transparent;
  `,

  CommentDisplayHeaderTime: styled.div``,

  CommentDisplayHeaderUpdateTime: styled.div`
    color: ${({ theme }) => theme.colors.gray};
    margin-left: 10px;
  `,
};

export const Cocomment = {
  Cocomment: styled(Comment.Comment)`
    margin: 0px;
    margin-bottom: ${({ theme }) => theme.margins.base};
  `,

  CocommentInput: styled.div``,

  CocommentDisplayBox: styled(Comment.CommentDisplayBox)``,

  CocommentEditButtonBox: styled(Comment.CommentButtonBox)`
    margin-bottom: ${({ theme }) => theme.margins.small};
  `,

  CocommentDisplayUpperBox: styled(Comment.CommentDisplayUpperBox)``,
  CocommentDisplayBottomBox: styled(Comment.CommentDisplayBottomBox)``,

  CocommentButton: styled(Comment.CommentButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    font-size: ${({ theme }) => theme.fontSizes.small};
  `,

  CocommentPawButton: styled(Comment.CommentPawButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    font-size: ${({ theme }) => theme.fontSizes.small};
  `,

  CocommentDisplayUpperBoxWrapper: styled(
    Comment.CommentDisplayUpperBoxWrapper
  )`
    margin-left: 70px;
  `,
};
