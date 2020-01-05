import React from 'react';
import Bux from '../../hoc/Bux'
import classes from './Layout.module.css'
const Layout = (props) => (
    <Bux>
        <div>
            ToolBar , SideBar , Backdrop
        </div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Bux>
)
export default Layout;