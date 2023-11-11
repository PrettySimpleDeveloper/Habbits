import styled from "styled-components";

const PartTitle = styled.h2`
  margin-top: 1em;
  text-align: center;
  font-size: 1.6rem;
  color: #545454;

  &::after {
    content: "";
    display: block;
    margin: 0.8em auto 0;
    background-color: var(--color-brand-400);
    height: 2px;
    width: 10rem;
  }
`;

export default PartTitle;
