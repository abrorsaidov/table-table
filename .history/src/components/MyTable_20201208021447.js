import React, { useMemo } from "react";
import { connect } from "react-redux";

import { addRow, removeLast } from "../redux";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyTable = (props) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => props.rows, []);
  // return console.log(data);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="myTable">
      <Table striped bordered hover className={""} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button onClick={() => props.removeLast}>remove the last</Button>
    </div>
  );
};

const state2Props = (state) => {
  return {
    rows: state.rows,
  };
};

const dispatch2Props = (dispatch) => {
  return {
    removeLast: () => dispatch(removeLast()),
    addRow: () => dispatch(addRow()),
  };
};

export default connect(state2Props, dispatch2Props)(MyTable);
