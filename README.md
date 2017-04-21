# apie-demo

## Usages

```
$ git clone https://github.com/i5ting/apie-demo.git
$ cd apie-demo
$ npm i
$ npm start
```
## Project Directory

```
$ tree .
.
├── LICENSE
├── README.md
├── app
│   ├── all.js
│   ├── api
│   │   ├── index.js
│   │   └── user.js
│   ├── demo.json
│   ├── home.js
│   ├── json.js
│   ├── jsonfile.js
│   ├── middleware.js
│   ├── middlewares
│   │   ├── a.js
│   │   └── b.js
│   ├── middlewares.js
│   ├── movies.js
│   ├── post.js
│   ├── public
│   │   ├── images
│   │   ├── javascripts
│   │   └── stylesheets
│   ├── sang.json
│   ├── simple.js
│   ├── users.js
│   ├── view.js
│   └── views
│       ├── error.pug
│       ├── index.pug
│       └── layout.pug
├── app.js
└── package.json
```

## HTTP Api

get all api info at http://127.0.0.1:3000/apie.json

```
{"data":[{"file":"/all.js","method":"all","path":"/all"},{"file":"/api/index.js","method":"get","path":"/home"},{"file":"/api/user.js","method":"get","path":"/home1"},{"file":"/demo/path.js","method":"get","path":"/demo/path"},{"file":"/demo/demo/json.js","method":"get","path":"/demo/demo/json"},{"file":"/home.js","method":"get","path":"/home"},{"file":"/json.js","method":"get","path":"/json"},{"file":"/jsonfile.js","method":"get","path":"/jsonfile"},{"file":"/middleware.js","method":"get","path":"/middleware"},{"file":"/middlewares.js","method":"get","path":"/middlewares"},{"file":"/movies.js","method":"get","path":"/movies"},{"file":"/post.js","method":"post","path":"/post"},{"file":"/simple.js","method":"get","path":"/simple"},{"file":"/users.js","method":"get","path":"/users"},{"file":"/view.js","method":"get","path":"/view"}]}