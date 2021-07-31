const express = require('express');
const app = express();
const PORT = 8000;
app.get('/', (req,res) => res.send('Express + TypeScript Server js'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
