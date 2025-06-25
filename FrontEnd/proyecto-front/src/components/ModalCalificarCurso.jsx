import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import CalificarCurso from './CalificarCurso';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { posData } from '../servicios/fetch';
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
function ModalCalificarCurso({ abrir, cerrar, curso }) {
  const [calificacion, setCalificacion] = useState(0)
  const [comentario, setComentario] =useState("");
  
  async function enviarCalificacion() {
    const objCalificacion = {
      curso:curso.id,
      usuario:localStorage.getItem("id_usuario"),
      comentario:comentario,
      calificacion:calificacion
    }
    const peticion = await posData("apiCursos/calificar_curso/", objCalificacion)
    console.log(peticion);
    window.location.reload()
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
           <Input
           placeholder="Ingrese su comentario sobre el curso"
           inputProps={{ 'aria-label': 'description' }}
           fullWidth
           rows={4}
           onChange={(e)=> setComentario(e.target.value)}
           />
           <Stack>
            <Button onClick={()=>{enviarCalificacion()}}>Enviar Calificacion</Button>
           </Stack>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <CalificarCurso calificacion={calificacion} setCalificacion={setCalificacion}/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalCalificarCurso