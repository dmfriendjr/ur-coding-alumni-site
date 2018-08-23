import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../urLogo.svg';
import './button.css';
import SimpleMenu from './SimpleMenu';


const styles = {
    root: {
        flexGrow: 1,

    },
    flex: {
        flexGrow: 1,
    },
    color: {
        backgroundColor: '#000066',
        paddingTop: 15,
        paddingBottom: 15,
    }


};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.color}>
                <Toolbar>
                    <img src={Logo} height="100" alt="logo"/>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        {/*holds space in middle to offset hamburger*/}
                    </Typography>
                    <SimpleMenu/>
                </Toolbar>
            </AppBar>
        </div>
    );
}



export default withStyles(styles)(ButtonAppBar);