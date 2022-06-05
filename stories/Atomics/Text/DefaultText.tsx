import styled from 'styled-components';
import Text, { TextProps } from './Text';

interface DefaultTextProps extends TextProps {}

const DefaultText = ({ children, ...props }: DefaultTextProps) => {
  return <StyledDefaultText {...props}>{children}</StyledDefaultText>;
};

export default DefaultText;

const StyledDefaultText = styled(Text)<DefaultTextProps>`
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Apple SD Gothic Neo', 'Malgun Gothic',
    '맑은 고딕', 나눔고딕, 'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum, Tahoma, Geneva,
    sans-serif;
  transition: all 0.4s;
  font-weight: ${({ bold = 900 }) => (bold === true ? 'bold' : bold)};
`;
