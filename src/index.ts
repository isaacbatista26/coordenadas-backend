import express from 'express';
import CordRouter from './routes/cord.routes';
import postRouter from './routes/post.routes';
import userRouter from './routes/user.routes';

const app = express();
app.use(express.json())

app.use('/cord', CordRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);


app.get('/', (req, res) => {
    res.send('Hello World').status(200);
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
});