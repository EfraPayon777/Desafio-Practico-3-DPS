import bcrypt from 'bcryptjs';

export async function hashPassword(plain) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
}

export async function comparePassword(plain, hash) {
  return bcrypt.compare(plain, hash);
}

// Pequeño script manual: node -e "import('./src/utils/password.js').then(async m=>{console.log(await m.hashPassword('123456'));})"
