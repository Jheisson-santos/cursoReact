import express from "express"
import 'dotenv/config'
import Explorer from "./routers/explorer.js"
import Species from "./routers/species.js"
import Expedition  from "./routers/expedition.js"
import User from "./routers/user.js"
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())
app.use('/explorer', Explorer)
app.use('/species', Species)
app.use('/expedition', Expedition)
app.use('/user', User)

app.listen(process.env.PORT, ()=>{
    console.log(`Server running port ${process.env.PORT}`);
})
