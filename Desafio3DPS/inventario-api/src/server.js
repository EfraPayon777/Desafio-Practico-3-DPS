import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import authRoutes from './routes/auth.routes.js';
import productosRoutes from './routes/productos.routes.js';

const app = express();
app.use(express.json());

// Rutas
app.use('/login', authRoutes);
app.use('/productos', productosRoutes);

// Salud del servicio
app.get('/health', (_, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API Inventario escuchando en http://localhost:${PORT}`);
});
