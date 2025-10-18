const { Router } = require('express');
const controller = require('../controllers/controller');

const router = Router();

router.get('/', controller.getMessages);
router.get('/new', controller.createMessageGet);
router.post('/new', controller.createMessagePost);
router.get('/message/:id', controller.getMessage);

module.exports = router;