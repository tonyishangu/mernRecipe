import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://tonyishangu:Saige1aw!!@recipes.ajjkui1.mongodb.net/recipes?retryWrites=true&w=majority")


app.listen(3001, () => {
    console.log('server running');
})