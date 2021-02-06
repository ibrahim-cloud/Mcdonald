const router = require("express").Router();
// const category = require("../models/category");
let Product = require("../models/product");

//getting all categories 
router.route("/").get((req, res) => {
   
    Product.find()
    
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json("Error :" + err));
});

//adding new category
router.route("/add").post((req, res) => {
    const productname = req.body.productname;
    const category = req.body.category;
    const souscategories = req.body.souscategories;
    const productPrice = req.body.productPrice;
    
    const newProduct = new Product({
        productname,
        category,
        souscategories,
        productPrice
    });

    newProduct
        .save()
        .then(() => res.json("product successfully added"))
        .catch((err) => res.status(400).json("Error :" + err));
});

// getting one category
router.route("/:id").get((req, res) => {
    Product.findById(req.params.id)
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json("Error :" + err));
});

//deletting one category
router.route("/delete/:id").delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json("Product successfully delted"))
        .catch((err) => res.status(400).json("Error :" + err));
});

//updatting one category
router.route("/update/:id").put((req, res) => {
    Product.findById(req.params.id)
        .then((Prod) => {
            Prod.productname = req.body.productname;
            Prod.category = req.body.category;
            Prod.souscategories = req.body.souscategories;
            Prod.productPrice = req.body.productPrice;

            Prod
                .save()
                .then(() => res.json("product successfully updated"))
                .catch((err) => res.status(400).json("Error :" + err));
        })
        .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;