const express = require('express');
const axios = require('axios');
const PORT = 3000;
const app = express();

app.get('/photos', async (req, res) => {
  try {
    const { category } = req.query;
    const response = await axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`);
    const data = response.data;
    res.json(data.hits);
  } catch (error) {
    res.status(500).json({ message})
  }
}
)
