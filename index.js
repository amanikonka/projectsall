import express, { json } from 'express';
import fs from 'fs';
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())

app.use(express.static('public'))


app.get('/', (req, res) => {

})



app.get('/', (req, res) => {
    res.send('Base Url');
})


app.get('/users', (req, res) => {
    let fileContent = fs.readFileSync('./users.json');
    let data = JSON.parse(fileContent);
    res.json(data)
})

app.delete('/users', (req, res) => {

    const username = req.query.username

    let fileContent = fs.readFileSync('./users.json');

    let usersList = JSON.parse(fileContent);

    //delete

    const index = usersList.indexOf(username)
    usersList.splice(index, 1)


    //write to file
    let newFileContent = JSON.stringify(usersList)
    fs.writeFileSync('./users.json', newFileContent)

    //res

    res.send('deleted')

})

app.get('/create-user', (req, res) => {

    const username = req.query.username

    //read from file to fetch prev data
    let fileContent = fs.readFileSync('./users.json');

    // convert to json
    let usersList = JSON.parse(fileContent);

    // push new item
    usersList.push(username)

    // convert back to string
    let newFileContent = JSON.stringify(usersList)

    //write to file 

    fs.writeFileSync('./users.json', newFileContent)

    res.json({
        message: 'Added successfully.'
    })
})


app.get('/checkIfPresent', (req, res) => {

    //get name from user/querystring

    const username = req.query.username

    //get all users from file
    let fileContent = fs.readFileSync('./users.json');

    // convert to json
    let usersList = JSON.parse(fileContent);


    //search for name

    let result = usersList.includes(username);

    console.log(result)
    console.log(result)

    //send response

    if (result == true) {
        res.send(true)
    } else {
        res.send(false)
    }

})





app.get('/authenticated', (req, res) => {

    const userName = req.query.username;

    if (userName == 'admin') {
        res.send(true)
    } else {
        res.send(false)
    }


})


app.get('/get-sagar', (req, res) => {

    // sa/sasdfsad

    // sa

    // sdf
    // sda
    // fsad
    // f

    res.send('Name:Sagar,Age:20,Contact:84837839')
})


app.get('/get-shubham', (req, res) => {

    console.log("we got a request for Shubham's information");

    res.send('Name:Shubham,Age:35,Contact:345637839')
})

app.get('/get-shrikanth', (req, res) => {

    res.send('Name:Shrikanth,Age:33,Contact:67675645')
})












app.get('/create-post', (req, res) => {

    let obj = {
        author: req.query.author,
        heading:  req.query.heading,
        content: req.query.content
    }


    //add in file
    //read from file to fetch prev data
    let fileContent = fs.readFileSync('./articles.json');

    // convert to json
    let postsList = JSON.parse(fileContent);

    // push new item
    postsList.push(obj)

    // convert back to string
    let newFileContent = JSON.stringify(postsList)

    //write to file 

    fs.writeFileSync('./articles.json', newFileContent)

})









app.listen(3001, () => {
    console.log('Server Started..')
})