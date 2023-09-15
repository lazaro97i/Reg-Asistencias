import express from 'express'
import controller from '../controllers/licenses_controller.js'
import passport from '../config/passport.js'
import employeeExists from '../middlewares/employeeExists.js'

const router = express.Router()

const { create, read } = controller

router.post('/',
  passport.authenticate('jwt', { session: false }),
  create
)

router.get('/:file',
  passport.authenticate('jwt', { session: false }),
  employeeExists,
  read
)


export default router