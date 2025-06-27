import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
function ComentarioComponente({nombre,calificacion,comentario, eliminarComentario,editarComentario}) {
  const [editando,setEditando] = useState(false)
  const [nuevoComentario,setNuevoComentario] = useState(comentario)
  const [nuevaCalificacion,setNuevaCalificacion] = useState(calificacion)
  function guardarEdicion() {
    editarComentario({
      comentario:nuevoComentario,
      calificacion:nuevaCalificacion
    })
    setEditando(false);
  }
  function cancelarEditar() {
    setNuevoComentario(comentario);
    setNuevaCalificacion(calificacion);
    setEditando(false);
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        {editando ?(
          <ListItemText>
            <input type='text' value={nuevoComentario} onChange={(e)=>setNuevoComentario(e.target.value)}/>
            <input type='number' value={nuevaCalificacion} onChange={(e)=>setNuevaCalificacion(e.target.value)}/>
            </ListItemText>
        ):(
           <ListItemText
          primary={`Calificación ${calificacion}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                {nombre}
              </Typography>
              <Divider variant="inset" component="li"/>
              <br />
              Comentario:{comentario}
            </React.Fragment>
          }
        />
        )}
      </ListItem>
      <Divider variant="inset" component="li" />
      {!editando ?(
        <>
  <ListItem>
        <button onClick={eliminarComentario} className='btn btn-danger'>Eliminar</button>
        <button onClick={()=>setEditando(true)} className='btn btn-warning'>Editar</button>
      </ListItem>
        </>
      ):(
        <>
          <button onClick={guardarEdicion}>Guardar</button>
          <button onClick={cancelarEditar}>Cerrar</button>
        </>
      )}
    </List>
  );
}
export default ComentarioComponente