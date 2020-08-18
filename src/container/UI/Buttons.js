import styled, {ThemeProvider} from 'styled-components';
import theme from "./Theme";

const StyledButton = styled.button`
  width: 15rem;
  height: 4rem;
  border: none;
  border-radius: 1rem;
  box-sizing: border-box;

 
  box-shadow: .3rem .3rem .6rem ${(props)=> props.theme.greyLight1}, -.2rem -.2rem .5rem ${(props)=> props.theme.white};

  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s ease;
 
  margin: 40px;

`;

export default StyledButton