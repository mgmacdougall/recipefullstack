export function authChecker(req, res, next) {
  if (req.session?.user || req.path === '/login' || req.path === '/register') {
    return next();
  }
  return res.status(401).json({ error: 'Unauthorized' });
}
