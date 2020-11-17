import { MenuItem, Select } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react';

const TablePartFooter = () => {
  return (
    <div>
      <Pagination />
      <Select
        variant="outlined"
      >
        <MenuItem value={10}>Show 10</MenuItem>
        <MenuItem value={15}>Show 15</MenuItem>
        <MenuItem value={20}>Show 20</MenuItem>
      </Select>
    </div>
  );
}

export default TablePartFooter;