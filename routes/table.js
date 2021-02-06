const router = require("express").Router();
// const category = require("../models/category");
let     Tables = require("../models/table");

//getting all categories 
router.route("/").get((req, res) => {
   
    Tables.find()
    
        .then((Table) => res.json(Table))
        .catch((err) => res.status(400).json("Error :" + err));
});

//adding new category
router.route("/add").post((req, res) => {
    const tablenumber = req.body.tablenumber;
    const disponible = req.body.disponible;
    const newTables = new Tables({
        disponible,
        tablenumber
    });

    newTables
        .save()
        .then(() => res.json("Table successfully added"))
        .catch((err) => res.status(400).json("Error :" + err));
});


// getting one category
router.route("/:id").get((req, res) => {
    Tables.findById(req.params.id)
        .then((Table) => res.json(Table))
        .catch((err) => res.status(400).json("Error :" + err));
});

//deletting one category
router.route("/delete/:id").delete((req, res) => {
    Tables.findByIdAndDelete(req.params.id)
        .then(() => res.json("Table successfully delted"))
        .catch((err) => res.status(400).json("Error :" + err));
});

//updatting one category
router.route("/update/:id").put((req, res) => {
    Tables.findById(req.params.id)
        .then((Table) => {
            Table.tablenumber = req.body.tablenumber;
            Table.disponible = req.body.disponible;
            Table
                .save()
                .then(() => res.json("Table successfully updated"))
                .catch((err) => res.status(400).json("Error :" + err));
        })
        .catch((err) => res.status(400).json("Error :" + err));
});
module.exports = router;