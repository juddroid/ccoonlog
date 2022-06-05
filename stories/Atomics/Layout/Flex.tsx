import React from 'react';
import styled from 'styled-components';

type TypeDirection = 'column' | 'row';

export type TypeStartPosition =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'flex-start'
  | 'flex-end';

export type FlexProps = {
  direction?: TypeDirection;
  mainAlign?: TypeStartPosition;
  crossAlign?: TypeStartPosition;
  height?: string | number;
  centerX?: boolean;
  centerY?: boolean;
  center?: boolean;
  fullX?: boolean;
  fullY?: boolean;
  gap?: number;
  children?: React.ReactNode;
  [key: string]: any;
};

const BasicFlex = ({
  direction = 'row',
  mainAlign = 'start',
  crossAlign = 'start',
  centerX,
  centerY,
  center,
  fullX = true,
  fullY = false,
  height = 'auto',
  gap = 0,
  children,
  ...restProps
}: FlexProps) => {
  const changeFlex = () => {
    if (!centerX && !centerY && !center) {
      return { mainAlign, crossAlign };
    }
    if (centerX && direction === 'column') {
      crossAlign = 'center';
    }
    if (centerX && direction === 'row') {
      mainAlign = 'center';
    }
    if (centerY && direction === 'column') {
      mainAlign = 'center';
    }
    if (centerY && direction === 'row') {
      crossAlign = 'center';
    }
    if (center || (centerX && centerY)) {
      mainAlign = 'center';
      crossAlign = 'center';
    }
    return { mainAlign, crossAlign };
  };

  let { mainAlign: changedMain, crossAlign: changedCross } = changeFlex();

  if (changedMain === 'start' || changedMain === 'end') {
    changedMain = ('flex-' + changedMain) as TypeStartPosition;
  }
  if (changedCross === 'start' || changedCross === 'end') {
    changedCross = ('flex-' + changedCross) as TypeStartPosition;
  }

  return (
    <StyledFlexBox
      {...{ direction, height, fullX, fullY, gap }}
      mainAlign={changedMain}
      crossAlign={changedCross}
      {...restProps}
    >
      {React.Children.map(children, (child) => {
        if (!child) {
          return null;
        }
        return React.isValidElement(child) ? React.cloneElement(child) : child;
      })}
    </StyledFlexBox>
  );
};

const StyledFlexBox = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ mainAlign }) => mainAlign};
  align-items: ${({ crossAlign }) => crossAlign};
  height: ${({ height }) => {
    return typeof height === 'string' ? height : `${height}px`;
  }};
  width: ${({ fullX }) => {
    return fullX ? '100%' : 'auto';
  }};
  gap: ${({ gap }) => `${gap}px`};
  min-height: ${({ fullY }) => fullY && '100vh'};
`;
export default BasicFlex;
