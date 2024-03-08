// import express from 'express'
// import { generateUploadURL } from './s3.js'

const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.static('front'));
app.use(cors());

const URL = require('./s3config');


app.get('/s3Url/:filename', async (req, res) => {
  const url = await URL.generateUploadURL(req.params.filename);
    console.log("Upload object:",req.params);
  res.send({url: url});
});

app.get('/s3Url/:filename/delete', async (req, res) =>{
    const url = await URL.deleteObject(req.params.filename);
    console.log("Delete object:",req.params.filename);
    res.send({status: url});
}) 

app.get("/s3Url/getfile/:filename", async (req, res) => {
    const filename = req.params.filename
    console.log("GET object:",req.params.filename);
    const url = await URL.getObject(filename);
    res.send(url)
})

app.listen(3000, () => console.log("listening on port 3000"));

