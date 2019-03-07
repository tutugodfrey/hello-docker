var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send(`Hello there! interested in using docker to containerize you app?
  welcome onboard. We will take you through the process of deploying your app
  with docker and kubernetes by showing you the ensential docker commands. 
  To learn how to work with docker image visit <a href='http://localhost:${port}/image'>/image</a>. To see container related commands visit <a href='http://localhost:${port}/container'>/containers</a>`
);
})

app.get('/image', (req, res) => {
  res.send(`Here are some basic command to work with docker image.
  <p>To create a docker image run <span>docker build -t -p portNo:portNo --build-arg var=value image-name/tagname .</span><br />
  The --build-arg declaration is option if you need to provide argument to your Dockerfile that is required at build time.</p>
  <p>To run a docker image <span>docker run -e MYVAR=value --env MYVAR=value --env_file .env image-name/imageId</span><br />
  The env declaration are optional if you need to provide env variable during run time.</p>
  <p>To destroy or remove an image run <span>docker image rm image-id</span></p>

  `);
})

app.get('/container', (req, res) => {
  res.send({ message: 'Here are some basic command to work with docker containers' });
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Your app is running on port ${port}`)
});
