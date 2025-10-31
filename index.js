const express = require('express');
const mathRoutes = require('./routes/mathRoutes');

const app = express();
const PORT = 3000;

app.use('/math', mathRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
