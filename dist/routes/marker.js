"use strict";
// routes>marker.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const markers_1 = require("../controllers/markers");
const router = (0, express_1.Router)();
// Definir los 5 endpoints
router.get('/', markers_1.getMarkers);
router.get('/:id', markers_1.getMarker);
router.post('/', markers_1.postMarker);
router.patch('/:id', markers_1.putMarker);
router.delete('/:id', markers_1.deleteMarker);
exports.default = router;
//# sourceMappingURL=marker.js.map