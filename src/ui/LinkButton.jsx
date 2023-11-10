import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled(Link)`
  display: inline-block;
  padding: 1rem 4rem;
  border: 0.125em solid #183153;
  border-radius: 0.75em;
  background-color: var(--color-brand-400);
  cursor: pointer;
  text-align: center;
  vertical-align: center;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 0.375em #183153;

  &:hover {
    background-color: var(--color-brand-500);
  }
`;

export default LinkButton;
