export const error404 = (req,res,next)=>{
    res.status(404).render('404',{pageTitle:"Page not found",pagedata:"not data found", path: '/admin/add-product',})
}