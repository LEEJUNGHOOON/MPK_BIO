// src/pages/Contact.jsx
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // 카카오맵 API 스크립트 로드
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY_HERE&autoload=false";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("kakao-map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5048, 127.1086), // 송파구 좌표
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커 표시
        const markerPosition = new window.kakao.maps.LatLng(37.5048, 127.1086);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // 인포윈도우 표시
        const infowindow = new window.kakao.maps.InfoWindow({
          content:
            '<div style="padding:5px;font-size:12px;">휴먼스헬스케어</div>',
        });
        infowindow.open(map, marker);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            오시는길
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            휴먼스헬스케어에 대한 문의사항이 있으시면 언제든지 연락해 주시기
            바랍니다. 전문 상담팀이 친절하게 안내해드리겠습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* 연락처 정보 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              연락처 정보
            </h2>

            <div className="space-y-8">
              {/* 회사 정보 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  회사 정보
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">회사명</h4>
                      <p className="text-gray-700">(주) 휴먼스헬스케어</p>
                      <p className="text-gray-600 text-sm">HUMANS HEALTHCARE</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">대표자</h4>
                      <p className="text-gray-700">노갑용</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 연락처 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-6">연락처</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        전화번호
                      </h4>
                      <p className="text-lg text-gray-700 font-medium">
                        TEL. 02-449-7401~2
                      </p>
                      <p className="text-gray-600">FAX. 02-449-7403</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-green-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        이메일
                      </h4>
                      <a
                        href="mailto:info@humanshc.co.kr"
                        className="text-lg text-blue-600 hover:text-blue-800 font-medium"
                      >
                        info@humanshc.co.kr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-purple-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">주소</h4>
                      <p className="text-gray-700 leading-relaxed">
                        서울시 송파구 송파대로 111
                        <br />
                        (송파파크하비오) 205동 604호
                        <br />
                        <span className="text-gray-600 text-sm">
                          우편번호: 05854
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 업무시간 */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  업무시간
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">평일</span>
                    <span className="font-medium text-gray-900">
                      09:00 - 18:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">점심시간</span>
                    <span className="font-medium text-gray-900">
                      12:00 - 13:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">토요일, 일요일</span>
                    <span className="font-medium text-red-600">휴무</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">공휴일</span>
                    <span className="font-medium text-red-600">휴무</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 문의 양식 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">문의하기</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <p className="text-gray-600 mb-8">
                궁금한 점이나 상담이 필요하시면 아래 양식을 작성해 주세요.
                담당자가 빠른 시일 내에 연락드리겠습니다.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      회사명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="회사명을 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      담당자명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="담당자명을 입력하세요"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="연락처를 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 유형
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">문의 유형을 선택하세요</option>
                    <option value="product">제품 문의</option>
                    <option value="service">서비스 문의</option>
                    <option value="partnership">파트너십 문의</option>
                    <option value="support">기술 지원</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="6"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="문의하실 내용을 자세히 작성해 주세요"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="privacy" className="mt-1" />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다.
                    <span className="text-blue-600 underline cursor-pointer ml-1">
                      자세히 보기
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-lg py-4 text-sm font-semibold transition-colors shadow-lg"
                >
                  문의 보내기
                </button>
              </form>
            </div>

            {/* 카카오맵 */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                오시는 길
              </h3>
              <div
                id="kakao-map"
                className="w-full h-96 rounded-2xl shadow-lg border"
              ></div>
              <div className="mt-4 bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>지하철:</strong> 8호선 송파역 3번 출구 도보 5분
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>주차:</strong> 송파파크하비오 방문자 주차장 이용
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
