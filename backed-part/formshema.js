const { Schema, model } =require('mongoose')

const formshema=new Schema({
    name:String,
    mobileNumber:Number,
    email:String,
    message:String
  
})

const form=new model(
    'form',formshema

    )

module.exports=form