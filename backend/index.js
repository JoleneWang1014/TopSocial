const express = require('express');
const cors = require('cors');

const router = require('./routes/index');


const axios = require('axios');
const app = express();

// 增加json和url编码请求体大小限制
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));


app.use(cors());
app.use(express.json());


app.use('/api', router);


// 8000 is the port number where the json-server is running
// web server port number is 80, which is the default port number http://localhost,
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);  //http://localhost:80




// 箭头函数和匿名函数的区别
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });  //箭头函数
// app.get('/', function (req, res) {
//  res.send('Hello World');
// });  //匿名函数




//git init
//git remote add origin https://github.com/JoleneWang1014/TopSocial.git
//git remote -v 
//git add .
//git commit -m "first commit"
//git push
//git push --set-upstream origin master
//git status
//git log
//git log --oneline --graph
//git branch
//git config --global user.name 'JoleneWang'
//git config --global user.email 'qiuliwang@yahoo.com'

//ssh-keygen -t rsa -b 4096 -C "your email"


//cd backend
//npm init
//npm i axios cors express json-server
//npm i concurrently nodemon -D


//让web server前端和json server后端同时运行，需要在package.json中配置
// "scripts": {
//     "start": "node index.js",
//     "server": "nodemon index.js",
//     "json-server": "json-server --watch db.json --port 8000",
//     "dev": "concurrently \"npm run server\" \"npm run json-server\""
//   },