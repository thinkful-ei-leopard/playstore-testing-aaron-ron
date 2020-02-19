const app = require('./app');

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Express is listening at http://localhost:${PORT}`);
});
  