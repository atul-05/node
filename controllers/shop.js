// import {product} from "../controllers/product";
import {Porduct} from "../model/product";
import Cart from "../model/cart";
import { render } from "ejs";
import { productx } from "./admin";
export const products=(req,res,next)=>{
    // console.log(product);
    // res.sendFile(path.join(__dirname,"../","views","shop.html"));
    Porduct.fetchall()
    .then(([rows,fielddata])=>{
        res.render("shop/product-list",{
            productData:rows,
            pageTitle:"Products",
            nodata: "no product in your Store",
            path:"/product"
        })
    }).catch(err=>{

    })
   
}



export const getindex=(req,res,next)=>{
    Porduct.fetchall().then(([rows,filddata])=>{
        // console.log("in getindex",rows);
        res.render("shop/index",{
            productData:rows,
            pageTitle:"Store",
            nodata: "no product in your Store",
            path:"/"
        })
    });
}


export const getCart = (req,res,next)=>{

         Cart.getCart(cart=>{
            Porduct.fetchall(prod=>{
                 const cartProduct =[];
                  console.log("======>|||",prod);
                 for (let product of prod){
                     console.log("*******",product);
                      const FindCart = cart.product.find(cartItem=>cartItem.id===product.id);

                      if(FindCart){
                          cartProduct.push({productdata:product,qty:FindCart.qty})
                      }
                 }
                 res.render("shop/cart",{
                    pageTitle:"Cart",
                    nodata: "Your cart is empty",
                    products:cartProduct,
                    path:"/cart"
                  })
             })
         })

      
}

export const postCart = (req,res,next)=>{
    console.log(req.body.ProductId)
       const prodId = req.body.ProductId;
       Porduct.findByID(prodId,(prod)=>{
          Cart.addProduct(prodId,prod.price);
       });
       res.redirect("/cart");
}
 
export const deleteCartItem =(req,res,next)=>{
         
const prodId = req.body.productId;
   
console.log("in delete",prodId)

Porduct.findByID(prodId,(prod)=>{
    // console.log("----->",prod);
    Cart.deleteCartProduct(prodId,prod.price);
    
 });
 res.redirect("/cart");
}



export const getCheckout =(req,res,next)=>{
          res.render("shop/checkout",{
            pageTitle:"Checkout",
            path:"/cart"
          });
}



export const getAllOrders =(req,res,next)=>{
    res.render("shop/order",{
        pageTitle:"Checkout",
            path:"/orders"
    })

}



export const productDaetails = (req,res,next)=>{
         const pId = req.params.productId;
         Porduct.findByID(pId,p=>{
             console.log(p);
            //  console.log("this owrl]")
            res.render("shop/product-details",{
                path:"/product",
                pageTitle:"Product details",
                product:p
            })
         })
        //  console.log(pId);
}