import React from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 10px;
  margin-bottom: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  color: ${({ active, theme }) => (active ? "#fff" : theme.colors.text)};

  ${({ active, theme }) =>
    active &&
    `
    background: linear-gradient(
      135deg,
      ${theme.colors.primary}88,
      ${theme.colors.secondary || theme.colors.primary}55
    );
    backdrop-filter: blur(8px) saturate(180%);
    border: 1px solid ${theme.colors.primary}55;
    box-shadow: 0 4px 20px ${theme.colors.primary}55,
                inset 0 0 10px ${(theme.colors.secondary || theme.colors.primary)}33;
  `}

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 25px ${({ theme }) => theme.colors.primary}55;
  }
`;

export default function MenuItem({ children, active, ...props }) {
  return <Item active={active ? 1 : 0} {...props}>{children}</Item>;
}
