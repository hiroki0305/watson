import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}))
export const Header = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <QuestionAnswerIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            MyGoo
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
