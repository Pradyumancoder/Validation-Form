// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const form = require("./formshema")
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Pradyumancoder:Pradyuman@cluster0.wyiufvr.mongodb.net',{
  useNewUrlParser: true, 
  useUnifiedTopology: true
}
  )

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host:"smtp.gmail.com",
  auth: {
    user: 'shuklapradyuman786@gmail.com',
    pass: 'lqypsltorwxveihc',
  },
});




app.post('/send-email', async (req, res) => {
  try {
    const { name, mobileNumber, email, message } = req.body;

    // Save the form data to your database using Mongoose
    const formdata = new form({
      name,
      mobileNumber,
      email,
      message,
    });
    await formdata.save();

    // Send email
    const mailOptions = {
      from: 'shuklapradyuman786@gmail.com',
      to: `${email}`,
      subject: 'Contact Us Form Submission',
      text: `Name: ${name}\nMobile Number: ${mobileNumber}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        // console.error('Error sending email:', error);
      return  res.status(500).send('Error sending email');
      } else {
        // console.log('Email sent:', info.response);
     return   res.status(200).send('Email sent successfully');
      }
    });
  } catch (error) {
    console.error('Error processing the form:', error);
    res.status(500).send('Error processing the form');
  }
});

app.get('/get',(res,req)=>{
  res.send("received successfuly")
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
