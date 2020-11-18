function axios(url, options) {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {      
            resolve( { msg: 'success', data: [1,2,3,4,5] } );   // then 호출
            // reject();       // catch 호출
        }, 2000);
    });
}

// promise를 이용하면 callback-problem.js 보다 더 편함~
axios('1번 작업', { method: 'post'})
    .then((result) => { 
        console.log('1번 작업결과 성공');
        return axios('2번 작업', { method: 'post' });
    })
    .then((result) => { 
        console.log('2번 작업결과 성공');
        return axios('3번 작업', { method: 'post' });
    })
    .then((result) => { 
        console.log('3번 작업결과 성공');
        return axios('4번 작업', { method: 'post' });
    })
    .then((result) => { 
        console.log('4번 작업결과 성공');
    })
    .catch(() => {
        console.log('결과 실패');
    })
    .finally(() => {
        console.log('마지막 항상 실행! 이런 게 있다 정도만 알아놔라');
    });

