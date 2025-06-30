import * as React from 'react';
import { useState, useEffect } from 'react';
import { getData, patchData } from '../servicios/fetch';
import { Button, Typography, Box, Input, Avatar, Stack } from '@mui/joy';
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
    return respuesta.secure_url;
  }
  async function actualizarPerfil() {
    let urlImagen = '';
    if (imgPerfil) {
      urlImagen = await subirImagen(imgPerfil);
    }
    const objUsuario = {
      username: nombreUsuario,
      email: correoUsuario,
      img: urlImagen || userInfo.img
    };
    await patchData(objUsuario, 'apiUsuarios/editar_usuario/', localStorage.getItem('id_usuario'));
    setRecarga(!recarga);
    setInputEditar(false);
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
    <Box
      sx={{
        width: '100%',
        px: 2,
        py: 3,
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        borderTop: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
      }}
    >
      {/* Contenido principal horizontal */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Avatar
          src={userInfo.img}
          alt="Perfil"
          sx={{ width: 100, height: 100 }}
        />
        <Box>
          <Typography level="title-md">
            {userInfo.username || 'NOMBRE DE USUARIO'}
          </Typography>
          <Typography level="body-sm" color="neutral">
            {userInfo.email || 'CORREO ELECTRÓNICO'}
          </Typography>
        </Box>
      </Box>
      {/* Inputs si se edita */}
      {inputEditar && (
        <Box sx={{ mt: 2, width: '100%' }}>
          <Stack spacing={1}>
            <Input
              type="text"
              placeholder="Nombre Usuario"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              fullWidth
            />
            <Input
              type="email"
              placeholder="Correo Usuario"
              value={correoUsuario}
              onChange={(e) => setCorreoUsuario(e.target.value)}
              fullWidth
            />
            <Input
              type='file'
              onChange={(e) => setImgPerfil(e.target.files[0])}
              fullWidth
            />
            <Button onClick={actualizarPerfil} fullWidth>
              Confirmar Cambios
            </Button>
          </Stack>
        </Box>
      )}
      {/* Botón editar */}
      <Button
        variant="soft"
        color="neutral"
        sx={{ mt: 2 }}
        onClick={() => setInputEditar(!inputEditar)}
        fullWidth
      >
        {inputEditar ? 'Cancelar' : 'Editar Perfil'}
      </Button>
    </Box>
  );
}
export default CardPerfilUsuario;