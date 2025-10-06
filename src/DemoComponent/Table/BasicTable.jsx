import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import {
  ThemedHeaderCell,
  ThemedRow,
  ThemedCell,
} from "../../theme/TableStyleComponet";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const BasicTable = () => {
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="styled table">
        <TableHead>
          <ThemedRow>
            <ThemedHeaderCell>Dessert (100g serving)</ThemedHeaderCell>
            <ThemedHeaderCell align="right">Calories</ThemedHeaderCell>
            <ThemedHeaderCell align="right">Fat&nbsp;(g)</ThemedHeaderCell>
            <ThemedHeaderCell align="right">Carbs&nbsp;(g)</ThemedHeaderCell>
            <ThemedHeaderCell align="right">Protein&nbsp;(g)</ThemedHeaderCell>
          </ThemedRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <ThemedRow key={row.name} $index={index}>
              <ThemedCell component="th" scope="row">{row.name}</ThemedCell>
              <ThemedCell align="right">{row.calories}</ThemedCell>
              <ThemedCell align="right">{row.fat}</ThemedCell>
              <ThemedCell align="right">{row.carbs}</ThemedCell>
              <ThemedCell align="right">{row.protein}</ThemedCell>
            </ThemedRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
