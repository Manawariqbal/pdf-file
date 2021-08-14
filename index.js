const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




//heruko
if(process.env.Node_ENV=="production"){
  app.use(express.static("client/build"));
  const path=require("path");
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}
// post
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('rezultati.pdf', (err) => {
      if(err) {
          res.send(Promise.reject())
      }
  res.send(Promise.resolve())
    });
  })

  //Get
  app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/rezultati.pdf`);
  });

  
  

app.listen(port, () => console.log(`Listening on port ${port}`));
