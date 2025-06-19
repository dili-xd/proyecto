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
import ModalJuegos from './ModalJuegos';

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


function TablaJuegos() {
   const [juegos,setJuegos] = useState([])
   const [recarga,setRecarga] = useState(false)
   const [modalAbrir,setModalAbrir]= useState(false)
   const [juegoEditar,setJuegoEditar] = useState(null)

   function abrirModal(curso) {
    setJuegoEditar(curso)
    setModalAbrir(true)
    }

    function cerrarModal() {
        setJuegoEditar(null)
        setModalAbrir(false)
        setRecarga(!recarga) // Recargar los cursos después de editar uno
    }

   useEffect(()=>{
       async function traeJuegos(){
           const peticion = await getData('apiCursos/juegos')
           setJuegos(peticion)
       }
       traeJuegos()},[recarga])

    async function eliminarJuegos(id) {
        const peticion = await deleteData ('apiCursos/eliminar_juego/',id)
        console.log(peticion)
        setRecarga(!recarga) // Recargar los cursos después de eliminar uno

    }
   

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Titulo Cursos</StyledTableCell>
                            <StyledTableCell align="right">Titulo Juego</StyledTableCell>
                            <StyledTableCell align="right">Descripción Juego</StyledTableCell>
                            <StyledTableCell align="right">Dificultad Juego</StyledTableCell>
                            <StyledTableCell align="right">Editar</StyledTableCell>
                            <StyledTableCell align="right">Eliminar</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {juegos.map((juego) => {
                        return (
                            <StyledTableRow key={juego.id}>
                                <StyledTableCell component="th" scope="row" align='right'>
                                    {juego.nombre}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    {juego.descripcion}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    {juego.dificultad}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='rigth'>
                                    <Button variant='outlined' color='warning' onClick={()=>abrirModal(juego)}>
                                        Editar
                                    </Button>
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    <Button variant='outlined' color='error' onClick={() => eliminarJuegos(juego.id)}>
                                        Eliminar
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
            <ModalJuegos
            abrir={modalAbrir}
            cerrar={cerrarModal}
            juego={juegoEditar}
            />
        </>
    );
}
export default TablaJuegos