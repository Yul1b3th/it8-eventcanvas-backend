"use strict";
// routes>sales.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sales_1 = require("../controllers/sales");
const router = (0, express_1.Router)();
// Definir los 5 endpoints
router.get('/', sales_1.getSales);
router.get('/:id', sales_1.getSale);
router.post('/', sales_1.postSale);
router.patch('/:id', sales_1.putSale);
router.delete('/:id', sales_1.deleteSale);
exports.default = router;
//# sourceMappingURL=sales.js.map