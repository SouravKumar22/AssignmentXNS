var mysql= require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "system",
    database:"assignment"
});
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!!");
});
var insertQuery1="Insert into user(eMail,Name,Password)values ?";
var record=[
              ["sourav@gmail.com","Sourav","pass"]
]
con.query(insertQuery1,[record],
    function(err,result){
        if(err) throw err;
        console.log("Records Inserted!!!")
    });

app.get("/", (req, res) => {
res.send("index.html");
      });