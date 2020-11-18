/* 
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function

    async는 항상 Primise 객체를 반환한다. 
    await가 없다면 항상 동기적 실행

*/

async function func01() {   
    return 1;   // 실행해보면 Promise 객체가 return 됨 !
}
console.log('func01 call');
console.dir(func01());

function func02() {
    return new Promise((resolve) => { resolve(1) }) ;
}
console.log('func02 call');
console.dir(func02());