import React from 'react'
import EmployeeForm from './EmployeeForm';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
            margin:theme.spacing(9),
            borderRadius: '5px'     
    },
  }));

export default function Employees() {
   const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
          <EmployeeForm />
          </Paper>
        </div>
    )
}
