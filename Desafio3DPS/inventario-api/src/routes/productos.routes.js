import { Router } from 'express';
import { authRequired } from '../auth/jwtMiddleware.js';
import { listar, obtener, actualizar } from '../controllers/productos.controller.js';

const router = Router();
router.use(authRequired);

router.get('/', listar);            // GET /productos
router.get('/:id', obtener);        // GET /productos/:id
router.put('/:id', actualizar);     // PUT /productos/:id  {stock: number}

export default router;
