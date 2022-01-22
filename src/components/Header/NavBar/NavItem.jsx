import React from 'react'

const autoMargin = {margin:'auto'}
export const NavItem = ({item}) => {
    return (
        <>
            <li className="nav-item ">

                <p className="nav-link " style={autoMargin}>{item}</p>

            </li>
        </>
    )
}
