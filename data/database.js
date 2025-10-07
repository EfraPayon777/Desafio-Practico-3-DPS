// Datos de usuarios (en producción usar base de datos)
const usuarios = [
  {
    id: 1,
    username: 'admin',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi' // password
  }
];

// Datos de productos
let productos = [
  {
    id: 'PROD-001',
    nombre: 'Laptop Dell XPS 13',
    cantidad: 15,
    precio: 1200,
    categoria: 'Tecnología'
  },
  {
    id: 'PROD-002',
    nombre: 'Mouse Inalámbrico',
    cantidad: 50,
    precio: 25,
    categoria: 'Accesorios'
  },
  {
    id: 'PROD-003',
    nombre: 'Teclado Mecánico',
    cantidad: 30,
    precio: 80,
    categoria: 'Accesorios'
  },
  {
    id: 'PROD-004',
    nombre: 'Monitor 24"',
    cantidad: 20,
    precio: 200,
    categoria: 'Tecnología'
  }
];

module.exports = { usuarios, productos };