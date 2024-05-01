const express = require('express');
const app = express();

app.get('/practice', (req, res) => {

    try {

        res.json({ test: 'Node.js Deployment', name: "manpreet" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

const PORT = process.env.PORT || 3002;
app.listen(PORT,()=>{
    console.log("Server is Running");
})