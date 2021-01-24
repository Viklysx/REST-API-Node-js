const express = require('express');
const path = require('path');
const todoRoutes = require('./routes/todo');
const sequelize = require('./utils/database');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/todo', todoRoutes); // все запросы будем отсылать по адресу api
app.use((req, res, next) => {
    res.sendFile('/index.html');
})

async function start() {
    try {
        await sequelize.sync()
        app.listen(PORT)
    } catch (e) {
        console.log(e)
    }
}

start();

// app.listen(PORT);