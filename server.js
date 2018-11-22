var express = require("express")
var app = express()
var port = process.env.PORT||3000

// app.get("/",function(req,res){
//     res.send("app is working")
// })

app.use(express.static("./client/build"))



app.listen(port)


// /api/books (get) - Should return all saved books as JSON.
// /api/books (post) - Will be used to save a new book to the database.
// /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.


// https://www.googleapis.com/books/v1/{collectionName}/resourceID?parameters
