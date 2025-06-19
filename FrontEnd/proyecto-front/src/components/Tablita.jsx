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


function Tablita() {
    const [usuarios, setUsuarios] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [usuarioEditar, setUsuarioEditar] = useState(null);

    function abrirModal(usuario){
        setUsuarioEditar(usuario)
        setModalOpen(true)
    }
    function cerrarModal(){
        setUsuarioEditar(null)
        setModalOpen(false)
    }




    function estructuraFecha(fecha) {
        const fechaE = new Date(fecha)
        const dia = String(fechaE.getDate()).padStart(2, '0')
        const mes = String(fechaE.getMonth() + 1).padStart(2, '0')
        const anio = fechaE.getFullYear()
        const horas = String(fechaE.getHours()).padStart(2, '0')
        const minutos = String(fechaE.getMinutes()).padStart(2, '0')
        return `${dia}/${mes}/${anio} ${horas}:${minutos}`
    }

    useEffect(() => {
        async function obtenerUsuarios() {
            const peticion = await getData('apiUsuarios/todos_usuarios')
            setUsuarios(peticion)
        }
        obtenerUsuarios()
    }, [])

    async function desactivaUsuario(id) {
        const peticion = await patchData({}, "apiUsuarios/estado_usuario/", id)
        console.log(peticion);
    }


    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Nombre Usuario</StyledTableCell>
                            <StyledTableCell align="right">Correo Usuario</StyledTableCell>
                            <StyledTableCell align="right">Fecha Creación</StyledTableCell>
                            <StyledTableCell align="right">Editar</StyledTableCell>
                            <StyledTableCell align="right">Eliminar</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usuarios.length > 0 ? usuarios.map((usuario) => (
                            <StyledTableRow key={usuario.user_id}>
                                <StyledTableCell component="th" scope="row">
                                    {usuario.username}
                                </StyledTableCell>
                                <StyledTableCell align="right">{usuario.email}</StyledTableCell>
                                <StyledTableCell align="right">{estructuraFecha(usuario.date_joined)}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button variant='outlined' color='danger' onClick={() => abrirModal(usuario)}>Editar</Button>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button variant='outlined' color='warning' onClick={() => {
                                        desactivaUsuario(usuario.user_id)
                                    }}>Eliminar</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        )):<h1>NO HAY USUARIOS</h1>} 
                    </TableBody>
                </Table> 
            </TableContainer>
            <ModalUsuario
            abrir={modalOpen}
            cerrar={cerrarModal}
            usuario={usuarioEditar}
            />
        </>
    );
}
export default Tablita