import React, { useState, useEffect } from "react";
import "./ReservationNumber.css";

import PageLayout from "../layouts/PageLayout";
import { useLanguage } from "../contexts/LanguageContext";

const ReservationNumber = () => {
  const { translations } = useLanguage();
  const [reservationData, setReservationData] = useState(null);
  const [noResultsMessage, setNoResultsMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // 검색할 예약 번호 또는 이름 상태
  const [filteredData, setFilteredData] = useState([]); // 필터링된 예약 데이터
  const [roomPasswords, setRoomPasswords] = useState({
    209: "5548*",
    210: "1816*",
    211: "7617*",
    212: "2504*",
    306: "6220*",
    307: "9874*",
    308: "1478*",
    309: "2580*",
    401: "5689*",
    402: "8426*",
    403: "1105*",
  });

  useEffect(() => {
    // 엑셀 파일을 읽어오는 함수
    const fetchExcelData = async () => {
      try {
        // 파일을 fetch로 읽기
        const response = await fetch("/data/reservations.xlsx");
        const arrayBuffer = await response.arrayBuffer(); // ArrayBuffer로 읽기
        const data = new Uint8Array(arrayBuffer); // Uint8Array로 변환

        // 엑셀 파일 읽기
        const workbook = window.XLSX.read(data, { type: "array" });

        // 첫 번째 시트 가져오기
        const sheet = workbook.Sheets[workbook.SheetNames[0]];

        // 엑셀 시트를 JSON 데이터로 변환
        const jsonData = window.XLSX.utils.sheet_to_json(sheet);

        setReservationData(jsonData); // JSON 데이터 상태에 저장
      } catch (error) {
        console.error("엑셀 파일을 읽는 중 오류 발생:", error);
      }
    };

    fetchExcelData(); // 데이터 가져오기 호출
  }, []);

  // 예약 번호 또는 이름으로 필터링하는 함수
  const handleSearch = () => {
    if (!searchQuery) {
      setFilteredData([]); // 검색어가 없으면 필터링된 데이터를 초기화
      setNoResultsMessage(`${translations["enter_number"]}`); // 검색어가 비어 있으면 메시지 설정
      return;
    }

    if (reservationData) {
      const formattedSearchQuery = searchQuery
        .replace(/\s+/g, "")
        .toLowerCase();
      const result = reservationData.filter((item) => {
        const reservationNumber = item["Reservation Number"]
          ? item["Reservation Number"]
              .toString()
              .replace(/\s+/g, "")
              .toLowerCase()
          : "";
        const name = item["Name"]
          ? item["Name"].replace(/\s+/g, "").toLowerCase()
          : "";

        return (
          reservationNumber === formattedSearchQuery ||
          name === formattedSearchQuery
        );
      });

      if (result.length === 0) {
        setNoResultsMessage(`${translations["not_found_number"]}`);
      } else {
        setNoResultsMessage(""); // 결과가 있으면 메시지 초기화
      }

      setFilteredData(result); // 필터링된 데이터 상태에 저장
    }
  };
  // 방 번호에서 침대 번호 분리하는 함수
  const splitRoomNumber = (roomNumber) => {
    const parts = roomNumber.split("-");
    if (parts.length === 2) {
      return { room: parts[0], bed: parts[1] };
    }
    return { room: roomNumber, bed: null };
  };

  // 예약 정보를 표시하는 함수
  const renderReservationDetails = (reservation) => {
    const { room, bed } = splitRoomNumber(reservation["Room Number"]);
    const password = roomPasswords[parseInt(room)] || "";

    return (
      <table className="reservation-table">
        <tbody>
          <tr>
            <th>{translations["booking_name"]}</th>
            <td>{reservation["Name"]}</td>
          </tr>
          <tr>
            <th>{translations["booking_room_number"]}</th>
            <td>
              {room} {bed && `(침대번호: ${bed})`}
            </td>
          </tr>
          {password && (
            <tr>
              <th>{translations["booking_room_password"]}</th>
              <td>
                <span className="password-button">
                  {translations["hover_password"]}
                  <div className="password-text">{password}</div>
                </span>
              </td>
            </tr>
          )}
          <tr>
            <th> {translations["booking_checkout_date"]}</th>
            <td>{reservation["Check out Date"]}</td>
          </tr>
          <tr>
            <th>{translations["how_to_checkin"]}</th>
            <td
              dangerouslySetInnerHTML={{
                __html: translations["how_to_checkin_desk"],
              }}
            />
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <PageLayout title={translations["self_check_in_title"]}>
      <div className="reservation-container">
        <div className="search-box">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={translations["enter_number"]}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            NEXT
          </button>
        </div>
        <p className="search-input-help">{translations["enter_number"]}</p>

        {noResultsMessage ? (
          <p className="no-results">{noResultsMessage}</p>
        ) : filteredData.length > 0 ? (
          <div className="reservation-details">
            {filteredData.map((reservation, index) => (
              <div key={index}>{renderReservationDetails(reservation)}</div>
            ))}
          </div>
        ) : null}
      </div>
    </PageLayout>
  );
};

export default ReservationNumber;
