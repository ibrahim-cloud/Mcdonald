const router = require("express").Router();
// const category = require("../models/category");
let souscategories = require("../models/souscategories");

//getting all categories 
router.route("/").get((req, res) => {
   
    souscategories.find()
    
        .then((souscategories) => res.json(souscategories))
        .catch((err) => res.status(400).json("Error :" + err));
});

//adding new category
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    
    const newsouscategories = new souscategories({
        name,
        category
      
    });

    newsouscategories
        .save()
        .then(() => res.json("sous categorie successfully added"))
        .catch((err) => res.status(400).json("Error :" + err));
});

// getting one category
router.route("/:id").get((req, res) => {
    souscategories.findById(req.params.id)
        .then((sous) => res.json(sous))
        .catch((err) => res.status(400).json("Error :" + err));
});

//deletting one category
router.route("/delete/:id").delete((req, res) => {
    souscategories.findByIdAndDelete(req.params.id)
        .then(() => res.json("souscategories successfully delted"))
        .catch((err) => res.status(400).json("Error :" + err));
});

//updatting one category
router.route("/update/:id").put((req, res) => {
    souscategories.findById(req.params.id)
        .then((sous) => {
            sous.name = req.body.name;
            sous.category = req.body.category;
           

            sous
                .save()
                .then(() => res.json("souscategories successfully updated"))
                .catch((err) => res.status(400).json("Error :" + err));
        })
        .catch((err) => res.status(400).json("Error :" + err));
});
module.exports = router;