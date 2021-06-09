import mongoose from 'mongoose'

const memorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      creator: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: new Date(),
      },
})

const Memory = mongoose.model('memory', memorySchema)

export default Memory