import React from 'react';
import { Paper, Card, Typography, makeStyles} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import './Pageheader.css';
const useStyles = makeStyles((theme) => ({
    root: {
           margin:theme.spacing(1)
    },
  }));
const Pageheader = (props) =>{
const classes = useStyles();
    return(
      <Paper elevation={1} square className={classes.root}> 
          <div className="pageheader"> 
              <Card className="pageicon"> 
               <PeopleIcon fontSize="large" />
              </Card>
              <div class="pagetitle">
              <Typography variant="h6" component="div">
                    New Employee
                </Typography>
                <Typography variant="subTitle2" component="div">
                    From Design with validation
                </Typography>
              </div>
          </div>
      </Paper>
     


    );

}

export default Pageheader;