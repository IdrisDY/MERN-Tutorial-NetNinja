const express = require('express')
const router = express.Router()
const workout =  require('../models/workoutModel')
const { createWorkout ,getAllWorkouts,getSingleWorkout} = require('../controllers/workoutControllers')
router.get('/',getAllWorkouts)
//Get single workout
router.get('/:id',getSingleWorkout)
// post new workout
router.post('/', createWorkout)
router.delete('/:id',(req,res)=>{
    res.json({msg:'Delete a new workout'})
})
router.patch('/:id',(req,res)=>{
    res.json({msg:'Update a new workout'})
})
module.exports = router