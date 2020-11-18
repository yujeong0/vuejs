/* 
    await 사용 문제
*/

function axios(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('결과 처리 성공') }, 2000);
    });
}

console.log('1');
axios('http://localhost:9999/test')
    .then((result) => {
        console.log(result);
    });
console.log('2');

let result = await axios('http://localhost:9999/test'); // resolve 실행되어 then 이 실행되었을 때 그 result가 바로 반환됨!
console.log('await 동기처럼 실행한다... 근데 에러 발생?');



