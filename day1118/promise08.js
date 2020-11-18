/*
    함수의 결과로 Promise 객체 넘기기
*/
function axios(url, options) {
    return new Promise((resolve, reject) => {  
        console.log(`${url} 호출하여 데이터 저장하기`)
        setTimeout(() => {      
            resolve( { msg: 'success', data: [1,2,3,4,5] } );   // then 호출
            // reject();       // catch 호출
        }, 2000);
    });
}

axios('http://localhost:8888/board', {
    method: 'post',
    data: { writer: 'yj', title: 'promise test' }
})
    .then((result) => { 
        console.log('결과 성공');
        console.log(result);    
        console.log(result.msg);
        console.log(result.data);
    })
    .catch(() => {
        console.log('결과 실패');
    })
    .finally(() => {
        console.log('마지막 항상 실행! 이런 게 있다 정도만 알아놔라');
    });

