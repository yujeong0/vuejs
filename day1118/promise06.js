/*
    resolve 함수 호출 시 then 실행
    reject 함수 호출 시 catch 실행
*/

const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {      
        resolve( { msg: 'success', data: [1,2,3,4,5] } );   // then 호출
        // reject();       // catch 호출
    }, 2000);
});


promise
    .then((result) => { 
        console.log('결과 성공');
        console.log(result);    //{ msg: 'success', data: [1,2,3,4,5] }
        console.log(result.msg);
        console.log(result.data);
    })
    .catch(() => {
        console.log('결과 실패');
    })
    .finally(() => {
        console.log('마지막 항상 실행! 이런 게 있다 정도만 알아놔라');
    });

