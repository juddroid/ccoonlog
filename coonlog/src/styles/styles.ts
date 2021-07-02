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
    color: ${({ theme }) => theme.colors.white};
    line-height: ${({ theme }) => theme.gap.xxxl};
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
