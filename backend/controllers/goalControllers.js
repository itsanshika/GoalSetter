const asyncHandler = require('express-async-handler')


// @desc get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler (async (req,res) =>
{
    res.status(200).json({message: 'Get goals'})
})


// @desc set Goals
// @route POST /api/goals
// @access Private
const setGoals =asyncHandler (async (req,res)=>
{
    // console.log(req.body.text);
    if(req.body.text === undefined)
    {
        // res.status(400)
        throw new Error('text files missing')
    }
    res.status(200).json({message: 'Set goals'})
})


// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler (async (req,res)=>
{
    res.status(200).json({message: `Update goals ${req.params.id}`})
})


// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = asyncHandler (async (req,res)=>
{
    res.status(200).json({message: `Delete goals ${req.params.id}`})
})



module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}