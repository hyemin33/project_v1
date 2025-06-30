const getTimeBasedData = () => {
  const hours = new Date().getHours();

  // 15-23시: 셀프 체크인
  if (hours >= 15 && hours < 23) {
    return { page: "/self-check-in", headline: "💻👆 SELF CHECK-IN" };
  }

  // 23-5시: 프론트 데스크 마감
  if (hours >= 23 || hours < 5) {
    return { page: "/reception-closed", headline: "FRONT DESK IS CLOSED 🕰️❌" };
  }

  // 5-11시: 체크아웃 불필요
  if (hours >= 5 && hours < 11) {
    return { page: "/no-check-out", headline: "NO NEED TO CHECK OUT 😄✋" };
  }

  // 11-15시: 청소 시간 (기본값)
  return { page: "/cleaning-time", headline: "CLEANING TIME 🛏️🧹" };
};

export default getTimeBasedData;
