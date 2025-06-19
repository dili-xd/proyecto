import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import { getData, patchData,deleteData } from "../servicios/fetch";
import Button from '@mui/material/Button';
import ModalNoticias from './ModalNoticias';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function TablaNoticias() {
   const [Noticias,setNoticias] = useState([])
   const [recarga,setRecarga] = useState(false)
   const [modalAbrir,setModalAbrir]= useState(false)
   const [noticiaEditar,setNoticiaEditar] = useState(null)

   function abrirModal(curso) {
    setNoticiaEditar(curso)
    setModalAbrir(true)
    }

    function cerrarModal() {
        setNoticiaEditar(null)
        setModalAbrir(false)
        setRecarga(!recarga) // Recargar los cursos después de editar uno
    }

   useEffect(()=>{
       async function traerNoticias(){
           const peticion = await getData('apiNoticias/noticias')
           setNoticias(peticion)
       }
       traerNoticias()},[recarga])

    async function eliminarNoticia(id) {
        const peticion = await deleteData ('apiNoticias/eliminar_noticia/',id)
        console.log(peticion)
        setRecarga(! recarga) // Recargar los cursos después de eliminar uno

    }
   
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Titulo Noticias</StyledTableCell>
                            <StyledTableCell align="right">Contenido Noticias</StyledTableCell>
                            <StyledTableCell align="right">Fecha Publicación</StyledTableCell>
                            <StyledTableCell align="right">Usuario Publicación</StyledTableCell>
                            <StyledTableCell align="right">Editar</StyledTableCell>
                            <StyledTableCell align="right">Eliminar</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {Noticias.map((noticias) => {
                        return (
                            <StyledTableRow key={noticias.id}>
                                <StyledTableCell component="th" scope="row" align='left'>
                                    {noticias.titulo}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    {noticias.contenido}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    {noticias.fecha_poblicacion}
                                </StyledTableCell>

                                
                                <StyledTableCell component="th" scope="row" align='right'>
                                    {noticias.usuario_nombre}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='rigth'>
                                    <Button variant='outlined' color='warning' onClick={()=>abrirModal(noticias)}>
                                        Editar
                                    </Button>
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    <Button variant='outlined' color='error' onClick={() => eliminarNoticia(noticias.id)}>
                                        Eliminar
                                    </Button>
                                </StyledTableCell>
                                


                            </StyledTableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <ModalNoticias
            abrir={modalAbrir}
            cerrar={cerrarModal}
            noticia={noticiaEditar}
            />
        </>
    );
}
export default TablaNoticias