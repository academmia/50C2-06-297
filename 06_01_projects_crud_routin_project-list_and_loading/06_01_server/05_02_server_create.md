
> ### 1. init new NodeJE project

`npm init -y`

---

> ### 2. add packages

`npm install express body-parser cors uuid multer sharp dotenv`

---

> ### 3. create `server.js`

```js
// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3344;

app.listen(port, function () {
  console.log('Server running on PORT: ', port);
});



```

---

> ### 4. Create `router.js`

```js
// router.js

const express = require('express');
const app = express();
const router = express.Router();

module.exports = router;

```

---

> ### 5. Configure `upload` folder

```js
// server.js

const express ...
const bodyParser = require('body-parser');

const app = express();
const port = ...
const router = require('./router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/upload', router);

app.listen(port, function () {
  console.log('Server running on PORT: ', port);
});

```

- testam `http://localhost:3344/upload` cu `node server.js`