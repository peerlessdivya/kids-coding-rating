const Model = require("../models/userModel");
const router = require("express").Router();

router.post("/add", (req, res) => {
  new Model(req.body)
    .save()
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/check-login", (req, res) => {
  console.log(req.body);

  const formdata = req.body;

  Model.findOne({ email: formdata.email })
    .then((data) => {
      if (data) {
        if (data.password == formdata.password) {
          res.status(200).json({ message: "login success" });
        } else {
          res.status(300).json({ message: "password incorrect" });
        }
      } else {
        res.status(300).json({ message: "email not found" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


router.get("/getall", (req, res) => {
  Model.find({})
  
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      console.log("user data updated!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("user data deleted!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;