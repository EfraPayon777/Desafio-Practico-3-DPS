import request from 'supertest';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import productosRoutes from '../src/routes/productos.routes.js';

const app = express();
app.use(express.json());
app.use('/productos', productosRoutes);

const bearer = (t) => ({ Authorization: `Bearer ${t}` });

describe('Rutas protegidas /productos', () => {
  it('bloquea sin token', async () => {
    const res = await request(app).get('/productos');
    expect(res.status).toBe(401);
  });

  it('bloquea token inválido', async () => {
    const res = await request(app).get('/productos').set(bearer('abc.def.ghi'));
    expect(res.status).toBe(401);
  });
});
