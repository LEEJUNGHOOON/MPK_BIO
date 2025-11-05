// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import slide1 from "../assets/slide/sample_images_00.png";
import slide2 from "../assets/slide/sample_images_01.png";
import slide3 from "../assets/slide/sample_images_02.png";
import slide4 from "../assets/slide/sample_images_03.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3, slide4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4초마다 자동 슬라이드

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full">
      {/* 슬라이드 컨테이너 - 고정 높이 */}
      <div
        className="relative w-full h-screen overflow-hidden bg-gray-900"
        style={{ minHeight: "100vh", maxHeight: "100vh" }}
      >
        {/* 슬라이드 이미지들 */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={slide}
              alt={`슬라이드 ${index + 1}`}
              className="w-full h-full object-cover"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
            />
            {/* 어두운 오버레이 */}
            <div
              className="absolute inset-0 bg-black bg-opacity-30"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></div>
          </div>
        ))}

        {/* 가운데 텍스트 */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              HUMANS HEALTHCARE
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-lg">
              혁신적인 의료기술로 건강한 미래를 만듭니다
            </p>
          </div>
        </div>

        {/* 인디케이터 (점) */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3"
          style={{ position: "absolute", bottom: "2rem" }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </div>

      {/* 주요 특징 섹션 */}
      <div className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              휴먼스헬스케어와 함께하세요
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최첨단 의료기기와 혁신적인 헬스케어 솔루션으로 더 나은 의료
              서비스를 제공합니다.
            </p>
          </div>

          {/* 주요 특징 */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                혁신 기술
              </h3>
              <p className="text-gray-600">
                최첨단 의료기술과 디지털 헬스케어 솔루션
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                검증된 품질
              </h3>
              <p className="text-gray-600">
                국제 인증 기준을 충족하는 고품질 제품
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                전문 지원
              </h3>
              <p className="text-gray-600">
                24시간 기술 지원 및 전문 상담 서비스
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 오시는 길 섹션 */}
      <div className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              오시는 길
            </h2>
          </div>

          <div className=" gap-12">
            {/* 카카오맵 */}
            <div className="rounded-2xl shadow-lg overflow-hidden border">
              <Map
                center={{ lat: 37.3444366, lng: 127.1054167 }}
                style={{ width: "100%", height: "400px" }}
                level={4}
              >
                <MapMarker position={{ lat: 37.3444366, lng: 127.1054167 }}>
                  <div style={{ padding: "5px", color: "#000" }}>
                    MPK 바이오
                  </div>
                </MapMarker>
              </Map>
            </div>

            {/* 주소 및 안내 정보
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  연락처 정보
                </h3>

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
                      </p>
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        전화번호
                      </h4>
                      <p className="text-gray-700">TEL. 02-449-7401~2</p>
                      <p className="text-gray-600">FAX. 02-449-7403</p>
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        업무시간
                      </h4>
                      <p className="text-gray-700">평일 09:00 - 18:00</p>
                      <p className="text-gray-600">주말 및 공휴일 휴무</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>교통편:</strong> 지하철 8호선 송파역 3번 출구 도보
                    5분
                  </p>
                </div>
              </div> 
             </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
