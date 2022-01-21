export const loginData = (req,res)=>{
    const logedinUser = new loginTemplateCopy({
        fullName: request.body.fullName,
        email: request.body.email,
        password: request.body.password,
    })
    logedinUser.save()
        .then(data => { 
            response.json(data) 
        })
        .catch(error => { 
            response.json(error) 
        })
}