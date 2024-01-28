"use strict";
// controllers>events.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.putEvent = exports.postEvent = exports.getEvent = exports.getEvents = void 0;
const event_1 = __importDefault(require("../models/event"));
// Obtener todos los eventos
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const events = yield event_1.default.findAll();
    res.json(events);
});
exports.getEvents = getEvents;
// Obtener 1 event
const getEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const event = yield event_1.default.findByPk(id);
    if (event) {
        res.json(event);
    }
    else {
        res.status(404).json({
            msg: `No existe un events con el id ${id}`
        });
    }
});
exports.getEvent = getEvent;
// Post para crear 1 evento
const postEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const event = event_1.default.create(body);
        yield (yield event).save();
        res.json(yield event);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postEvent = postEvent;
// actualizar event
const putEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const event = yield event_1.default.findByPk(id);
        if (!event) {
            return res.status(404).json({
                msg: 'No existe un events con el id ' + id
            });
        }
        console.log(body);
        yield event.update(body);
        res.json(event);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putEvent = putEvent;
// Eliminar un event
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const event = yield event_1.default.findByPk(id);
    if (!event) {
        return res.status(404).json({
            msg: 'No existe un events con el id ' + id
        });
    }
    // Elimnación lógica
    yield event.update({ state: false });
    // Eliminación física
    //await event.destroy();
    res.json(event);
});
exports.deleteEvent = deleteEvent;
//# sourceMappingURL=events.js.map