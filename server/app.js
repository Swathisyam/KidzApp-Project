const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = 3000;
const app = express();
const Kidzdata = require('./model/KidzData');
const userData = require('./model/userData');
// const  mongoose  = require('mongoose');



app.use(cors());
app.use(bodyParser.json());

// app.get('/',(req,res)=>{
//     // res.send("This is the message from Server");
// });

app.post('/register',(req,res)=>{
    let UserData = req.body;
    console.log(req.body);
    let user = new  userData (UserData);
    user.save((err,regUser)=>{
        if(err){
            console.log(err);
        }
        else{
        let payload = {subject : user._id}
        let token = jwt.sign(payload,'secretKey')
        res.status(200).send({token})
            // res.status(200).send(regUser);
        }
    });
});

app.post('/login', (req,res)=> {
    let UserData = req.body;
    // let admin = false
    // console.log(UserData);
    // let id = mongoose.Types.ObjectId()
    // let user = new userData (UserData)
    userData.findOne({email: UserData.email},(err,user) =>{
        if(err){
            console.log(err);
        }
        
    //      if(UserData.email == "admin@gmail.com" && UserData.password =="12S@#waS") {
    //             console.log("admin");
    //             admin = true;
    //             // res.status(200).send({admin,token});
    //         // }
    
    //     // else{
    //             let payload = {subject : id}
    //             let token = jwt.sign(payload,'secretKey')
    //             res.status(200).send({admin,token})
         
                
                // if(err){
                //     console.log("error in username"+err);
                // }
            //  }


        else{

            if(!user){
                res.status(401).send("Invalid Email");
            }
        else{
                if(user.password !== UserData.password){
                res.status(401).send("Invalid password")
                }
        else{
                let payload = {subject : user._id}
                let token = jwt.sign(payload,'secretKey')
                res.status(200).send({token})
                    // res.status(200).send(user)
                }
            }   
        }
    }
// }
);

});

app.get('/puzzle/numbers', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    Kidzdata.find()
        .then(function(numbers){
            res.send(numbers);

    });
});

app.post('/insert', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var puzzle = {
        numberId : req.body.puzzle.numberId,
        numberImageUrl : req.body.puzzle.numberImageUrl,
        numberWords: req.body.puzzle.numberWords,
        imageUrl : req.body.puzzle.imageUrl,
        }

    var puzzle = new Kidzdata(puzzle);
    puzzle.save();
    // res.send(numbers);
});


app.post('/delete', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    id=req.body.id;
    
    Kidzdata.findOneAndDelete({_id:id}).then(function(){
        console.log("Delete success"); 
        Kidzdata.find()
        .then(function(numbers){
            res.send(numbers);
        });
    });
});

app.post('/edit',(req,res)=>{
    id=req.body.ID.id;
    console.log(id);
        
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST,PUT, PATCH, DELETE, OPTIONS");
      
    Kidzdata.findOneAndUpdate({_id:id},
        {
        numberId:req.body.number.numberId,
        numberImageUrl:req.body.number.numberImageUrl,
        numberWords:req.body.number.numberWords,
        imageUrl:req.body.number.imageUrl        
        },
        (err,doc)=>
        {if(err)
            console.log(err)} )
        
});

app.post('/editedlist',(req,res)=>{
    
    console.log("editedlist")
    id=req.body.ID.id;
    console.log(id);
        Kidzdata.findById({_id:id})
        .then((number)=>
        {
            res.send(number)
        });
    
});
    

app.listen(port,function(){
    console.log("The server is running on localhost:" + port);
});



// if(UserData.email == "admin@gmail.com" && UserData.password =="12S@#waS") {
        //     console.log("admin");
        //     admin = true;
        //     res.status(200).send({admin});
        // }

        // else{
        //     let payload = {subject : id}
        //     let token = jwt.sign(payload,'secretKey')
        //     res.status(200).send({admin,token})
            
            // if(err){
            //     console.log("error in username"+err);
            // } 