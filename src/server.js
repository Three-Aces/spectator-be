import express from 'express';
import 'dotenv/config';
import Routes from './routes'
import swaggerUI from 'swagger-ui-express'
import swaggerDocs from "./documentation";

const app = express();

const port = process.env.PORT || 7000;

app.get('/', (req, res)=>{
    res.send('get all spectats')
})
app.use('/api/v1', Routes)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen( port, () => {
    console.log( `server is running on ${port}` );
    console.log( `press CTRL+C to stop server` );
} );

