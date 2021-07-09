import {Porduct} from "../model/product";

export const addProduct=(req,res,next)=>{
    res.render("admin/edit-product",{
      pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    editable:false,
    activeAddProduct: true})
}
// export const product =[];
export const productx =(req,res,next)=>{
    // console.log(req.body);
    console.log("dbres productx")
    const title = req.body.title;
    const price = req.body.price;
    const imageurl =req.body.imageurl;
    const description =req.body.description;
    const product = new Porduct({imageurl:imageurl,title:title,description:description,price:price});
    product.save().then((dbres)=>{
      console.log("dbres productx",dbres)
      res.redirect('/product');
    }).catch(err=>{
      console.log(err=>console.log(err))
    })
    //  product.push({title:req.body.title})
  
}



export const admingetproducts =(req,res,next)=>{
             Porduct.fetchall().then(([rows])=>{
              res.render("admin/products",{
                productData:rows,
                pageTitle:"Admin",
                nodata: "no product in your Store",
                path:"/admin/products"
               })
             }).catch(err=>{
               console.log(err);
             })
}


export const postEditProduct =(req,res,next)=>{
                    //  const productid = req.body.productid;
                    //  console.log("productid ----->",productid);
                    console.log("postEditProduct")
                     const title = req.body.title;
                     const price = req.body.price;
                     const imageurl =req.body.imageurl;
                     const description =req.body.description;
                     const product = new Porduct({imageurl:imageurl,title:title,description:description,price:price});
                           console.log(product);
                     product.save().then((dbres)=>{
                      // res.redirect('/product');
                      // console.log("dbres postEdit",dbres)
                      res.redirect('/admin/products');
                    }).catch(err=>{
                      console.log(err=>console.log(err))
                    })
    //  product.push({title:req.body.title})
    // updatedProduct.save();
  
}

export const geteditProduct = (req,res,next)=>{
  console.log("this call");
                // console.log("this call");
               let editMode = req.query.editable;
                const Id = req.params.Pid;
                
                console.log("editable",editMode,Id);
                if(!editMode){
                  res.redirect("/")
                }
                else{ 
                  Porduct.findByID(Id).then(([row])=>{
                    console.log("findby id",row)
                    res.render("admin/edit-product",{
                      pageTitle: 'Edit Product',
                      path: '/admin/edit-product',
                      product:row[0],
                      editable:editMode
                    });
                  }).catch(err=>console.log(err))
                 
                }
}



export const postDeleteProduct =(req,res,next)=>{
            const id = req.body.productid;
             Porduct.deleteProduct(id).then(()=>{
               res.redirect("/admin/products");

             }).catch(err=>{
               console.log(err);
             });
}