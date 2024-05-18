const express = require('express')
const workoutModel = require('../models/workoutModel')

// get all

const getAllWorkouts = async(req,res)=>{
    const workouts = await workoutModel.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}

const getSingleWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout = await workoutModel.findById(id)
if(!workout){
    return res.status(404).json('No such workout')
}
res.status(200).json(workout)
}
// post one
const createWorkout =  async (req,res)=>{
    const {title,load,reps} =  req.body
    try {
        const workOutItem = await workoutModel.
        create({title,load,reps})
        res.status(200).json(workOutItem)
    } catch (error) {
        res.status(400).json({msg:'ERROR:post a new workout'+ error.message})
    }
}
module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout
}