const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest:"files" });

app.post("/upload", upload.single("file"), function (req, res){
    const { file } = req;

    if (file) {
        res.send("Файл загружен успешно");
    } else {
        res.error("Ошибка");
    }
});

app.listen(3000);