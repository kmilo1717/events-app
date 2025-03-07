const app = require('./src/app');
const port = process.env.PORT || 4000;
const db = require('./src/config/db');

const startServer = async () => {
  try {
    await db.authenticate();
    console.log('Conexión a la base de datos establecida con éxito');
    db.sync();
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      console.log(`---------------------------------`);
      console.log(`http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error conectando a la base de datos:', err.message);
    process.exit(1);
  }
};

startServer();