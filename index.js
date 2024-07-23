
// const express = require('express');
 import express from 'express'; // Use import statement for ES module
  const app = express(); //Create an Express application
  const port = 8080;    // Define the port on which the server will listen
app.use(express.json())

   app.get('/', (req, res)=>{   //Define a route for the root URL ('/')
    const helloData = {
"message": "Hello_World!"
    }
     res.json( helloData )})  //Send 'Hello World!' as the response 

app.get('/bootcamperName', (req, res)=>{
    const bootData ={
        "Name" : "Kiran Gadhavi",
        "Age" : 32,
        "City" : "Coventry",
        "Has_Pets" : false
    }
    res.send(bootData)
})

app.post('/bootcamperName/:id', (req, res)=>{
const {id} = req.params;
const {addBootData}  = req.body;
if(!addBootData){
    res.status(418).send({'message': 'Add bootcamp details'})
}
res.send({bootcamperName: `Here is a Bootcampdetails ${addBootData} and Id is ${id}`})
})

app.put('/bootcamperName/:id', (req, res)=>{
    const {id} =req.params;
    const {name, age, city} = req.body;
    if(!name || !age || !city){
        res.status(416).send({'message' : 'name, age, city are required'})
    }
    res.send({message : `Bootcamper id is updated ${id}`, 
    updatedDetails: {name, age, city}})

})
const bootcampers = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' }
];

app.delete('/bootcamperName/:id', (req, res) => {
    const { id } = req.params;
    
    // Find the index of the bootcamper with the given ID
    const index = bootcampers.findIndex(b => b.id === parseInt(id));

    if (index === -1) {
        // If no bootcamper is found, send a 404 response
        return res.status(404).send({ message: 'Bootcamper not found' });
    }

    // Remove the bootcamper from the array
    bootcampers.splice(index, 1);

    // Send a success response
    res.send({ message: `Bootcamper with ID ${id} has been deleted` });
});
// app.delete('/bootcamperName/:id', (req,res)=>{
//     const {id} = req.params;
//     const deleteData = findage; 
//     if(deleteData <= 0){
//         return res.status(404).send({ message: 'Bootcamper not found' });
//     }
//     res.send({ message: `Bootcamper with ID ${id} has been deleted` });
// })

  app.listen(port, ()=>{//Start the server and listen on the specified port
 console.log('Server is running on Port number ${port})}'); })// Log a message when the server is running
