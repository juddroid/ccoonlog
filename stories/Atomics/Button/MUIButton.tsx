import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';

export interface MUIButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const MUIButton = ({ children, ...props }: MUIButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default MUIButton;
