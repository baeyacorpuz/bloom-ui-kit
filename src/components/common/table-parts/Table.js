import MUIDataTable from 'mui-datatables';
import React from 'react';

const Table = ({ options, data, columns }) => {
  return (
    <>
      {/* <TablePartHead /> */}
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
}

export default Table;