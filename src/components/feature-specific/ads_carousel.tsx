import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

import carousel1 from '../../../src/asset/sneaker.jpg'
import carousel2 from '../../../src/asset/summercloth.jpg'


interface CarouselItem {
    src: string
    title: string
    description: string
}

const data: CarouselItem[] = [
    {
        src: carousel1,
        title: 'Night view',
        description: '4.21M views',
    },
    {
        src: carousel2,
        title: 'Lake view',
        description: '4.74M views',
    },
    // {
    //     src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    //     title: 'Mountain view',
    //     description: '3.98M views',
    // },
]
interface ItemProps {
    item: CarouselItem
}

export default function Ads_carousel() {
    return (
        <Carousel
        autoPlay={false}
        >
            {data.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    )
}

function Item({ item }: ItemProps) {
    return (
        <Paper // Take height from carousel
            
        >
            <img
                src={item.src}
                alt={item.title}
                style={{
                    width: "400px",
                    height: "400px",
                    objectFit: 'cover',
                  }}
                
            />
            
        </Paper>
    )
}
