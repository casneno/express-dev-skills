var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET /skills index. */
router.get('/', skillsCtrl.index);
/* GET /skills/new */
router.get('/new', skillsCtrl.new);
/* GET /skills/:id (show route) */
router.get('/:id', skillsCtrl.show);
/* POST /skills */
router.post('/', skillsCtrl.create);
/* DELETE /skills/:id */
router.delete('/:id', skillsCtrl.delete);
/* EDIT /skills/:id/edit*/
router.get('/:id/edit', skillsCtrl.edit);
/* UDPATE /skills/:id */
router.put('/:id', skillsCtrl.update);

module.exports = router;
