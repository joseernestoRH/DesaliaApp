let express = require('express')
    ,user = require('../controllers/users');

let router = express.Router();

router.get('/user',user.getUsers());
router.post('/user/find',user.getUser());
router.post('/user/add',user.addUser());
router.post('/user/delete',user.deleteUser());

module.exports = router;
