import React from 'react'

import SearchIcon from '@mui/icons-material/Search'
// import IconButton from '@mui/material/IconButton'
// import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import InputAdornment from '@mui/material/InputAdornment'

export default function Searchbox() {
    // return (<Paper component="form"
    //     sx={{
    //       p: '2px 4px',
    //       display: 'flex',
    //       alignItems: 'center',
    //       height: 25,  // Reduced height
    //       width: 300   // Adjust width as needed
    //     }}>
    //      <IconButton type="button" sx={{  height: 30,  }} aria-label="search">
    //             <SearchIcon />
    //         </IconButton>
    //     <InputBase
    //     sx={{ ml: 1, flex: 1 , height: 30, }}
    //     placeholder="Search"
    //     inputProps={{ 'aria-label': 'search' }}
    //   />

    //         </Paper>

    return (
        <InputBase
            placeholder="Search"
            sx={{
                border: '1px solid #ccc', // Add border for visibility
                borderRadius: '4px',
                padding: '8px 12px',
                width: '200px', // Ensure input has width
                '& .MuiInputBase-input': {
                    padding: '0', // Adjust input padding
                },
            }}
            endAdornment={
                <InputAdornment position="end">
                    <SearchIcon
                        sx={{ color: 'text.secondary', fontSize: '1rem' }}
                    />
                </InputAdornment>
            }
            inputProps={{ 'aria-label': 'search' }}
        />
    )
}
