const controller = require('../controllers');
const router = require('express').Router();

router.get('/api/history', controller.get);
router.post('/api/video', controller.post);

module.exports = router;
