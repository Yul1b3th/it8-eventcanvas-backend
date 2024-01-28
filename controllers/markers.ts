// controllers>marker.ts

import { Request, Response } from "express";
import Marker from "../models/marker";

// Obtener todos los marker
export const getMarkers = async (req: Request, res: Response) => {

 const markers = await Marker.findAll();


 // res.json({ marker });
 res.json(markers);

 /*  res.json({
  msg: 'getMarkers'
 }) */
}

// Obtener 1 marker
export const getMarker = async (req: Request, res: Response) => {

 const { id } = req.params;

 const marker = await Marker.findByPk(id);

 if (marker) {
  res.json(marker);
 } else {
  res.status(404).json({
   msg: `No existe un marker con el id ${id}`
  });

  /* res.json({
 msg: 'getUsuario',
 id
}) */
 }


}


export const postMarker = async (req: Request, res: Response) => {

 const { body } = req;

 try {
  const marker = Marker.create(body);
  await (await marker).save();
  res.json(await marker)


 } catch (error) {
  console.log(error);
  res.status(500).json({
   msg: 'Hable con el administrador'
  })
 }

}

// actualizar marker
export const putMarker = async (req: Request, res: Response) => {
 const { id } = req.params;
 const { body } = req;

 try {

  const marker = await Marker.findByPk(id);
  if (!marker) {
   return res.status(404).json({
    msg: 'No existe un marker con el id ' + id
   });
  }

  console.log(body);

  await marker.update(body);

  res.json(marker);


 } catch (error) {

  console.log(error);
  res.status(500).json({
   msg: 'Hable con el administrador'
  })
 }
 /*  res.json({
   msg: 'putMarker',
   body,
   id
  }) */
}

// Eliminar un marker
export const deleteMarker = async (req: Request, res: Response) => {

 const { id } = req.params;


 const marker = await Marker.findByPk(id);
 if (!marker) {
  return res.status(404).json({
   msg: 'No existe un marker con el id ' + id
  });
 }

 // Elimnación lógica
 await marker.update({ state: false });

 // Eliminación física
 //await marker.destroy();


 res.json(marker);

 /* res.json({
  msg: 'deleteUsuario',
  id
 }) */
}