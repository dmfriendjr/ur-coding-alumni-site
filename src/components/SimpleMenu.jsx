import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom";

const styles = {
    menu: {
        color: 'white',
    }
};


class SimpleMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <IconButton
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}>
                        <MenuIcon style={styles.menu} />
                </IconButton>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem component={Link} to="/" onClick={this.handleClose}>Home</MenuItem>
                    <MenuItem component={Link} to="/login" onClick={this.handleClose}>Login</MenuItem>
                    <MenuItem component={Link} to="/signup" onClick={this.handleClose}>Signup</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(SimpleMenu);