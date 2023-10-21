import React, { useState } from 'react';

const App = () => {
    const [response, setResponse] = useState(null);

    const postData = async () => {
        const url = 'http://13.125.210.148/recommend'; // EC2 인스턴스의 퍼블릭 IP 주소를 여기에 입력해야 합니다.
        const data = {
            // POST 요청에 포함할 데이터
            name: 'John Doe',
            num: 12345,
            date: "20231021",
            academic: "정보보안학과",
            keyword1: "보안",
            keyword2: "취업",
            keyword3: "대회",
            keyword4: "졸업",
            keyword5: "학점"
            // 기타 데이터 추가
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            setResponse(responseData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button onClick={postData}>서버에 POST 요청 보내기</button>
            <div>{response && <pre>{JSON.stringify(response, null, 2)}</pre>}</div>
        </div>
    );
};

export default App;
