import styled from 'styled-components';
import { DefaultText } from '../../Atomics/Text';

interface TitleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Title = ({ children, ...props }: TitleProps) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled(DefaultText)`
  font-size: 2rem;
`;
