import React from 'react'

import { Popover, Typography} from '@mui/material'

interface SubcatalogProps {
    title: string
  }

export default function Subcatalog({title}:SubcatalogProps) : JSX.Element{

    
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    )

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'subcategory-popover' : undefined

    return ( <div  className="">
            <Typography
                aria-owns={id}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ color: open ? 'black' : 'grey' }}
            >
                {title}
            </Typography>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>
                    The content of the Popover.
                </Typography>
            </Popover>
        </div>)
       
            
}
