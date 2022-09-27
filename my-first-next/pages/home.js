import { useRouter } from "next/router";

export default function HomeContainer() {

    const router = useRouter();
    const { message } = router.query;
    console.log(message);

    return (
        <div>
            <h1>Form Duo 홈 화면입니다.</h1>

            <h4>와이어프레임 기반 프로토타입 과제</h4>
            <h4>201835518 전소영</h4>
            <h4>담당: 설문 분석 페이지, 고객지원 페이지, 하단 챗봇 컴포넌트</h4>
        </div>
    );
}