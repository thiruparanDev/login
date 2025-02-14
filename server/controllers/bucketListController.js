const BucketListItem = require('../models/BucketListItem')

async function buckGet(req,res){
    try {
        const bucketListItems = await BucketListItem.find({"userId":req.user.id})
        if (!bucketListItems) throw new Error('No bucketListItems')
        const sorted = bucketListItems.sort((a,b)=>{
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

async function buckCreate(req,res){
    console.log('buckCreate')
    const newBucketListItem = await BucketListItem(req.body)
    // console.log(req.user.id)
    newBucketListItem.userId = req.user.id
    try {
        const bucketListItem = await newBucketListItem.save()
        if (!bucketListItem) throw new Error('Something went wrong saving the bucket list item')
        res.status(200).json(bucketListItem)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

async function buckUpdate(req,res){
    const {id} = req.params
    try{
        const response = await BucketListItem.findByIdAndUpdate(id, req.body)
        if(!response) throw Error('Something went wrong')
        const updated = { ...response._doc, ...req.body}
        res.status(200).json(updated)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

async function buckDelete(req,res){
    const {id} = req.params
    try{
        const removed = await BucketListItem.findByIdAndDelete(id)
        console.log(removed)
        if(!removed) throw Error('Something went wrong')
        res.status(200).json(removed)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {buckGet, buckCreate, buckUpdate, buckDelete}