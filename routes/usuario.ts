// routes>usuario.ts

import { Router } from 'express';

import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuarios';

const router = Router();

// Definir los 5 endpoints
router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.patch('/:id', putUsuario);
router.delete('/:id', deleteUsuario);

export default router; 