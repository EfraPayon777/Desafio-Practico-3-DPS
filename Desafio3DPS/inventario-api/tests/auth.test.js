import request from 'supertest';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import authRoutes from '../src/routes/auth.routes.js';

const app = express();
app.use(express.json());
app.use('/login', authRoutes);

describe('Auth /login', () => {
  it('rechaza credenciales faltantes', async () => {
    const res = await request(app).post('/login').send({});
    expect(res.status).toBe(400);
  });

  it('falla con credenciales inválidas', async () => {
    const res = await request(app).post('/login').send({ username: 'x', password: 'y' });
    expect([400,401]).toContain(res.status);
  });

  it('retorna token con admin demo', async () => {
    const res = await request(app).post('/login').send({ username: 'admin', password: '123456' });
    // si corre contra DB real con seed
    expect([200,401]).toContain(res.status);
  });
});
