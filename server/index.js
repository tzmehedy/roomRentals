const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
require("dotenv").config()
const { MongoClient, ServerApiVersion, ObjectId, Timestamp } = require("mongodb");


const app = express();

const port = process.env.PORT || 5000

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5000"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())

app.get("/", (req,res)=>{
    res.send("Room rental is coming")
})



const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k8aq9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {

    const roomsCollections = client.db("RoomRentals").collection("allRooms")

    const userCollections = client.db("RoomRentals").collection("users")




    // jwt 

    app.post("/jwt", async(req,res)=>{
      const user = req.body 
      const token = jwt.sign(user, process.env.SECRET_KEY,{expiresIn:'3h'})
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true});
    })

    app.get("/logOut", async(req,res)=>{
      res.clearCookie("token", {
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        maxAge: 0
      }).send({success:true})

    })

    app.get("/rooms", async(req,res)=>{
      const category = req.query.category
      let query = {}
      if(category && category !== 'null') query = {category}
      const result = await roomsCollections.find(query).toArray()
      res.send(result)
    })

    app.get("/rooms/:id", async(req,res)=>{
      const id = req.params.id 
      const query = {_id : new ObjectId(id)}
      const result = await roomsCollections.findOne(query)
      res.send(result)
    })

    app.post("/rooms", async(req,res)=>{
      const roomInfo = req.body
      const result = await roomsCollections.insertOne(roomInfo)
      res.send(result)
    })

    app.get("/myListings/:email", async(req,res)=>{
      const email = req.params.email 
      const query = {'host.email':email}
      const result = await roomsCollections.find(query).toArray()
      res.send(result)
    })

    app.delete("/myListings/:id", async(req,res)=>{
      const id= req.params.id 
      const query = {_id: new ObjectId(id)}
      const result = await roomsCollections.deleteOne(query)
      res.send(result)
    })

    app.put("/users", async(req,res)=>{
      const user = req.body 
      const query = {email:user?.email}
      const isExist = await userCollections.findOne(query)
      

      if(isExist){
        if(user.status === "requested"){
          const result = await userCollections.updateOne(query, {$set:{status: user.status}})
          return res.send(result)
        }
        else{
          return res.send(isExist)

        }
      }

      const option = {upsert:true}

      const updateUser = {
        $set:{
          ...user,  
          Timestamp: new Date() 
        }
      }
      const result = await userCollections.updateOne(query,updateUser,option)
      
      res.send(result)
    })

    app.get("/users", async(req,res)=>{
      const result = await userCollections.find().toArray()
      res.send(result)
    })

    app.get("/user-role/:email", async(req,res)=>{
      const email = req.params.email
      const query ={email:email}
      const result = await userCollections.findOne(query)
      res.send(result)
    })

    app.patch("/user-role-update", async(req,res)=>{
      const updatedUser = req.body 
      const query = {email: updatedUser?.email}
      const updatedDoc = {
        $set:{
          role: updatedUser?.role,
          status: updatedUser?.status
        }
      }
      const result = await userCollections.updateOne(query, updatedDoc)
      res.send(result)
      
    })

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






app.listen(port, ()=>{
    console.log(`The port is running is ${port}`)
})