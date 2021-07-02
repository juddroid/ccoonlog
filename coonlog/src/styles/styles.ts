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

export const Home = {
  Home: styled.div`
    position: relative;
    width: 43rem;
    padding: 2.625rem 1.3125rem;
    font-family: 'Merriweather', 'Georgia', serif;
    font-weight: 400;
    font: 100%/1.75 'Merriweather', 'Georgia', serif;
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
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
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
    left: -30px;
  `,

  AsideStickyBOX: styled.div`
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
