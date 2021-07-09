// import { json } from "body-parser";
import fs from "fs";
import path from "path";

const p = path.join(path.dirname(require.main.filename),
  "data",
  "cart.json"
);

class Cart  {
    static addProduct=(id,prodductprice)=>{
           // fetch the prvious cart
         fs.readFile(p,(err,filecontent)=>{
             let cart = {product:[],totalPrice:0};

             console.log("cart",cart);
             if(err){
                 console.log("inside else");
               
            }else{
                cart = JSON.parse(filecontent);
                console.log("cart",cart);
            }
            //analyse the cart =>find the existing cart
            console.log("cart",cart);
            const existingProductIndex = cart.product.findIndex(prod=>prod.id===id);
           const existingProduct = cart.product[existingProductIndex];
           console.log("existing product",existingProduct);
            let updatedProduct;
            // add new product to increase quantity
               if(existingProduct){
                   updatedProduct = {...existingProduct};
                   updatedProduct.qty = updatedProduct.qty+1;
                   cart.product = [...cart.product];
                   cart.product[existingProductIndex] = updatedProduct;
                   console.log("inside exiting prodcut",cart)
               }else{
                     updatedProduct = {id:id,qty:1}
                     cart.product = [...cart.product,updatedProduct];
                   console.log("inside exiting prodcut else",cart)

               }
               cart.totalPrice = cart.totalPrice +  +prodductprice;
                  
               fs.writeFile(p,JSON.stringify(cart),err=>console.log(err));
         });
          

    } 

  static deleteCartProduct(id,productPrice){
             fs.readFile(p,(err,filecontent)=>{
                   if(err){
                       return;
                   }
                const updateCart = {...JSON.parse(filecontent)};
                const product = updateCart.product.find(prod=>prod.id==id);

                 if(!product){
                     return;
                 }
                const productQty = product.qty;
                

                updateCart.product = updateCart.product.filter(prod=>prod.id!==id);

                updateCart.totalPrice = updateCart.totalPrice - productPrice*productQty                 
                       console.log("updated cart",updateCart);
                fs.writeFile(p,JSON.stringify(updateCart),err=>{
                    console.log(err);
                })

             });
  }

static getCart(cb){
    fs.readFile(p,(err,fileContent)=>{
           const cart = JSON.parse(fileContent);
           if(err){
               return cb(null);
           }
           cb(cart);
    });
     

} 

}



export default Cart;