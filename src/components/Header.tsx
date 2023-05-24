import { GambaModalButton } from "gamba/react-ui";
import React from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
  width: 2em;
  height: 2em;
`;

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr max-content;
  width: 100%;
  background: var(--header-bg-color);
  backdrop-filter: blur(10px);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 20px;
  gap: 20px;
  .label {
    display: none;
    @media (min-width: 800px) {
      display: block;
    }
  }
`;

const StyledNavigationLink = styled(NavLink)`
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 1em;
  transition: color 0.1s, border 0.1s;
  white-space: nowrap;
  text-transform: uppercase;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
  align-items: center;
  & > a > svg {
    display: block;
  }
`;

function NavigationLink({
  children,
  to,
}: React.PropsWithChildren<{ to: string }>) {
  return <StyledNavigationLink to={to}>{children}</StyledNavigationLink>;
}

export function Header() {
  return (
    <Wrapper>
      <NavigationLink to="/">
        <Logo src="/logo.png" />
        <div className="label">Charles Casino</div>
      </NavigationLink>
      <Links>
        <a target="_blank" href="https://discord.gg/Q5TK2x2f" rel="noreferrer">
          <FaDiscord />
        </a>
      </Links>
      <GambaModalButton />
    </Wrapper>
  );
}
