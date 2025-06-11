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
import ModalUsuario from './ModalUsuario';
import ModalCursos from './ModalCursos';

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
   const [recarga,setRecarga] = useState(false)
   const [modalAbrir,setModalAbrir]= useState(false)
   const [cursoEditar,setCursoEditar] = useState(null)

   function abrirModal(curso) {
    setCursoEditar(curso)
    setModalAbrir(true)
    }

    function cerrarModal() {
        setCursoEditar(null)
        setModalAbrir(false)
        setRecarga(!recarga) // Recargar los cursos después de editar uno
    }

   useEffect(()=>{
       async function traerCursos(){
           const peticion = await getData('apiCursos/cursos/')
           setCursos(peticion)
       }
       traerCursos()},[recarga])

    async function eliminarCurso(id) {
        const peticion = await deleteData ('apiCursos/eliminar_curso/',id)
        console.log(peticion)
        setRecarga(! recarga) // Recargar los cursos después de eliminar uno

    }
   

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
                    {Cursos.map((curso) => {
                        return (
                            <StyledTableRow key={curso.id}>
                                <StyledTableCell component="th" scope="row" align='left'>
                                    {curso.titulo}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    {curso.descripcion}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    {curso.nivel}
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='rigth'>
                                    <Button variant='outlined' color='warning' onClick={()=>abrirModal(curso)}>
                                        Editar
                                    </Button>
                                </StyledTableCell>

                                <StyledTableCell component="th" scope="row" align='right'>
                                    <Button variant='outlined' color='error' onClick={() => eliminarCurso(curso.id)}>
                                        Eliminar
                                    </Button>
                                </StyledTableCell>
                                


                            </StyledTableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <ModalCursos
            abrir={modalAbrir}
            cerrar={cerrarModal}
            curso={cursoEditar}
            />
        </>
    );
}
export default TablaCursos