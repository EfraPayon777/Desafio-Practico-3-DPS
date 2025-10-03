import jwt from 'jsonwebtoken';

export function authRequired(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ error: 'Falta Authorization' });

  const [, token] = header.split(' ');
  if (!token) return res.status(401).json({ error: 'Token inválido' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // { id, username, nombre }
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token no válido o expirado' });
  }
}
