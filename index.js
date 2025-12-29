const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.get('/health', (req, res) => {
  const temp = req.body?.hello?.world;

  if (temp) {
    console.log('hello world')
  }

  console.log('hello express');
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
