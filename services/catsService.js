const cats = require("../models/cats");

let catService = {

  saveCat: function(req, res) {
    let cat = new cats();
    let params = req.body;
    
    cat.name = params.name;
    cat.race = params.race;
    cat.age = params.age;
    cat.owner = params.owner;

    cat.save((err, catStored) => {
      if (err) {
        return res.status(500).send({
          message: "Error while creating Cat"
        });
      }
      if (!catStored) {
        return res.status(404).send({
          message: `There's nothing to create`
        });
      }
      return res.status(200).send({
        cat: catStored
      });
    });
  },

  getCats: function(req, res) {

    cats.find({}).exec((err, cats) => {
      if (err) {
        return res.status(500).send({
          message: 'Error while consulting Cats'
        });
      }
      if (!cats) {
        return res.status(404).send({
          message: `There are no Cats`
        });
      }
      return res.status(200).send({
        cat: cats
      })
    })
  },

  getCat: function(req, res) {
    let id = req.params.id;

    if (id == null) {
      return res.status(404).send({
        message: `There's no cat with ${id}, gil`
      })
    }

    cats.findById(id, (err, catFind) => {
      if(err){
        return res.status(500).send({
          message: 'Error while consulting Cat'
        })
      }
      return res.status(200).send({
        cats : catFind
      })
    })
  },

  updateCat: function(req, res){
    let id = req.params.id;
    let update = req.body;

    cats.findByIdAndUpdate(id, update, {new : true}, (err, catUpdated) => {
      if(err){
        return res.status(500).send({
          message: `Error while updating ${catUpdated.name}`
        })
      }
      if(!catUpdated){
        return res.status(404).send({
          message: `There's no cat to update, toga`
        })
      }
      return res.status(200).send({
        cat: catUpdated
      })
    })
  },

  deleteCat: function(req, res) {
    let id = req.params.id;

    cats.findByIdAndDelete(id, (err, catDeleted) => {
      if(err){
        return res.status(500).send({
          message: `Error while deleting cat ${id}`
        })
      }
      if(!catDeleted){
        return res.status(404).send({
          message: `There's no cat to delete, either is dead or not in our database` 
        })
      }
      return res.status(200).send({
        message: 'Your cat is boleta, sorry 😢'
      })
    })
  }
};

module.exports = catService;
