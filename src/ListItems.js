import React from 'react'
import './ListItem.css'
// import {FontAwsomeIcon} from '@fortawesome/react-fontawesome';

function ListItem(props){
    const items = props.items;
    console.log(props);
    const ListItems = items.map(item => {
        return <div className="list" key={item.key}>
           <p> {item.text}
                <span>
                    <button className="faicons" onClick={ () => props.deletItem(item.key)}>X</button>
                </span>
            </p>
        </div>
    })
    return(
        <div>{ListItems}</div>
    )
}

export default ListItem;