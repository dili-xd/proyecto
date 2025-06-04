import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import Input from '@mui/material/Input';
import { patchData } from '../servicios/fetch';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalUsuario({abrir,cerrar, usuario}) {
  const [nombreUsuario,setNombreUsuario] = useState('')
  const [correoUsuario,setCorreoUsuario] = useState('')

  useEffect(() => {
    if (usuario) {
     setNombreUsuario(usuario.username)
      setCorreoUsuario(usuario.email)
    }
  },[usuario])

    async function editarUsuario(id) {
        const objUsuario={
            username:nombreUsuario,
            email:correoUsuario
        }
        
        const peticion = await patchData( objUsuario, 'apiUsuarios/editar_usuario/',id)
        console.log(peticion);
    }

  return (
    <div>
      <Modal
        open={abrir}
        onClose={cerrar}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> 
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Input
            onChange={(e) => setNombreUsuario(e.target.value)}
            value={nombreUsuario}
            />
            <Input
            onChange={(e)=> setCorreoUsuario(e.target.value)}
            value={correoUsuario}
            />
            <Button
              variant='outlined'
              color='primary'
               onClick={()=>{
                editarUsuario(usuario.user_id)
                cerrar()}}             
            >editar</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalUsuario