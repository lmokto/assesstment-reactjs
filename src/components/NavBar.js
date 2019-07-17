import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBarOld = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Brastlewark Population
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div>
                        <h2>{this.props.title}</h2>
                    </div>
                </header>
            </div>
        )
    }
}


export default NavBar;