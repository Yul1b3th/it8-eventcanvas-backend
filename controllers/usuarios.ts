// controllers>usuarios.ts

import { Request, Response } from "express";
import Usuario from "../models/usuario";

// Obtener todos los usuarios
export const getUsuarios = async (req: Request, res: Response) => {

 const usuarios = await Usuario.findAll();


 // res.json({ usuarios });
 res.json(usuarios);

 /*  res.json({
  msg: 'getUsuarios'
 }) */
}

// Obtener 1 usuario
export const getUsuario = async (req: Request, res: Response) => {

 const { id } = req.params;

 const usuario = await Usuario.findByPk(id);

 if (usuario) {
  res.json(usuario);
 } else {
  res.status(404).json({
   msg: `No existe un usuario con el id ${id}`
  });

  /* res.json({
 msg: 'getUsuario',
 id
}) */
 }


}

// Post para crear 1 usuario
export const postUsuario = async (req: Request, res: Response) => {

 const { body } = req;

 try {

  const existeEmail = await Usuario.findOne({
   where: {
    email: body.email
   }
  });

  if (existeEmail) {
   return res.status(400).json({
    msg: 'Ya existe un usuario con el email ' + body.email
   });
  }


  //https://www.udemy.com/course/node-de-cero-a-experto/learn/lecture/24960742#questions/15764420
  /* const usuario = new Usuario(body);
  await usuario.save();
  res.json(usuario); */

  const usuario = Usuario.create(body);
  await (await usuario).save();
  res.json(await usuario)


 } catch (error) {

  console.log(error);
  res.status(500).json({
   msg: 'Hable con el administrador'
  })
 }



}

// actualizar usuario
export const putUsuario = async (req: Request, res: Response) => {

 const { id } = req.params;
 const { body } = req;

 try {

  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
   return res.status(404).json({
    msg: 'No existe un usuario con el id ' + id
   });
  }

  console.log(body);


  await usuario.update(body);

  res.json(usuario);


 } catch (error) {

  console.log(error);
  res.status(500).json({
   msg: 'Hable con el administrador'
  })
 }
 /*  res.json({
   msg: 'putUsuario',
   body,
   id
  }) */
}

// Eliminar un usuario
export const deleteUsuario = async (req: Request, res: Response) => {

 const { id } = req.params;


 const usuario = await Usuario.findByPk(id);
 if (!usuario) {
  return res.status(404).json({
   msg: 'No existe un usuario con el id ' + id
  });
 }

 // Elimnación lógica
 await usuario.update({ state: false });

 // Eliminación física
 //await usuario.destroy();


 res.json(usuario);

 /* res.json({
  msg: 'deleteUsuario',
  id
 }) */
}