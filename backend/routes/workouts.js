const express = require('express')
const router = express.Router()
const workout =  require('./models/workoutModel')
router.get('/',(req,res)=>{
res.json({msg:'Welcome to the Application'})
})
//Get single workout
router.get('/:id',(req,res)=>{
    res.json({msg:'Get a single workout'})
})
// ppost new workout
router.post('/',async(req,res)=>{
    const {title,load,reps} =  req.body
    try {
        const workOutItem = await workout.create({title,load,reps})
        res.status(200).json(workOutItem)
        console.log(workOutItem)
    } catch (error) {
        res.status(400).json({msg:'ERROR:post a new workout'+ error.message})
    }
})
router.delete('/:id',(req,res)=>{
    res.json({msg:'Delete a new workout'})
})
router.patch('/:id',(req,res)=>{
    res.json({msg:'Update a new workout'})
})
module.exports = router