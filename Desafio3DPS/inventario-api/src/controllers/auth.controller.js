import jwt from 'jsonwebtoken';
import { pool } from '../db.js';
import { comparePassword } from '../utils/password.js';

export async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: 'username y password son requeridos' });

  const [rows] = await pool.query('SELECT * FROM usuarios WHERE username=?', [username]);
  const user = rows[0];
  if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

  const ok = await comparePassword(password, user.password_hash);
  if (!ok) return res.status(401).json({ error: 'Credenciales inválidas' });

  const payload = { id: user.id, username: user.username, nombre: user.nombre };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '1d' });

  res.json({ token, user: payload });
}
