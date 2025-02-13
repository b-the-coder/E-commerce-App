import React from 'react'

import Usericon from './usericon'
import Searchbox from './searchbox'
import Catalog from './catalog'
import Shoppingcartincon from './shoppingcarticon'

// import styles from '../../styles/navbar.module.css'

export default function Navbar() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 2rem',
                gap: '1.5rem',
            }}
        >
            <div>Home Page</div>
            <div>
                {' '}
                <Catalog />
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                }}
            >
                <Searchbox />
                <Shoppingcartincon />
                <Usericon />
            </div>
        </div>
    )
}
