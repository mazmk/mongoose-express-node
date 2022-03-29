const express = require("express");
const mongoose = require("mongoose");
const friendsRouter = require("./routes/friendsRoutes");
const app = express();
const config = require("./common/config");
const fs = require("fs");

app.use(express.json());
app.use(logger);
app.use('/friends', friendsRouter);
app.get('/', (req, res)=>{
    const page = fs.readFileSync('./index.html');
    res.status(200).send(page.toString());
})

function logger(r, s, n) {
    console.log(`Endpoint: ${r.originalUrl}, Method: ${r.method}`);
    n();
}
mongoose.connect('mongodb://localhost:27017/myapp');
app.listen(config.port, () => { //https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas
    console.log(`Server is running on ${config.baseApiUrl}`);
});