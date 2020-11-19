/* 
    콜백헬 이해하기
    1번이 성공하면 2번을 실행하고
    2번이 성공하면 3번을 실행하고
    3번이 성공하면 4번을 실행한다.

    복잡하고 이해할 수 없는 코드가 나옴.. 콜백지옥.. ㅜ
    이런 걸 해결할 수 있는게 promise ~!
*/

// 1번 작업
$.ajax({
    url: '1번 작업 호출',
    success: () => {
        $.ajax({
            url: '2번 작업 호출',
            success: () => {
                $.ajax({
                    url: '3번 작업 호출',
                    success: () => {
                        $.ajax({
                            url: '4번 작업 호출',
                            success: () => {
                                
                            }
                        })
                    }
                })
            }
        })      
    }
})