import express from "express";
import bodyParser from "body-parser";
import adminRoute from "./routes/admin";
import shopRoutes from"./routes/shop";
import path from "path";
import {error404} from "./controllers/errors";
import {db} from "./util/database";
const app = express();
app.set("view engine","ejs");
app.set("views","views");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.use(shopRoutes);
app.use("/admin",adminRoute);

// db.execute('SELECT * FROM product').then(res=>{
//     console.log("res==>database",res)
// }).catch(err=>{
//     console.log(err);
// })

app.use(error404);



app.listen(3000);
