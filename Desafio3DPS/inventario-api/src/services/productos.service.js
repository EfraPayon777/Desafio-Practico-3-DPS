import { pool } from '../db.js';

export async function getAll() {
  const [rows] = await pool.query('SELECT id, nombre, stock FROM productos ORDER BY id');
  return rows;
}

export async function getById(id) {
  const [rows] = await pool.query('SELECT id, nombre, stock FROM productos WHERE id=?', [id]);
  return rows[0] || null;
}

export async function updateStock(id, stock) {
  const [res] = await pool.query('UPDATE productos SET stock=? WHERE id=?', [stock, id]);
  return res.affectedRows > 0;
}
