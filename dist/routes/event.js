"use strict";
// routes>event.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const events_1 = require("../controllers/events");
const router = (0, express_1.Router)();
// Definir los 5 endpoints
router.get('/', events_1.getEvents);
router.get('/:id', events_1.getEvent);
router.post('/', events_1.postEvent);
router.patch('/:id', events_1.putEvent);
router.delete('/:id', events_1.deleteEvent);
exports.default = router;
//# sourceMappingURL=event.js.map