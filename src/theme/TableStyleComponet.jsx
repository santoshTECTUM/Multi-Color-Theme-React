// StyledTable.js
import styled from "styled-components";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

// Header Cell
export const ThemedHeaderCell = styled(TableCell)`
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

// Row
export const ThemedRow = styled(TableRow)`
  background-color: ${({ theme, $index }) =>
    $index % 2 === 0 ? theme.colors.surface : theme.colors.hover};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: #fff; /* ensure readable */
    cursor: pointer;
  }
`;

// Body Cell
export const ThemedCell = styled(TableCell)`
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
