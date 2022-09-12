import React, { useEffect } from 'react';

const Timer = (props) => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 돌아가는 중");
        }, 1000);

        return () => {      // timer 컴포넌트가 사라질 때
            // 정리 작업
            clearInterval(timer);
            console.log("타이머 종료");
        };
    }, []);

    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    )
}

export default Timer;