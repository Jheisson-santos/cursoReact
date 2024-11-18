import express from "express"
import species from "../controllers/species.js"
const router = express.Router()

router.get('/', species.index)
router.get('/:id', species.show)
router.post('/', species.store)
router.put('/:id', species.update)
router.delete('/:id', species.destroy)

export default router