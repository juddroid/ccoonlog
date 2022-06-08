export const getIsServer = () => typeof window === 'undefined';

export const calcRem = (size: number) => `${size / 16}rem`;
