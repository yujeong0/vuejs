/* 
    await 사용 문제
*/

function axios(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('결과 처리 성공') }, 2000);
    });
}

async function callAxios(){
    console.log('1');
    axios('http://localhost:9999/test')
        .then((result) => {
            console.log(result);
        });
    console.log('2');

    try {
        let result = await axios('http://localhost:9999/test'); // resolve 실행되어 then 이 실행되었을 때 그 result가 바로 반환됨!
        console.log('await: ', result);
    } catch (error) {
        console.log('reject 될 경우 실행');
    }
}

console.log('callAxios before');
callAxios();
console.log('callAxios after');