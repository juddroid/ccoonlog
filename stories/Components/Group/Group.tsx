import React from 'react';
import { Flex } from '../../Atomics/Layout';
import { FlexProps } from '../../Atomics/Layout/Flex';

interface GroupProps extends FlexProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Group = ({ children, ...props }: GroupProps) => {
  return (
    <Flex {...props}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child) ? React.cloneElement(child) : child;
      })}
    </Flex>
  );
};

export default Group;
