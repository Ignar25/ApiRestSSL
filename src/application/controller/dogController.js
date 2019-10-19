const dogs = require("../../domain/models/dogs");

let dogService = {

  saveDog: function(req, res) {
    let dog = new dogs();
    let params = req.body;
    
    dog.name = params.name;
    dog.race = params.race;
    dog.age = params.age;
    dog.owner = params.owner;

    dog.save((err, dogStored) => {
      if (err) {
        return res.status(500).send({
          message: "Error while creating Dog"
        });
      }
      if (!dogStored) {
        return res.status(404).send({
          message: `There's nothing to create`
        });
      }
      return res.status(200).send({
        dogStored
      });
    });
  },

  getDogs: function(req, res) {

    dogs.find({}).exec((err, dogs) => {
      if (err) {
        return res.status(500).send({
          message: 'Error while consulting Dogs'
        });
      }
      if (!dogs) {
        return res.status(404).send({
          message: `There are no Dogs`
        });
      }
      return res.status(200).send({
        dogs
      })
    })
  },

  getDog: function(req, res) {
    let id = req.params.id;

    if (id == null) {
      return res.status(404).send({
        message: `You didn't put an ID, gil`
      })
    }

    dogs.findById(id, (err, dogFind) => {
      if(err){
        return res.status(500).send({
          message: 'Error while consulting Dog'
        })
      }
      if(!dogFind){
        return res.status(404).send({
          message: `There's no dog with ID: '${id}', gil`
        })
      }
      return res.status(200).send({
        dogFind
      })
    })
  },

  updateDog: function(req, res){
    let id = req.params.id;
    let update = req.body;

    dogs.findByIdAndUpdate(id, update, {new : true}, (err, dogUpdated) => {
      if(err){
        return res.status(500).send({
          message: `Error while updating ${dogUpdated.name}`
        })
      }
      if(!dogUpdated){
        return res.status(404).send({
          message: `There's no dog to update, rrope`
        })
      }
      return res.status(200).send({
        dogUpdated
      })
    })
  },

  deleteDog: function(req, res) {
    let id = req.params.id;

    dogs.findByIdAndDelete(id, (err, dogDeleted) => {
      if(err){
        return res.status(500).send({
          message: `Error while deleting dog ${id}`
        })
      }
      if(!dogDeleted){
        return res.status(404).send({
          message: `There's no dog to delete, either is dead or not in our database` 
        })
      }
      return res.status(200).send({
        message: 'Your dog is mortadela of fiambrería, sorry 😢'
      })
    })
  }
};

module.exports = dogService;