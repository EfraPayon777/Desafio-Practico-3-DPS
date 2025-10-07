const express = require('express');
const { productos } = require('../data/database');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// GET /api/productos - Listar todos los productos
router.get('/productos', authenticateToken, (req, res) => {
  try {
    res.json({
      productos,
      total: productos.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// GET /api/productos/:id - Obtener producto específico
router.get('/productos/:id', authenticateToken, (req, res) => {
  try {
    const producto = productos.find(p => p.id === req.params.id);
    
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

// PUT /api/productos/:id - Actualizar producto
router.put('/productos/:id', authenticateToken, (req, res) => {
  try {
    const { cantidad, nombre, precio, categoria } = req.body;
    const productoIndex = productos.findIndex(p => p.id === req.params.id);

    if (productoIndex === -1) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Actualizar campos permitidos
    if (cantidad !== undefined) productos[productoIndex].cantidad = cantidad;
    if (nombre) productos[productoIndex].nombre = nombre;
    if (precio) productos[productoIndex].precio = precio;
    if (categoria) productos[productoIndex].categoria = categoria;

    res.json({
      message: 'Producto actualizado exitosamente',
      producto: productos[productoIndex]
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
});

module.exports = router;