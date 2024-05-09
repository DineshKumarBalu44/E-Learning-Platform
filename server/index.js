const express = require('express');
const mongoose = require('mongoose');
const Contact = require("./models/ContactSchema");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://SREC:srec@mern090224.dl2k5vk.mongodb.net/Contact-Page")
    .then(() => console.log("Database connected"))
    .catch((err) => console.error(err));

app.post("/contact", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const userContact = new Contact({ name, email, phone, message });
        await userContact.save();
        return res.status(201).send({ message: 'Submitted successfully' });
    } catch (error) {
        return res.status(500).send({ message: 'Internal server error' });
    }
});

app.listen(8000, () => console.log("Server is up and running"));