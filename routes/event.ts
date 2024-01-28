// routes>event.ts

import { Router } from 'express';

import { getEvents, getEvent, postEvent, putEvent, deleteEvent } from '../controllers/events';

const router = Router();

// Definir los 5 endpoints
router.get('/', getEvents);
router.get('/:id', getEvent);
router.post('/', postEvent);
router.patch('/:id', putEvent);
router.delete('/:id', deleteEvent);

export default router; 