import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const Header = styled.header`
  position: absolute;
  right: 0;
  left: 0;
  height: 3.4rem;
  display: block;
  margin: 1rem auto !important;
  background-color: var(--color-grey-50);
  box-shadow: var(--shadow-blue-lg);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-brand-100);
  z-index: 7777;

  max-width: 60rem;
  margin: 0 auto;

  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
  }
`;

const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BrandImage = styled.img`
  width: 2.6rem;
`;

const BrandName = styled.h1`
  font-size: 1.7rem;
  font-weight: 800;
  margin: 0 0 0 1rem;
  color: #545454;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.7rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

const StyledNavLink = styled(Link)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);

    padding: 0.8em;
    border-bottom: 3px solid transparent;
    transition: all 0.3s;
  }

  &:hover {
    color: var(--color-brand-500);
    border-bottom: 3px solid var(--color-brand-500);
  }

  /* This works because react-router places the active class on the active NavLink */
  /*
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

   & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  } */
`;

function Navigation() {
  return (
    <>
      <Header>
        <Nav>
          <BrandContainer>
            <Link to="/">
              <BrandImage src="./logo.svg" alt="logo" />
            </Link>
            <Link to="/">
              <BrandName>Habbits</BrandName>
            </Link>
          </BrandContainer>
          <NavList className="header__list">
            {/* <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li> */}
            <li>
              <StyledNavLink to="/login">Login</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/register">Sign up</StyledNavLink>
            </li>
          </NavList>
        </Nav>
      </Header>

      <Outlet />
    </>
  );
}

export default Navigation;
