import mongoose from 'mongoose'

try{
  mongoose.connect(process.env.DB_URL)
}catch(err){
  console.error(err)
}

