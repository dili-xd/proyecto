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

function ModalNoticias({abrir,cerrar, noticia}) {
  const [tituloNoticia,setTituloNoticia] = useState('')
  const [descripcionNoticia,setContenidoNoticia] = useState('')
 

  useEffect(() => {
    if (noticia) {
      setTituloNoticia(noticia.titulo)
      setContenidoNoticia(noticia.contenido)
     
    }
  },[noticia])

    async function editarNoticia(id) {
        const objNoticia={
            titulo:tituloNoticia,
            contenido: descripcionNoticia 
        }
        
        const peticion = await patchData(objNoticia, 'apiNoticias/actualizar_noticia/',id)
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
            onChange={(e) => setTituloNoticia(e.target.value)}
            value={tituloNoticia}
            />
            <Input
            onChange={(e)=> setContenidoNoticia(e.target.value)}
            value={descripcionNoticia}
            />
            <Button
              variant='outlined'
              color='primary'
               onClick={()=>{
                editarNoticia(noticia.id)
                cerrar()}}             
            >editar</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalNoticias