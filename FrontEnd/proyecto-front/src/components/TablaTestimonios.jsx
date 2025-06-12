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
import ModalTestimonios from './ModalTestimonios';

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


function TablaTestimonios() {
   const [testimonios,setTestimonios] = useState([])
   const [recarga,setRecarga] = useState(false)
   const [modalAbrir,setModalAbrir]= useState(false)
   const [testimonioEditar,setTestimonioEditar] = useState(null)

   function abrirModal(testimonio) {
    setTestimonioEditar(testimonio)
    setModalAbrir(true)
    }

    function cerrarModal() {
        setTestimonioEditar(null)
        setModalAbrir(false)
        setRecarga(!recarga) // Recargar los cursos después de editar uno
    }

   useEffect(()=>{
       async function traerTestimonios(){
           const peticion = await getData('apiTestimonio/testimonio/')
           setTestimonios(peticion)
       }
       traerTestimonios()},[recarga])

    async function eliminarTestimonio(id) {
        const peticion = await deleteData ('apiTestimonio/eliminar_testimonio/',id)
        console.log(peticion)
        setRecarga(!recarga) // Recargar los cursos después de eliminar uno
    }
   
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Contenido</StyledTableCell>
                            <StyledTableCell align="right">Fecha Contenido</StyledTableCell>
                            <StyledTableCell align="right">Nombre del usuario</StyledTableCell>
                            <StyledTableCell align="right">Editar</StyledTableCell>
                            <StyledTableCell align="right">Eliminar</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {testimonios.map((testimonio) => {
                        return (
                            <StyledTableRow key={testimonio.id}>
                                <StyledTableCell component="th" scope="row" align='left'>
                                    {testimonio.contenido}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    {testimonio.fecha}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    {testimonio.usuario_nombre}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='rigth'>
                                    <Button variant='outlined' color='warning' onClick={()=>abrirModal(testimonio)}>
                                        Editar
                                    </Button>
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    <Button variant='outlined' color='error' onClick={() => eliminarTestimonio(testimonio.id)}>
                                        Eliminar
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <ModalTestimonios
            abrir={modalAbrir}
            cerrar={cerrarModal}
            testimonio={testimonioEditar}
            />
        </>
    );
}
export default TablaTestimonios