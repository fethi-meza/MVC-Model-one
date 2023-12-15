module.exports={
    COMMON:{
        INVALID_ID : {
            message : 'invalid id' ,
            access : false ,
            status : 400 
        }
    } ,
    USER_API :{
        USER_CREAT : {
            message : 'User registered succesufly' ,
            access : true ,
            status : 201 
        } ,
        USER_UPDATE : {
            message : 'User update succesufly' ,
            access : true ,
            status : 200 
        } ,
        USER_LOGIN_SUCCESS : {
            message : 'User registered succesufly' ,
            access : true ,
            status : 201 
        } ,
        USER_ALREADY_REGISTERD : {
            message : 'User  already  registered  ' ,
            access : false ,
            status : 400 
        } ,
        USER_NOT_FOUND : {
            message : 'User registered succesufly' ,
            access : false ,
            status : 201 
        } ,
        USER_UNAUTHORIZED : {
            message : 'User not authorized' ,
            access : false ,
            status : 403 
        } ,
        USER_UNAUTHFICATION : {
            message : 'User not have authfiction' ,
            access : false ,
            status : 401 
        } ,

    }
}