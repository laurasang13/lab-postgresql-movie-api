const { Router } = require('express')
const {
  listarPeliculas,
  obtenerPelicula,
  crearPelicula,
  // actualizarPelicula, <-- Comenta o borra estas si no están en el controlador
  eliminarPelicula
  // listarResenas,      <-- Comenta o borra estas
  // crearResena        <-- Comenta o borra estas
} = require('../controllers/peliculasController')

const router = Router()

// Rutas de películas (SOLO LAS QUE EXISTEN EN EL CONTROLADOR)
router.get('/', listarPeliculas)
router.get('/:id', obtenerPelicula)
router.post('/', crearPelicula)
// router.put('/:id', actualizarPelicula) // Comentada
router.delete('/:id', eliminarPelicula)

module.exports = router