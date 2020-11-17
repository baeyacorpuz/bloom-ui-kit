import MUIDataTable from 'mui-datatables';
import React from 'react';
import TablePartHead from '../../common/table-parts/TablePartHead';

const Table = () => {
  const columns = ["Name", "Company", "City", "State"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: 'dropdown',
    selectableRows: false,
    jsonMode: true,
    searchOpen: false,
    searchPlaceholder: 'Search...',
    responsive: 'vertical',
    search: false,
    pagination: false,
    print: false,
    download: false,
    viewColumns: false,
    filter: false,
  };

  return (
    <>
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
}

export default Table;