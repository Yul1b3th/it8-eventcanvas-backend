// controllers>sales.ts

import { Request, Response } from "express";
import Sale from "../models/sale";

// Obtener todos los sales
export const getSales = async (req: Request, res: Response) => {
 const sales = await Sale.findAll();
 res.json(sales);
}

// Obtener 1 sale
export const getSale = async (req: Request, res: Response) => {
 const { id } = req.params;
 const sale = await Sale.findByPk(id);

 if (sale) {
  res.json(sale);
 } else {
  res.status(404).json({
   msg: `No existe un sales con el id ${id}`
  });
 }
}

// Post para crear 1 sale
export const postSale = async (req: Request, res: Response) => {
 const { body } = req;
 try {
  const sale = Sale.create(body);
  await (await sale).save();
  res.json(await sale)
 } catch (error) {
  console.log(error);
  res.status(500).json({
   msg: 'Hable con el administrador'
  })
 }
}

// actualizar sale
export const putSale = async (req: Request, res: Response) => {
 const { id } = req.params;
 const { body } = req;

 try {
  const sale = await Sale.findByPk(id);
  if (!sale) {
   return res.status(404).json({
    msg: 'No existe un sales con el id ' + id
   });
  }
  console.log(body);
  await sale.update(body);
  res.json(sale);
 } catch (error) {
  console.log(error);
  res.status(500).json({
   msg: 'Hable con el administrador'
  })
 }
}

// Eliminar un sale
export const deleteSale = async (req: Request, res: Response) => {

 const { id } = req.params;

 const sale = await Sale.findByPk(id);
 if (!sale) {
  return res.status(404).json({
   msg: 'No existe un sales con el id ' + id
  });
 }

 // Elimnación lógica
 await sale.update({ state: false });

 // Eliminación física
 //await sale.destroy();

 res.json(sale);
}