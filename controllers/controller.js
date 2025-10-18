const pool = require('../db/pool');
const db = require('../db/query');

async function getMessages(req, res) {
    const messages =  await db.getAllMessages();
    console.log(messages);
    res.render('index', {title: 'Mini Messageboard', messages: messages});
}

function createMessageGet(req, res) {
    res.render('form', {title: 'Mini Messageboard'});
}

async function createMessagePost(req, res) {
    const {username, message} = req.body;
    if(username.trim() != '' && message.trim() != '') {
        let added_date = new Date();
        await db.insertMessage(username, message, added_date);
        res.redirect('/');
    } else
    res.render('form', {title: 'Mini Messageboard', error: 'Username and Message can not be empty!'})
}

async function getMessage(req, res) {
    const message = await db.getMessage(req.params.id);
    res.render('message', {title: 'Mini Messageboard', message: message[0]});
}

module.exports = {
    getMessages,
    createMessageGet,
    createMessagePost,
    getMessage
}