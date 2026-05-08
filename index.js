// const express = require("express");
import express from 'express';
import connectDB from './config/database.js';
import HANDLERS from './handlers/index.js';

const app = express();

const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use("/", HANDLERS);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
