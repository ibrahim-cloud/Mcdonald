const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('./models/category');
require('./models/product');
require('./models/souscategories');

// require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost/mcdonald";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection is done");
});


const categoryRouter = require("./routes/category");
app.use("/category", categoryRouter);
const productRouter = require("./routes/product");
app.use("/product", productRouter);

const sousRouter = require("./routes/souscategories");
app.use("/sous", sousRouter);
const CodePromoRouter = require("./routes/codePromo");
app.use("/code", CodePromoRouter);
const TableRouter = require("./routes/table");
app.use("/table", TableRouter);

app.listen(port, () => {
    console.log("Server is running on port: ");
});