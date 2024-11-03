const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(PORT, function () {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
