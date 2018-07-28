import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
});

function PaperSheet(props) {
  const { classes,text,headline } = props;

  
    return (
        <div>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              {headline}
            </Typography>
            <Typography component="p">
              {text}
            </Typography>
          </Paper>
        </div>
      );


 
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);