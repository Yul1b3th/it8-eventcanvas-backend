// routes>marker.ts

import { Router } from 'express';

import { deleteMarker, getMarker, getMarkers, postMarker, putMarker } from '../controllers/markers';

const router = Router();

// Definir los 5 endpoints
router.get('/', getMarkers);
router.get('/:id', getMarker);
router.post('/', postMarker);
router.patch('/:id', putMarker);
router.delete('/:id', deleteMarker);

export default router; 