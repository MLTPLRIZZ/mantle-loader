const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/mantle', async (req, res) => {
  const fallbackUrls = [
    'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://mantle-menu.mantleunblocked.workers.dev'),
    'https://mantle-menu.mantleunblocked.workers.dev',
    'https://mantle-menu.mantleunblocked.workers.dev/'
  ];

  for (const url of fallbackUrls) {
    try {
      const response = await fetch(url, {
        headers: { 'Accept': 'application/json, text/plain, */*' }
      });
      if (!response.ok) continue;
      const text = await response.text();
      if (text && text.trim()) {
        res.type('text/plain').send(text);
        return;
      }
    } catch (e) {
      console.warn('Fallback failed:', url, e.message);
    }
  }

  res.status(500).json({ error: 'Unable to fetch Mantle menu' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
