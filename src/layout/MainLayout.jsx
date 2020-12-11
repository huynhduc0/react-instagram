import React from 'react'
import Header from './Header';
function MainLayout(props) {
    return (
        <React.Fragment>
            <Header>
                {props.children}
                <h1>Footer</h1>
            </Header>
        </React.Fragment>
    )
}

export default MainLayout
