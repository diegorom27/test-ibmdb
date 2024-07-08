// app.js
import express from 'express';
import {indexRouter} from './routes/index.js';
import morgan from "morgan"

const app = express();

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware para registro de solicitudes HTTP con morgan en modo dev
app.use(morgan('dev'));

// Middleware para parsear datos de formulario
app.use(express.urlencoded({ extended: false }));

// Ruta principal
app.use('/', indexRouter);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});