import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.2rem;
    padding: 1.2rem 4rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.4rem;
    padding: 1.2rem 6rem;
    font-weight: 500;
  `,
};

const types = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-500);

    &:hover {
      background-color: var(--color-brand-600);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const LinkButton = styled(Link)`
  display: inline-block;
  border: 0.125em solid #183153;
  border-radius: 0.75em;
  cursor: pointer;
  text-align: center;
  vertical-align: center;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 0.375em #183153;

  ${(props) => sizes[props.size]}
  ${(props) => types[props.type]}
`;

LinkButton.defaultProps = {
  type: "primary",
  size: "medium",
};
export default LinkButton;
