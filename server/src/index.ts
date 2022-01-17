import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {schema} from './Schema';
import cors from "cors";
import { createConnection } from 'typeorm';
import { Users } from './Entities/Users';
require('dotenv').config()

const main = async() => {
    await createConnection({
        type:"mysql",
        host: process.env.DB_HOST ,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        logging: true,
        synchronize:false,
        entities: [Users], 
    })
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql:true
    }))
   app.listen(4000, ()  => {console.log("SERVER RUNNING ON PORT 4000")})
};

main().catch((err) =>{
    console.log(err);
});
