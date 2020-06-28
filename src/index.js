const express = require('express');
const port = require('./config');
const routes = require('./routes');
const database = require('./database/database');
const app = express();

// se conecta a la base de datos
database();
// para que pueda leer la url y los formatos json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// responde con un "hello world" cuando se hace un GET request al inicio
app.get('/', function(req, res) {
  res.send('hello world');
});

// se utilizan las rutas
app.use('/api/userModel', routes);

// se escucha el puerto
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
