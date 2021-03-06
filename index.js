const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const saviourRoutes = require('./routers/saviour-routes');
const seekerRoutes = require('./routers/seeker-routes');
const port = process.env.PORT || 3000;

const app = express()

require('express-readme')(app, {
    filename: 'README.md',
    routes: ['/', '/readme']
});

app.use(bodyParser.json({ type: "application/json"})).use(
    cors({
        methods:["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: [
            "Access-Control-Allow-Origin",
            "Content-Type",
            "x-access-token"
        ]
    })
);
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/saviours', saviourRoutes);
app.use('/seekers', seekerRoutes);


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))