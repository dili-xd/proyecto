import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import Input from '@mui/material/Input';
import { patchData } from '../servicios/fetch';
import Select from '@mui/material/Select';
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

function ModalJuegos({abrir,cerrar, juego}) {
  const [nombreJuego,setNombreJuego] = useState('')
  const [descripcionJuego,setDescripcionJuego] = useState('')
  const [dificultadJuego,setDificultadJuego] = useState('')

  useEffect(() => {
    if (juego) {
      setNombreJuego(juego.nombre)
      setDescripcionJuego(juego.descripcion)
      setDificultadJuego(juego.dificultad)
    }
  },[juego])

    async function editarJuego(id) {
        const objJuego={
            titulo:nombreJuego,
            descripcion: descripcionJuego,
            dificultad:dificultadJuego
        }
        
        const peticion = await patchData(objJuego, 'apiCursos/actualizar_juego/',id)
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
            onChange={(e) => setNombreJuego(e.target.value)}
            value={nombreJuego}
            />
            <Input
            onChange={(e)=> setDescripcionJuego(e.target.value)}
            value={descripcionJuego}
            />
            <select onChange={(e)=>setDificultadJuego(e.target.value)}>
              <option value={''} disabled selected>Seleccionar Dificultad</option>
              <option value={'facil'}>Facil</option>
              <option value={'intemedio'}>Intermedio</option>
              <option value={'dificil'}>Dificil</option>
            </select>
            <Button
              variant='outlined'
              color='primary'
               onClick={()=>{
                editarJuego(juego.id)
                cerrar()}}             
            >editar</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalJuegos