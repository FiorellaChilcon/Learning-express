const express = require('express');
const router = express.Router();
const User = require('../database/user-schema');

// Cuando el usuario va a la ruta se le muestra toda la colccion de usuarios
router.get('/', (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.send('que pasoo??');
    }
    return res.json(users);
  });
});
// cuando el cliente haga una peticion post se guardaran los datos en la base de datos
router.post('/', async (req, res) => {
  const userModel = new User(req.body);
  await userModel.save((err) => {
    if (err) return console.log(err);
  });
  res.json(userModel);
});
// mostrar solo el documento solicitado por su id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const doc = await User.findOne({ _id: id });
  res.json(doc);
});
// eliminar documento por su id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const doc = await User.deleteOne({ _id: id });
  res.json({
    message: `doc ${id} deleted`,
    document: doc,
  });
});
// editar documento por su id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const doc = await User.updateOne({ _id: id }, req.body);
  res.json({
    message: `doc ${id} updated`,
    document: doc,
  });
});
module.exports = router;
