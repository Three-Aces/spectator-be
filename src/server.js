import express from 'express';
import 'dotenv/config';
import Routes from './routes'
import swaggerUI from 'swagger-ui-express'
import swaggerDocs from "./documentation";
import DB from './database/models';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import io from "./services/chatServices";
import db from './database/models';
import PDFDocument from 'pdfkit';
const pdf = require('pdf-puppeteer');
import fs from 'fs'

const app = express();

const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

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
// app.use('/api/users', userRoutes)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const server = app.listen( port, () => {
    console.log( `server is running on ${port}` );
    console.log( `press CTRL+C to stop server` );
} );

app.use(express.static(path.join(__dirname, 'public')));
app.use('/chats', (req,res)=>{
  res.sendFile(path.join(`${__dirname}/public/chat.html`));
})
app.use('/api/v1/student/:studentId/print', async(req, res)=>{
    const {studentId}=req.params
    try{
        const behaviorMarksHistories = await db.BehaviorMarksHistory.findAll(
            {
                where: {studentId},
                include: [{
                    model: db.Students,
                    as:'behavior-history'
                }
                ]
            },
        )
        const doc = new PDFDocument();
        doc.text(JSON.stringify(behaviorMarksHistories));
        doc.fontSize(25)
        .text('Styled PDF!', {
                align: 'center',

        });
        const pd = doc.pipe(fs.createWriteStream(`${__dirname}\\reports\\file.pdf`));
        doc.end();
        // var file = path.join(__dirname, 'file.pdf');
        // console.log('file', file)
        // console.log('__dirname', `${__dirname}`)
        console.log('pd', pd.path)
        res.download(pd.path, function (err) {
            if (err) {
                console.log("Error");
                console.log(err);
            } else {
                console.log("Success");
            }    
     });
        // const options = {
        //     format: 'A4',
        //     displayHeaderFooter: true,
        //     headerTemplate: '<div></div>',
        //     footerTemplate: '<div></div>',
        //     printBackground: true,
        //     margin: {
        //       top: '10mm',
        //       right: '10mm',
        //       bottom: '10mm',
        //       left: '10mm',
        //     },
        //     style: `
        //       h1 {
        //         color: blue;
        //       }
        //     `,
        //     content: `
        //       <h1>Hello World</h1>
        //       <p>This is a PDF document created with pdf-puppeteer</p>
        //     `,
        //   };
        //   const buffer = await pdf.create(options);
        //   fs.writeFileSync(`output-${ Date.now()}.pdf`, buffer);      
            
        // return res.status(200).json({message: 'PDF generated', behaviorMarksHistories})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
})

io.attach(server);

export default app