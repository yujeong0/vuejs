/*
    형식 : new Promise(Executor)

    Executor : 콜백함수
    Executor 형식
    resolve, reject 둘 다 함수임
    function(resolve, reject) {
        // resolve - 이행(fulfiller)상태로 바꿈 : 연산이 성공적으로 완료됨      -> ajax의 success 개념
        // reject - 거부(rejected)상태로 바꿈 : 연산이 실패함                  -> ajax의 error 개념
    }

    객체가 생성되면  대기 상태로 들어간다.
    대기(pending) : 이행하거나 거부되지 않은 초기 상태

*/

new Promise((resolve, reject) => {
    console.log('callback 실행');
    /* 
        $.ajax({
            url: 'aaa',
            success: () => { resolve(); }.
            error: () => { reject(); }
        })
    
    */
    // 둘 중에 하나가 실행될 것이다.....
    resolve();  // 이행(fulfiller)
    // reject();  // 거부(rejected) 
});

/*
function Promise(callback) {
    function success() {}
    function fail() {}
    callback(success, fail);
}
*/