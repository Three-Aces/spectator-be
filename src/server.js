import express from 'express';
import 'dotenv/config';
import Routes from './routes'
import swaggerUI from 'swagger-ui-express'
import swaggerDocs from "./documentation";
import DB from './database/models';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

const {sequelize} = DB;
sequelize
    .authenticate()
    .then(() => {
        console.log('DB CONNECTED...');
    })
    .catch((err) => {
        console.log('Unable to connect to the database: ', err);
});

app.get('/', (req, res)=>{
    res.send('get all spectators')
})
app.use('/api/v1', Routes)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen( port, () => {
    console.log( `server is running on ${port}` );
    console.log( `press CTRL+C to stop server` );
} );

