class Promise {
    constructor(fn) {
        fn((data)=>{
            this.success(data);
        },(error)=>{
            this.error();
        })
    }

    resolve(data){
        this.success(data);
    }
    reject(error){
        this.error(error)
    }
    then(success,error){
        this.success = success;
        this.error = error;
        console.log(this)
    }

}
