// controllers>events.ts

import { Request, Response } from "express";
import Event from "../models/event";

// Obtener todos los eventos
export const getEvents = async (req: Request, res: Response) => {
 const events = await Event.findAll();
 res.json(events);
}

// Obtener 1 event
export const getEvent = async (req: Request, res: Response) => {
 const { id } = req.params;
 const event = await Event.findByPk(id);

 if (event) {
  res.json(event);
 } else {
  res.status(404).json({
   msg: `No existe un events con el id ${id}`
  });
 }
}

// Post para crear 1 evento
export const postEvent = async (req: Request, res: Response) => {
 const { body } = req;
 try {
  const event = Event.create(body);
  await (await event).save();
  res.json(await event)
 } catch (error) {
  console.log(error);
  res.status(500).json({
   msg: 'Hable con el administrador'
  })
 }
}

// actualizar event
export const putEvent = async (req: Request, res: Response) => {
 const { id } = req.params;
 const { body } = req;

 try {
  const event = await Event.findByPk(id);
  if (!event) {
   return res.status(404).json({
    msg: 'No existe un events con el id ' + id
   });
  }
  console.log(body);
  await event.update(body);
  res.json(event);
 } catch (error) {
  console.log(error);
  res.status(500).json({
   msg: 'Hable con el administrador'
  })
 }
}

// Eliminar un event
export const deleteEvent = async (req: Request, res: Response) => {

 const { id } = req.params;

 const event = await Event.findByPk(id);
 if (!event) {
  return res.status(404).json({
   msg: 'No existe un events con el id ' + id
  });
 }

 // Elimnación lógica
 await event.update({ state: false });

 // Eliminación física
 //await event.destroy();

 res.json(event);
}