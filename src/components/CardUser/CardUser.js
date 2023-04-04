import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

import img from "./user.jpg";

const CardUser = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={img}
                    alt="book"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.mail}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardUser