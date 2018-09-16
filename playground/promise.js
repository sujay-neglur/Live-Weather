// var somePromise= new Promise((resolve,reject)=> {
//     setTimeout(() => {
//         resolve('Hey promise fulfilled');
//         reject('Unable to fulfill promise');
//     }, 2000);
// });

// somePromise.then((message) => {
//     console.log(`Success: ${message}`);
// },(error)=>{
//     console.log(error);
// });

var asyncAdd= (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(typeof a==='number' && typeof b ==='number'){
                resolve(a+b);
            }
            else{
                reject('Arguments must be numbers');
            }
        },1500);
    });
};

asyncAdd(5,7).then((result) =>{
    console.log(result);
    return asyncAdd(result,4);
}).then((result) => console.log(result))
.catch(errorMessage => console.log(errorMessage));