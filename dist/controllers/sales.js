"use strict";
// controllers>sales.ts
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
exports.deleteSale = exports.putSale = exports.postSale = exports.getSale = exports.getSales = void 0;
const sale_1 = __importDefault(require("../models/sale"));
// Obtener todos los sales
const getSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sales = yield sale_1.default.findAll();
    res.json(sales);
});
exports.getSales = getSales;
// Obtener 1 sale
const getSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const sale = yield sale_1.default.findByPk(id);
    if (sale) {
        res.json(sale);
    }
    else {
        res.status(404).json({
            msg: `No existe un sales con el id ${id}`
        });
    }
});
exports.getSale = getSale;
// Post para crear 1 sale
const postSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const sale = sale_1.default.create(body);
        yield (yield sale).save();
        res.json(yield sale);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postSale = postSale;
// actualizar sale
const putSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const sale = yield sale_1.default.findByPk(id);
        if (!sale) {
            return res.status(404).json({
                msg: 'No existe un sales con el id ' + id
            });
        }
        console.log(body);
        yield sale.update(body);
        res.json(sale);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putSale = putSale;
// Eliminar un sale
const deleteSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const sale = yield sale_1.default.findByPk(id);
    if (!sale) {
        return res.status(404).json({
            msg: 'No existe un sales con el id ' + id
        });
    }
    // Elimnación lógica
    yield sale.update({ state: false });
    // Eliminación física
    //await sale.destroy();
    res.json(sale);
});
exports.deleteSale = deleteSale;
//# sourceMappingURL=sales.js.map