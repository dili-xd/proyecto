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
import { getData, patchData } from "../servicios/fetch";
import Button from '@mui/material/Button';
import ModalUsuario from './ModalUsuario';

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


function TablaCursos() {
   const [Cursos,setCursos] = useState([])

   useEffect(()=>{
       async function traerCursos(){
           const peticion = await getData('apiCursos/cursos/')
           setCursos(peticion)
       }
       traerCursos()},[])
   

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Titulo Cursos</StyledTableCell>
                            <StyledTableCell align="right">Descripcion Cursos</StyledTableCell>
                            <StyledTableCell align="right">Fecha Creación</StyledTableCell>
                            <StyledTableCell align="right">Nivel Cursos</StyledTableCell>
                            <StyledTableCell align="right">Editar</StyledTableCell>
                            <StyledTableCell align="right">Eliminar</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <StyledTableRow key={usuario.user_id}/>
                    </TableBody>
                </Table>
            </TableContainer>
            
        </>
    );
}
export default TablaCursos