import styled from 'styled-components';

const StyledButton = styled.button`
  width: 120px;
  height: 50px;
  outline: none;
  background: transparent;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.hotPink};
  margin: 5px 0;
  padding: 10px;
  font-family: Montserrat, 'Nanum Gothic Coding', 'Georgia', sans-serif;
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSizes.base};
  cursor: pointer;
  transition: all 0.4s;

  :hover {
    background: ${({ theme }) => theme.colors.white};
    font-size: 1.1rem;
  }

  :active {
    font-size: 0.6rem;
    color: #333;
  }
`;

export default StyledButton;
