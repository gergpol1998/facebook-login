const express = require('express')
const app = express()
const cors = require('cors');
const axios = require('axios');
app.use(cors());
app.use(express.json());


app.post('/verifyToken', async (req, res) => {
    const { token } = req.body;
    console.log(token)
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
