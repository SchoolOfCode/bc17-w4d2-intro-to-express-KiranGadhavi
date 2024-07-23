
// const express = require('express');
import express from 'express';  // Use import statement for ES module
const app = express(); //Create an Express application
const port = 8080; // Define the port on which the server will listen

app.get('/', (req, res)=>{ //Define a route for the root URL ('/')
  res.send( 'Hello World!')    //Send 'Hello World!' as the responsek 
})
app.listen(port,()=>{ //Start the server and listen on the specified port
    console.log(`Example app listening on port ${port}`) // Log a message when the server is running
})