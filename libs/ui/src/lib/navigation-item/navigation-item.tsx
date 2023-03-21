import { LiHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledNavigationItem = styled.li`
  margin-right: 1rem;
`;

export const NavigationItem = ({
  children,
  ...rest
}: LiHTMLAttributes<HTMLLIElement>) => {
  return <StyledNavigationItem {...rest}>{children}</StyledNavigationItem>;
};

export default NavigationItem;
