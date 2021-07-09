import Sequelizer from "sequelize";

export const sequelizer = new Sequelizer("node-complete","root","atul.apple.com",
{dialect:"mysql",host:"localhost"})




















// import {createPool} from "mysql2";


// const pool = createPool({
//     // host:"localhost",
//     // user:"root",
//     // database:"node-complete",
//     // password:"atul.apple.com"
// })


// export const  db = pool.promise();