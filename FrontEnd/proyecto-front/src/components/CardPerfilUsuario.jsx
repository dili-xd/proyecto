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
import { useState, useEffect } from 'react';
import { getData, patchData } from '../servicios/fetch';

function CardPerfilUsuario() {
  const [inputEditar, setInputEditar] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correoUsuario, setCorreoUsuario] = useState('');
  const [imgPerfil, setImgPerfil] = useState(null);
  const [recarga, setRecarga] = useState(false);

  async function subirImagen(archivo) {
    const data = new FormData();
    data.append('file', archivo);
    data.append('upload_preset', 'preset_imagen');
    data.append('cloud_name', 'dc0pcnlmc');

    const peticion = await fetch('https://api.cloudinary.com/v1_1/dc0pcnlmc/image/upload', {
      method: 'POST',
      body: data
    });
    const respuesta = await peticion.json();
    const urlImagen = respuesta.secure_url;
    return urlImagen;
  }

  async function actualizarPerfil() {
    let urlImagen = '';
    if (imgPerfil) {
      urlImagen = await subirImagen(imgPerfil);
    }
    const objUsuario = {
      username: nombreUsuario,
      email: correoUsuario,
      img: urlImagen
    };
    const peticion = await patchData(objUsuario, 'apiUsuarios/editar_usuario/', localStorage.getItem('id_usuario'));
    setRecarga(!recarga);
    setInputEditar(false);
    console.log(peticion);
  }

  useEffect(() => {
    async function traerUsuario() {
      const peticion = await getData('apiUsuarios/perfil_usuario', localStorage.getItem('id_usuario') + '/');
      setUserInfo(peticion);
      setNombreUsuario(peticion.username || '');
      setCorreoUsuario(peticion.email || '');
    }
    traerUsuario();
  }, [recarga]);

  return (
    <Card
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        overflow: 'auto',
        '--icon-size': '100px',
      }}
    >
      <CardOverflow variant="solid" color="warning">
        {userInfo.img ? (
          <img
            src={userInfo.img}
            alt="Perfil"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        ) : (
          <BakeryDiningIcon color="warning" sx={{ fontSize: "4rem" }} />
        )}
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
      >
        {inputEditar && (
          <Box>
            <Input
              type="text"
              placeholder="Nombre Usuario"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Correo Usuario"
              value={correoUsuario}
              onChange={(e) => setCorreoUsuario(e.target.value)}
            />
            <Input
              type='file'
              onChange={(e) => setImgPerfil(e.target.files[0])}
            />
            <Button onClick={()=>{
              actualizarPerfil()
            }}>Confirmar Cambios</Button>
          </Box>
        )}
        <Button variant="plain" color="neutral" onClick={() => {setInputEditar(!inputEditar)}}>
          Editar Perfil
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardPerfilUsuario;
