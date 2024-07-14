// Thunkable에서 JavaScript 함수 호출을 위한 함수 정의
function calculateDistanceThunkable(lat1, lon1, lat2, lon2) {
    const R = 6371; // 지구의 반지름 (킬로미터 단위)

    // 위도와 경도를 라디안으로 변환
    const φ1 = toRadians(lat1);
    const φ2 = toRadians(lat2);
    const Δφ = toRadians(lat2 - lat1);
    const Δλ = toRadians(lon2 - lon1);

    // 구면 코사인 법칙 적용
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // 거리 계산 후 반환 (단위: 킬로미터)
    const distance = R * c;
    return distance;
}

// 라디안 각도로 변환하는 함수
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

// Thunkable에서 호출할 JavaScript 함수
async function calculateDistanceThunkableAPI(lat1, lon1, lat2, lon2) {
    const distance = calculateDistanceThunkable(lat1, lon1, lat2, lon2);

    // 결과를 Thunkable으로 반환
    await ThunkableWebviewerExtension.postMessage('distance', { distance });
}
