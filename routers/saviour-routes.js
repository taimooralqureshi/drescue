const router = require('express').Router();
const saviour = require('../models/saviour-model');

// Route to get all the saviours - GET Method
router.get("/", async (req, res) => {
    try {
        
        // Get all the saviours from the database
        const result = await saviour.find({}).exec();

        // Send the results as the server response
        return res.json(result);
    } catch (error) {
        // Handle error
        // Display error  in console
        console.log(error);
    }
});

// Route to get one saviour based on the ID - GET method
router.get('/:id', async (req, res) => {
   try {
        // Get the ID
        let  id = req.params.id;
        
        // Find the saviour from the ID
        const result = await saviour.findById(id).exec();

        // Send the result as the server response
        return res.json(result);
      } catch (error) {
        // Handle error
        // Display error in console
        console.log(error);
   }
    
});

// Route to save new saviour - POST method
router.post('/', async (req, res) => {
    try {
        // Save saviour to DB
        const result = await saviour.create({
            name: req.body.name,
            phone: req.body.phone,
            location: req.body.location,
            password: req.body.password
        })


        return res.json(result);
            
    } catch (error) {
        // Handle erroe
        // Display error in console
        res.send(error);
    }

});

// Route to a update a saviour - PUT method
router.put('/:id', async (req, res) => {
    try {
        // Get the ID 
        const id = req.params.id;

        // Update the saviour
        result = await saviour.findByIdAndUpdate(id, {
            name: req.body.name,
            phone: req.body.phone,
            location: req.body.location,
            password: req.body.password
        }).exec()

        // Send the result as the server response
        return res.json(result);
    } catch (error) {
        // Handle error
        // Display error in console
        console.log(error);
    }
});
// Route to delete a saviour - DELETE method
router.delete('/:id', async (req, res) => {
    try {
        // Get the ID
        const id = req.params.id;

        // Delete the saviour
        const result = await saviour.findByIdAndDelete(id).exec()
    
        // Send the result as the server response 
        return res.json(result);
    } catch (error) {
        // Handle error
        // Display error in console
        console.log(error);
    }
});

module.exports = router;