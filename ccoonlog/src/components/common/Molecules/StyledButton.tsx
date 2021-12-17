import React, { ReactChildren } from 'react';
import { ReactChild } from 'react';
import { JsxChild, JsxElement, NodeArray } from 'typescript';
import { ReactProps } from '../../../types/types';
import { BasicButton } from '../Atoms';
import PointButton from '../Atoms/Button/PointButton';

interface StyledButtonProps extends ReactProps {
  type: string;
}

const StyledButton: any = ({ type, children }: StyledButtonProps) => {
  return {
    basic: <BasicButton>{children}</BasicButton>,
    point: <PointButton>{children}</PointButton>,
  }[type];
};

export default StyledButton;
