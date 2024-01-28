"use strict";
// controllers>marker.ts
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
exports.deleteMarker = exports.putMarker = exports.postMarker = exports.getMarker = exports.getMarkers = void 0;
const marker_1 = __importDefault(require("../models/marker"));
// Obtener todos los marker
const getMarkers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const markers = yield marker_1.default.findAll();
    // res.json({ marker });
    res.json(markers);
    /*  res.json({
     msg: 'getMarkers'
    }) */
});
exports.getMarkers = getMarkers;
// Obtener 1 marker
const getMarker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const marker = yield marker_1.default.findByPk(id);
    if (marker) {
        res.json(marker);
    }
    else {
        res.status(404).json({
            msg: `No existe un marker con el id ${id}`
        });
        /* res.json({
       msg: 'getUsuario',
       id
      }) */
    }
});
exports.getMarker = getMarker;
const postMarker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const marker = marker_1.default.create(body);
        yield (yield marker).save();
        res.json(yield marker);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postMarker = postMarker;
// actualizar marker
const putMarker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const marker = yield marker_1.default.findByPk(id);
        if (!marker) {
            return res.status(404).json({
                msg: 'No existe un marker con el id ' + id
            });
        }
        console.log(body);
        yield marker.update(body);
        res.json(marker);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
    /*  res.json({
      msg: 'putMarker',
      body,
      id
     }) */
});
exports.putMarker = putMarker;
// Eliminar un marker
const deleteMarker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const marker = yield marker_1.default.findByPk(id);
    if (!marker) {
        return res.status(404).json({
            msg: 'No existe un marker con el id ' + id
        });
    }
    // Elimnación lógica
    yield marker.update({ state: false });
    // Eliminación física
    //await marker.destroy();
    res.json(marker);
    /* res.json({
     msg: 'deleteUsuario',
     id
    }) */
});
exports.deleteMarker = deleteMarker;
//# sourceMappingURL=markers.js.map