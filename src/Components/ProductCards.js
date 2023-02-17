import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard({ product, addToCart }) {
  const { name, imageUrl, price } = product;
  return (
    <Card
      style={{
        width: 150,
        height: 350,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia sx={{ height: 140 }} image={imageUrl} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h8" component="div">
          {name}
        </Typography>
        <Typography component="span" variant="body2" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Link to={`/products/${product.id}`}>
          <Button variant="contained" size="small">
            Detail
          </Button>
        </Link>
        <Button
          variant="contained"
          size="small"
          onClick={() => addToCart(product, 1)}
        >
          add
        </Button>
      </CardActions>
    </Card>
  );
}
