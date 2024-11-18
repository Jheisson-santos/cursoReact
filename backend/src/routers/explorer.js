import express from "express"
import explorer from "../controllers/explorer.js"
const router = express.Router()

router.get('/', explorer.index)
router.get('/:id', explorer.show)
router.post('/', explorer.store)
router.put('/:id', explorer.update)
router.delete('/:id', explorer.destroy)

export default router