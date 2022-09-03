export const asyncFetchData = () =>{
    return new Promise((resolve,reject)=>{
        resolve('fight');
    });
};

export const asyncErrorFetchData = ()=>{
    return new Promise((resolve,reject)=>{
        reject('error');
    });
}
