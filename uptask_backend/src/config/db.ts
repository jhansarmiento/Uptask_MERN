import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL)
    const url = `${connection.connection.host}:${connection.connection.port}`
    console.log(colors.bold.green(`MongoDB Connected: ${url}`))
  } catch (error) {
    console.error(colors.bold.red(`MongoDB Connection Error: ${(error as Error).message}`))
    process.exit(1)
  }
}

export default connectDB