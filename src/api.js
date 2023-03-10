const express = require('express');
require('express-async-errors');

const errorsMiddleware = require('./middlewares/errors');
const authRouter = require('./routes/auth.routes');
const blogPostRouter = require('./routes/blogPost.routes');
const categoryRouter = require('./routes/category.routes');
const userRouter = require('./routes/user.routes');

// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', authRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', blogPostRouter);

app.use(errorsMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
