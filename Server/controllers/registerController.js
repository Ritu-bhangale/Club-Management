export const registerData = (req,res)=>{
    const signedupUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        email: request.body.email,
        password: request.body.password,
    })
    signedupUser.save()
        .then(data => { 
            response.json(data) 
        })
        .catch(error => { 
            response.json(error) 
        })
}