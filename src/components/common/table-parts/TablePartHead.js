import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
  flexEnd: {
    '& .MuiGrid-item': {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignContent: 'flex-end'
    }
  }
}))

const TablePartHead = () => {
  const classes = useStyles();
  const [exporting, setExporting] = useState(false)

  const handleExportData = () => {
    setExporting(true)
  }

  return (
    <div className={classes.flexEnd}>
      <Grid container className="mui-datatables-head">
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleExportData()}
            disabled={exporting}
            data-cy="export_list"
          >
            {exporting ? 'Exporting...' : 'Export List'}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
 
export default TablePartHead;