const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=> {
    res.json({
        message: "Funcionando a rota /, bem vindo!"
    });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
});