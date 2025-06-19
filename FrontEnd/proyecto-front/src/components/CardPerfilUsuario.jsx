import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import { useState } from 'react';   
import { getData } from '../servicios/fetch';
import { useEffect } from 'react';
function CardPerfilUsuario() {
    const [inputEditar,setInputEditar]=useState(false)
    const[userInfo,setUserInfo]=useState([])
    //Lógica para manejar la información del usuario
    //UseEffect para traer la información del usuario al cargar el componente
    useEffect(()=>{
    async function traerUsuario() {
       const peticion = await getData('apiUsuarios/perfil_usuario',localStorage.getItem('id_usuario')+'/');
       console.log(peticion);
       setUserInfo(peticion); 
     }
     traerUsuario()
    },[])

    return (
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
        '--icon-size': '100px',
      }}
    >
      <CardOverflow variant="solid" color="warning">
        <AspectRatio
          variant="outlined"
          color="warning"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
          <div>
            <BakeryDiningIcon color="warning" sx={{ fontSize: '4rem' }} />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
          {userInfo.username ? userInfo.username : 'NOMBRE DE USUARIO'}
      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
       {userInfo.email ? userInfo.email : 'CORREO ELECTRÓNICO'}
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
          '--Button-radius': '40px',
          width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
        }}
      > {inputEditar&& (
        <Box>
            <Input type="file" placeholder="Imagen Perfil" />
            <Input type="text" placeholder="Nombre Usuario" />
            <Input type="email" placeholder="Correo Usuario" />
            <Input type='password' placeholder="Contraseña Usuario" />
            <Button>Confirmar Cambios </Button>
        </Box>
         )}
        <Button variant="plain" color="neutral" onClick={()=>setInputEditar(!inputEditar)}>
          Editar Perfil
        </Button>
      </CardActions>
    </Card>
  );
}
export default CardPerfilUsuario;
