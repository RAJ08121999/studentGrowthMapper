const express = require('express');
const app = express();
const port = 8000;

app.listen(port, (err) => {
    if(err){
        console.log(`Error starting server on port ${port}`);
        return;
    }
    console.log(`Server is running on http://localhost:${port}`);
});