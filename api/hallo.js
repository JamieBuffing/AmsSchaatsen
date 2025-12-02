module.exports = (req, res) => {
  // CORS headers zodat je 'm vanaf Google Sites kunt aanroepen
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS (preflight) request afhandelen
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Voorbeeld response
  res.status(200).json({ message: 'Hallo vanaf je Node.js backend op Vercel 🎉' });
};
