const {Router} = require('express')

const router = Router()

const bucketListControllers = require('../../controllers/bucketListController')
const authMiddleware = require('../../middleware/auth')

router.get('/',authMiddleware,bucketListControllers.buckGet)

router.post('/',authMiddleware,bucketListControllers.buckCreate)

router.put('/:id',authMiddleware,bucketListControllers.buckUpdate)

router.delete('/:id',authMiddleware, bucketListControllers.buckDelete)

module.exports = router