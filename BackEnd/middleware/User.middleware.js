const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    if(token){
      
        try {
            const decoded=jwt.verify(token,"masai")
            
            if(decoded){
               // res.json(decoded)
                req.body.Dealer=decoded.Username
                req.body.userId=decoded.userId
                next()
            }else{
                res.json({msg:"Wrong Token"})
            }
        } catch (error) {
            res.json({error:error.message})
        }
       
    }else{
        res.json({msg:"Please login"})
    }
}



module.exports={
    auth
}