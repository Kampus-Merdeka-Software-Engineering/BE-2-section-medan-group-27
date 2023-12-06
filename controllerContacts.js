const contacts = require('./modelContact')

function addContact(req, res, next){
    const {name, email, message} = req.body;
    contacts.create({
        name: name,
        email: email,
        message: message
    })
    .then(()=> {
        res.status(201).json({
            message : "contact berasil dikirim"
        })
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    });
}

module.exports = {addContact}