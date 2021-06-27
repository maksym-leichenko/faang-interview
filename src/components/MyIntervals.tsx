import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import api from '@/api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface IRow {
  id: number;
  dateFrom: string;
  dateTo: string;
  isPublic: string;
  mocksCount: number;
  mockTypes: string;
  notes: string;
}

const dateOptions: { [key: string]: any } = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
}

export default function MyIntervals() {
  const classes = useStyles();
  const [rows, setRows] = useState<IRow[]>([]);

  useEffect(() => {
    api.interval.list().then((result) => {
      const arr = result.map((interval: { [key: string]: any }) => ({
        ...interval,
        mockTypes: interval.mockTypes.map(({ type }: { type: string }) => type).join(', '),
      }));
      setRows(arr);
    });

  }, []);

  const removeHandler = (id: number) => {
    api.interval.remove(id).then(() => {
      setRows(arr => arr.filter((item) => item.id !== id));
    });
  };

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell align="right">To</TableCell>
            <TableCell align="right">Count mocks</TableCell>
            <TableCell align="right">Can be Public</TableCell>
            <TableCell align="right">Types</TableCell>
            <TableCell align="right">Notes</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {new Date(row.dateFrom).toLocaleString('en-US', dateOptions)}
              </TableCell>
              <TableCell align="right">
                {new Date(row.dateTo).toLocaleString('en-US', dateOptions)}
              </TableCell>
              <TableCell align="right">{row.mocksCount}</TableCell>
              <TableCell align="right">{row.isPublic}</TableCell>
              <TableCell align="right">{row.mockTypes}</TableCell>
              <TableCell align="right">{row.notes}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" onClick={() => removeHandler(row.id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
