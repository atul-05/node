import {db} from "../util/database";
import Cart from "./cart";






export class Porduct {

/**
 * 
 * @param {this was product} title 
 */

    constructor({title,price,description,imageurl}){
        // this.id = id;
        this.title=title;
        this.imageurl = imageurl;
        this.price = price;
        this.description = description;
    }
     
 save(){  
     console.log("into save")
    return  db.execute('INSERT INTO product (title,price,description,imageurl) VALUES(?, ?, ?, ?)',
    [this.title,this.price,this.description,this.imageurl]);
 }

static fetchall(){
      return db.execute('SELECT * FROM product');
   
 }


 static findByID(id){
              
    return db.execute('SELECT * FROM product WHERE product.id = ?',[id])
   
 }


 static deleteProduct(id){
         return db.execute('DELETE FROM  product WHERE product.id =? ',[id])
 }


}