const express = require('express')
const router = express.Router()
const workout =  require('../models/workoutModel')
const { createWorkout ,getAllWorkouts,getSingleWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutControllers')
router.get('/',getAllWorkouts)
//Get single workout
router.get('/:id',getSingleWorkout)
// post new workout
router.post('/', createWorkout)
router.delete('/:id',deleteWorkout)
router.patch('/:id',updateWorkout)
module.exports = router