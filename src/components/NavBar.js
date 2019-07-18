import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div>
                        <h2 className='title-navbar'>{this.props.title}</h2>
                    </div>
                </header>
            </div>
        )
    }
}


export default NavBar;