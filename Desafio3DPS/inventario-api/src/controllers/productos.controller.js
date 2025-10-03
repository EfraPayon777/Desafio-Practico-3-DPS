import { getAll, getById, updateStock } from '../services/productos.service.js';

export async function listar(req, res) {
  const productos = await getAll();
  res.json(productos);
}

export async function obtener(req, res) {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

  const prod = await getById(id);
  if (!prod) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(prod);
}

export async function actualizar(req, res) {
  const id = Number(req.params.id);
  const { stock } = req.body;

  if (Number.isNaN(id) || typeof stock !== 'number')
    return res.status(400).json({ error: 'Datos inválidos' });

  const actualizado = await updateStock(id, stock);
  if (!actualizado) return res.status(404).json({ error: 'Producto no encontrado' });

  res.json({ ok: true, id, stock });
}
