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
const createWorkout=  async (req,res)=>{
    const {title,load,reps} =  req.body
    let emptyFields=  []
    if (!title){
        emptyFields.push('title')
    }
    if (!load){
        emptyFields.push('load')
    }
    if (!reps){
        emptyFields.push('reps')
    }
    if (emptyFields.length > 0){
        res.status(400).json({msg:'ERROR:Pls fill all the fields',emptyFields})
    }
    try {
        const workOutItem = await workoutModel.
        create({title,load,reps})
        res.status(200).json(workOutItem)
    } catch (error) {
        res.status(400).json({msg:'ERROR:post a new workout'+ error.message})
    }
}
const deleteWorkout = async(req,res)=>{
    const{id} = req.params
    const workout =await workoutModel.findByIdAndDelete({_id:id})
    if(workout){
        res.status(200).json(workout)
    }
}
const updateWorkout = async(req,res)=>{
    const{id} = req.params
    const workout =await workoutModel.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if(workout){
        res.status(200).json(workout)
    }
}
module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}