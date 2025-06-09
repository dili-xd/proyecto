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

function ModalCursos({abrir,cerrar, curso}) {
  const [tituloCurso,setTituloCurso] = useState('')
  const [descripcionCurso,setDescripcioncurso] = useState('')
  const [nivelCurso,setNivelCurso] = useState('')

  useEffect(() => {
    if (curso) {
      setTituloCurso(curso.titulo)
      setDescripcioncurso(curso.descripcion)
      setNivelCurso(curso.nivel)
    }
  },[curso])

    async function editarCurso(id) {
        const objCurso={
            titulo:tituloCurso,
            descripcion: descripcionCurso,
            nivel:nivelCurso 
        }
        
        const peticion = await patchData(objCurso, 'apiCursos/actualizar_curso/',id)
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
            onChange={(e) => setTituloCurso(e.target.value)}
            value={tituloCurso}
            />
            <Input
            onChange={(e)=> setDescripcioncurso(e.target.value)}
            value={descripcionCurso}
            />
            <select onChange={(e)=>setNivelCurso(e.target.value)}>
              <option value={''} disabled selected>Seleccionar Nivel</option>
              <option value={'principiante'}>Principiante</option>
              <option value={'intermeedio'}>Intermedio</option>
              <option value={'avanzado'}>Avanzado</option>
            </select>
            <Button
              variant='outlined'
              color='primary'
               onClick={()=>{
                editarCurso(curso.id)
                cerrar()}}             
            >editar</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalCursos