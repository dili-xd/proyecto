import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/CardComponente.css';
import BotonDesplegable from './BotonDesplegable';
function CardComponente({titulo,descripcion,img,funcionInscribir,nivel,mostrarInscribir,calficar,funcionVerMas }) {
  return (
    <Card sx={{    }} className='card-componente'>
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
      <hr />
      <CardActions>
        <Button size="small" className='btnCalificar' onClick={calficar}>Calificar</Button>
        {mostrarInscribir === false &&
        <Button size="small" className='btnCalificar' onClick={funcionVerMas}>Ver más</Button>
      }
        {mostrarInscribir &&
        <BotonDesplegable inscribir={funcionInscribir} verMas={funcionVerMas}/>
      }
      </CardActions>
    </Card>
  );
}
export default CardComponente;