import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 0 1rem;
  width: 100%;
  max-width: 960px;
`;
export const Main = ({ children, ...rest }: HTMLAttributes<HTMLElement>) => (
  <StyledMain {...rest}>{children}</StyledMain>
);
export default Main;
