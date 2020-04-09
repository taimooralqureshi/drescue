const router = require('express').Router();
const seeker = require('../models/seeker-model')
// Route to save a new seeker - POST method
router.post("/", async (req, res) => {
    try {
      // Save seeker to DB
      const result = await seeker.create({
        
        nic : req.body.nic,
        name : req.body.name,
        phone : req.body.phone,
        location : req.body.location,
        UpdateOn : Date.now()
        
      });
  
      // Send the result of the save function as the server response
      return res.json(result);
    } catch (error) {
      // Handle error
      // Display error in console
      return res.json({name: error.name, message: error.message});
    }
  });
  
     // Route to get all the seekers - GET method
  router.get("/", async (req, res) => {
    try {
      // Get all seekers from the database
      const result = await seeker.find({}).exec();
  
      // Send the results as the server response
      return res.json(result);
    } catch (error) {
      // Handle error
      // Display error in console
      return res.json({name: error.name, message: error.message});
    }
  });
  
  // Route to get one seeker based on the ID - GET method
  router.get("/:id", async (req, res) => {
    try {
      // Get the ID
      const id = req.params.id;
  
      // Find the seeker from the ID
      const result = await seeker.findById(id).exec();
  
      // Send the result as the server response
      return res.json(result);
    } catch (error) {
      // Handle error
      // Display error in console
      return res.json({name: error.name, message: error.message});
    }
  });
  
  // Route to update a seeker - PUT method
  router.put("/:id", async (req, res) => {
    try {
      // Get the ID
      const id = req.params.id;
  
      // Update the seeker
      const result = await seeker.findByIdAndUpdate(id, {
        nic : req.body.nic,
        name : req.body.name,
        phone : req.body.phone,
        location : req.body.location,
        UpdateOn : Date.now(),
        status : req.body.status
  
    }, {new:true}).exec();
  
      // Send the result as the server response
      return res.json(result);
    } catch (error) {
      // Handle error
      // Display error in console
      return res.json({name: error.name, message: error.message});
    }
  });
  
  // Route to delete a seeker - DELETE method
  router.delete("/:id", async (req, res) => {
    try {
      // Get the ID
      const id = req.params.id;
  
      // Delete the seeker
      const result = await seeker.findByIdAndDelete(id).exec();
  
      // Send the result as the server response
      return res.json(result);
    } catch (error) {
      // Handle error
      // Display error in console
      return res.json({name: error.name, message: error.message});
    }
  });
  router.get('/nic/:nic', async (req, res) => {
    try {
      const result = await seeker.findOne({nic:res.params.nic}).exec();
      
      // returning the response 
      return res.json(result);      
    } catch (error) {
      return res.json({name: error.name, message: error.message});
    }  
      
  });
module.exports = router;
