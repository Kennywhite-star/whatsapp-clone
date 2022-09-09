//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher'
import cors from 'cors'


//app config
const app =  express()
const port = process.env.PORT || 9000

//pusher under app config

const pusher = new Pusher({
    appId: "1457202",
    key: "aab86e5864dda195f6db",
    secret: "417f52962f005a9c92f4",
    cluster: "eu",
    useTLS: true
  });


//middlewares
app.use(express.json())
app.use(cors())

//chat security...stll under middlewares




//DB Config (mongoose)
const connection_url = 'mongodb+srv://Wadmin:CybaHMQFRwcacKjc@cluster0.t3dgc.mongodb.net/whatsappdb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    //useCreateIndex: true,
    useNewUrlParser:true,
   useUnifiedTopology: true,

})

.then(console.log("connected to MongoDB"))
.catch((err) => console.log(err))

//once moggose conection is open, fire a function that db is connected

const db = mongoose.connection

  db.once ('open', () => {
    console.log('DB connected')


const msgCollection = db.collection("messagecontents")
const changeStream = msgCollection.watch()


changeStream.on("change", (change) => {
    console.log('A change occurred', change)



if(change.operationType === "insert") {
    const messageDetails = change.fullDocument;
    pusher.trigger("messsages", "inserted",
    {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received:messageDetails.received,
    })
} else {
    console.log("Error triggering pusher")
}

})
}) 
//?????


//api Routes
app.get('/',(req,res)=>res.status(200).send('hello world'))
//request the body from db messages

app.get('/messages/sync',(req,res) => {
    Messages.find((err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }

    })
})

app.post("/messages/new",(req, res)=>{
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data)=>{
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


//listener(
app.listen(port,()=>console.log('Listening on localhost: ${port}'))