/*
    resolve 함수 호출 시 then 실행
    reject 함수 호출 시 catch 실행
*/

const promise = new Promise((resolve, reject) => {  // 비동기 작업 발생
    console.log('callback 실행 start');
    setTimeout(() => {      // 동기라면 여기서 2초간 멈춰있어야 되는데, promise는 비동기작업이므로 밑에 그냥 실행하다가 2초 지나면 여기 실행함.. 마치 쓰레드처럼... 신기하군
        // resolve();   // then 호출
        reject();       // catch 호출
    }, 2000);
    console.log('callback 실행 end');
});

// then(callback function)
promise
    .then(() => { // resolve 부르면 내부적으로 then 실행됨
        console.log('결과 성공');
    })
    .catch(() => {
        console.log('결과 실패');
    });

