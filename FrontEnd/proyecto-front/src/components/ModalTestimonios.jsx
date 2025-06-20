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

function ModalTestimonios({abrir,cerrar, testimonio}) {
  const [contenidoTestimonio,setContenidoTestimonio] = useState('')

  useEffect(() => {
    if (testimonio) {
      setContenidoTestimonio(testimonio.contenido)
    }
  },[testimonio])

    async function editarTestimonio(id) {
        const objTestimonio={
            contenido:contenidoTestimonio,
        }
        
        const peticion = await patchData(objTestimonio, 'apiTestimonio/actualizar_testimonio/',id)
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
            onChange={(e) => setContenidoTestimonio(e.target.value)}
            value={contenidoTestimonio}
            />
    
            <Button
              variant='outlined'
              color='primary'
               onClick={()=>{
                editarTestimonio(testimonio.id)
                cerrar()}}             
            >editar</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalTestimonios