import React from 'react'
import styles from '../../styles/catalog.module.css'
import Subcatalog from './subcatalog'

// import { Popover, Typography, Button } from '@mui/material'


export default function Catalog() {
    const subcatalogs = ["Women","Men","Kids","Beauty","Home"]
    

    return (
        <nav>
            <ul
                className={styles.catalog}
                style={{
                    display: 'flex',
                    listStyle: 'none',
                    padding: 0,
                    gap: '1.5rem',
                }}
            >
               {subcatalogs.map((category)=>(
                  <li key = {category}><Subcatalog title = {category}/></li>
               )) }
            </ul>
        </nav>
    )
}
