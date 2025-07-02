import { useState, useEffect } from 'react';
import { getData, posData } from '../servicios/fetch';
import CardComponente from './CardComponente';
import ModalCalificarCurso from './ModalCalificarCurso';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function ListaCardsCursos() {
    const [cursos, setCursos] = useState([]);
    const [modalbrir, setModalAbrir] = useState(false);
    const [cursoCalificar, setCursoCalificar] = useState(null);
    const navigate = useNavigate();
    function abrirModal(curso) {
        setModalAbrir(true);
        setCursoCalificar(curso);
    }
    function cerrarModal() {
        setModalAbrir(false);
    }
    async function usuarioInscrito(idCurso) {
        const id_usuario = localStorage.getItem('id_usuario');
        const cursosInscritos = await getData('apiCursos/inscripciones');
        return cursosInscritos.some(
            (inscripcion) =>
                inscripcion.curso === idCurso &&
                inscripcion.usuario === id_usuario
        );
    }
    useEffect(() => {
        async function traerCursos() {
            const peticion = await getData('apiCursos/cursos');
            setCursos(peticion);
        }
        traerCursos();
    }, []);
    async function inscribirCurso(id) {
        const yaInscrito = await usuarioInscrito(id);
        if (!yaInscrito) {
            Swal.fire({
                title: 'ERROR!',
                text: 'Ya te has inscrito a este curso',
                icon: 'warning',
                confirmButtonText: 'OK',
            });
            return;
        }
        const objInscripcion = {
            curso: id,
            usuario: localStorage.getItem('id_usuario'),
        };
        const peticion = await posData('apiCursos/inscripciones/', objInscripcion);
        console.log(peticion);
    }
    function verMasCurso(id) {
        localStorage.setItem('cursoId', id);
        navigate('/curso');
    }
    return (
        <>
            {cursos.map((curso) => {
                return (
                    <CardComponente
                        key={curso.id}
                        titulo={curso.titulo}
                        descripcion={curso.descripcion}
                        nivel={curso.nivel}
                        mostrarInscribir={true}
                        funcionInscribir={() => inscribirCurso(curso.id)}
                        img={curso.img}
                        calficar={() => abrirModal(curso)}
                        funcionVerMas={() => verMasCurso(curso.id)}
                    />
                );
            })}
            <ModalCalificarCurso
                abrir={modalbrir}
                cerrar={cerrarModal}
                curso={cursoCalificar}
            />
        </>
    );
}
export default ListaCardsCursos;