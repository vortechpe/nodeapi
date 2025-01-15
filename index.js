const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para analizar JSON
app.use(express.json());

// Rutas de ejemplo
app.get('/api', (req, res) => {
    res.send({ message: 'Bienvenido a mi API REST' });
});

app.get('/api/items', (req, res) => {
    res.send([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
    ]);
});

app.post('/api/items', (req, res) => {
    const newItem = req.body;
    res.status(201).send({ message: 'Item creado', item: newItem });
});

app.put('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    res.send({ message: `Item con ID ${id} actualizado`, item: updatedItem });
});

app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;
    res.send({ message: `Item con ID ${id} eliminado` });
});

// Servidor escuchando
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
