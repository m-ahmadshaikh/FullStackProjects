class AppError extends Error{
    constructor(status,message){
        super();
        this.status = status
    }
}