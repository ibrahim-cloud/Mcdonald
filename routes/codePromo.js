const router = require("express").Router();
// const category = require("../models/category");
let     CodePromo = require("../models/codePromo");

//getting all categories 
router.route("/").get((req, res) => {
   
    CodePromo.find()
    
        .then((codePromo) => res.json(codePromo))
        .catch((err) => res.status(400).json("Error :" + err));
});

//adding new category
router.route("/add").post((req, res) => {
    const code = req.body.code;
    const gift = req.body.gift;
    const newCodePromo = new CodePromo({
       code,
       gift
    });

    newCodePromo
        .save()
        .then(() => res.json("codePromo successfully added"))
        .catch((err) => res.status(400).json("Error :" + err));
});


// getting one category
router.route("/:id").get((req, res) => {
    CodePromo.findById(req.params.id)
        .then((Promo) => res.json(Promo))
        .catch((err) => res.status(400).json("Error :" + err));
});

//deletting one category
router.route("/delete/:id").delete((req, res) => {
    CodePromo.findByIdAndDelete(req.params.id)
        .then(() => res.json("CodePromo successfully delted"))
        .catch((err) => res.status(400).json("Error :" + err));
});

//updatting one category
router.route("/update/:id").put((req, res) => {
    CodePromo.findById(req.params.id)
        .then((Promo) => {
            Promo.code = req.body.code;
            Promo.gift = req.body.gift;
            Promo
                .save()
                .then(() => res.json("CodePromo successfully updated"))
                .catch((err) => res.status(400).json("Error :" + err));
        })
        .catch((err) => res.status(400).json("Error :" + err));
});
module.exports = router;