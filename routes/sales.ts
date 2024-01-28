// routes>sales.ts

import { Router } from 'express';

import { getSales, getSale, postSale, putSale, deleteSale } from '../controllers/sales';

const router = Router();

// Definir los 5 endpoints
router.get('/', getSales);
router.get('/:id', getSale);
router.post('/', postSale);
router.patch('/:id', putSale);
router.delete('/:id', deleteSale);

export default router; 