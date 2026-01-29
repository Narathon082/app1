import React from "react";
import { userContext } from './context';

export default function Content() {
    let user = React.useContext(userContext);

    const style = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        padding: '10px',
        margin: '10px'
    }

    return <div style={style}> {user} </div>
}