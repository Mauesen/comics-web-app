import React from 'react'


export const NavItem = ({item}) => {
    return (
        <>
            <li className="nav-item ">

                <p className="nav-link m-auto" >{item}</p>

            </li>
        </>
    )
}
