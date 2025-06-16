import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardComponente({titulo,descripcion,img,onClick,nivel}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="nada"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {descripcion} - {nivel}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Calificar</Button>
        <Button size="small">Inscribir</Button>
      </CardActions>
    </Card>
  );
}
export default CardComponente;