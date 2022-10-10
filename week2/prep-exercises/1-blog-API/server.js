const express = require('express')
const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: true})); // parse incoming Request Object if object, with nested objects, or generally any type.
app.use(express.json()); // parses incoming JSON requests and puts the parsed data in req.body

// YOUR CODE GOES IN HERE
app.get('/', function (req, res) {
  res.send(`
  <form action="/blogs" method="post">
    <input
    type="text"
    name="title"
    />
    <input
      type="text"
      name="content"
    />
    <input type="submit" value="SEND" />
</form>
  `)
})

// getting title and content then writing a file.
app.post('/blogs', function (req,res) {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.setHeader("Content-type", "text/plain");
  console.log(req.body);
  res.end('ok');
})

app.put('/posts/:title', (req, res) => {
  // How to get the title and content from the request?
    // -> const {title} = req.params;  we can use destructing 
  // What if the request does not have a title and/or content?
  // -> if statement does not work and then it continues to else part.

  const {title} = req.params; 
  const {content} = req.body; 
  console.log(content);

  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok')
  }
  else {
    // Send response with error message
    res.setHeader("Content-type", "text/plain");
    res.end("This post does not exist!")
  }
})

// DELETE POST BY TITLE 
app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const {title} = req.params
  if (fs.existsSync(title)) { // Add condition here
    fs.unlinkSync(title);
    res.end('ok');
  } else {
      // Send response with error message
      res.setHeader("Content-type", "text/plain");
      res.end("This post cannot be deleted!")
  }
})

// READ POST BY TITLE
app.get('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const {title} = req.params;
  // check if post exists
  if(fs.existsSync(title)){
    const post = fs.readFileSync(title);
    res.setHeader("Content-type", "text/plain");
    res.end(post);
  }
  // send response
  else{
    res.setHeader("Content-type", "text/plain");
    res.end("This post cannot be read!");
  }
})

app.listen(3000)