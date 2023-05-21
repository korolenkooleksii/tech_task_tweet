import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Head = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 50px;
  width: calc(100vw * 0.9);
  display: flex;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: ${(p) => p.theme.shadow.primary},
    ${(p) => p.theme.shadow.secondary}, ${(p) => p.theme.shadow.third};
  background-color: ${(p) => p.theme.colors.transGreen};
`;

export const Nav = styled.nav`
  display: flex;
`;

export const LinkPage = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: ${(p) => p.theme.colors.primary};

  &.active {
    color: ${(p) => p.theme.colors.accent};
  }
`;


