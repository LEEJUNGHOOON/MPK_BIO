// src/pages/About.jsx
import koreaMapImg from "../assets/Korea Map.png";

export default function About() {
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            회사소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MPK BioSolution은 혁신적인 바이오 솔루션으로 건강한 미래를 만들어갑니다.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border-t-4 border-blue-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-600">Vision</h2>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              A Global leader in healthcare industry
            </h3>
            <p className="text-gray-600 leading-relaxed">
              ▶To provide the most beneficial devices and services leading the field of pharmaceuticals.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border-t-4 border-blue-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-600">Mission</h2>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Devoted to the healthy life of the people worldwide
            </h3>
            <p className="text-gray-600 leading-relaxed">
              ▶To search the best solutions and manufacture the better goods
            </p>
          </div>
        </div>

        {/* 회사 연혁 (타임라인) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            회사연혁
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">History</span>
              </div>
            </div>

            {/* 타임라인 */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* 세로 라인 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-300 h-full"></div>

                {/* 타임라인 아이템들 */}
                <div className="space-y-12">
                  {/* 2004 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="text-2xl font-bold text-blue-600">2004</div>
                      <p className="text-sm text-gray-600 mt-1">08. 금성산사 설립</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div className="w-1/2 pl-8"></div>
                  </div>

                  {/* 2012 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div className="w-1/2 pl-8">
                      <div className="text-2xl font-bold text-blue-600">2012</div>
                      <p className="text-sm text-gray-600 mt-1">
                        09. (주)금성산사(주) 설립<br />
                        09. 식의약시 인증취득
                      </p>
                    </div>
                  </div>

                  {/* 2013 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="text-2xl font-bold text-blue-600">2013</div>
                      <p className="text-sm text-gray-600 mt-1">
                        01. 비과,구강호흡계 상사권 변경등록
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div className="w-1/2 pl-8"></div>
                  </div>

                  {/* 2014 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div className="w-1/2 pl-8">
                      <div className="text-2xl font-bold text-blue-600">2014</div>
                      <p className="text-sm text-gray-600 mt-1">
                        09. 생산판매업허가 획득
                      </p>
                    </div>
                  </div>

                  {/* 2015 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="text-2xl font-bold text-blue-600">2015</div>
                      <p className="text-sm text-gray-600 mt-1">03. 비과 일반의 등록</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div className="w-1/2 pl-8"></div>
                  </div>

                  {/* 2016 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div className="w-1/2 pl-8">
                      <div className="text-2xl font-bold text-blue-600">2016</div>
                      <p className="text-sm text-gray-600 mt-1">
                        06. 로즈, 라운즈 판매허
                      </p>
                    </div>
                  </div>

                  {/* 2018 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="text-2xl font-bold text-blue-600">2018</div>
                      <p className="text-sm text-gray-600 mt-1">12. 유승사현 등록</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div className="w-1/2 pl-8"></div>
                  </div>

                  {/* 2020 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <div className="w-1/2 pl-8">
                      <div className="text-2xl font-bold text-blue-600">2020</div>
                      <p className="text-sm text-gray-600 mt-1">
                        07. 성남도수 공립산업단지 등록 (1개월변경상물소대상)<br />
                        08. 제주도 일상상 등록
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 거래처 현황 (지도) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            거래처 현황
          </h2>
          <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: "80%" }}>
              {/* 지도 이미지 */}
              <img
                src={koreaMapImg}
                alt="Korea Map"
                className="absolute inset-0 w-full h-full object-contain"
              />

              {/* SVG 오버레이 - 선과 점 */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 1100" preserveAspectRatio="xMidYMid meet">
                {/* 인천 점과 선 */}
                <circle cx="205" cy="245" r="6" fill="#3b82f6" stroke="white" strokeWidth="2"/>
                <line x1="205" y1="245" x2="100" y2="450" stroke="#3b82f6" strokeWidth="1.5"/>
                
                {/* 서울 점과 선 */}
                <circle cx="260" cy="220" r="6" fill="#3b82f6" stroke="white" strokeWidth="2"/>
                <line x1="260" y1="220" x2="100" y2="150" stroke="#3b82f6" strokeWidth="1.5"/>
                
                {/* 경기 점과 선 */}
                <circle cx="330" cy="310" r="6" fill="#3b82f6" stroke="white" strokeWidth="2"/>
                <line x1="330" y1="310" x2="620" y2="240" stroke="#3b82f6" strokeWidth="1.5"/>
              </svg>

              {/* Seoul 라벨 - 모바일에서는 왼쪽 상단, 태블릿 이상에서는 기존 위치 */}
              <div className="absolute top-[8%] left-[2%] w-[24%] sm:w-[26%] md:w-[22%]">
                <div className="bg-blue-500 text-white px-2 py-1 rounded font-bold text-[10px] sm:text-xs md:text-sm lg:text-base shadow-lg whitespace-nowrap">
                  Seoul
                </div>
                <div className="mt-1 space-y-1 md:space-y-1.5 text-[8px] sm:text-[10px] md:text-xs lg:text-sm leading-relaxed">
                  <p className="text-gray-900 border-b border-red-400 pb-1">■ Samsung Medical Center</p>
                  <p className="text-gray-900 border-b border-red-400 pb-1">■ Seoul National University Hospital</p>
                  <p className="text-gray-900 border-b border-red-400 pb-1">■ Chung-Ang University Hospital</p>
                  <p className="text-gray-900 border-b border-red-400 pb-1">■ Ewha Womans University Mokdong Hospital</p>
                  <p className="text-gray-900 border-b border-red-400 pb-1">■ Hanyang University Hospital</p>
                </div>
              </div>

              {/* Gyeonggi-do 라벨 */}
              <div className="absolute top-[15%] right-[2%] w-[32%] sm:w-[34%] md:w-[30%]">
                <div className="bg-blue-500 text-white px-2 py-1 rounded font-bold text-[10px] sm:text-xs md:text-sm lg:text-base shadow-lg whitespace-nowrap">
                  Gyeonggi-do
                </div>
                <div className="mt-1 space-y-2 md:space-y-2.5 text-[8px] sm:text-[10px] md:text-xs lg:text-sm leading-relaxed">
                  <div>
                    <p className="font-bold text-gray-900 underline mb-1">Seongnam</p>
                    <p className="text-gray-900 border-b border-red-400 pb-1">■ Seoul National University Bundang Hospital</p>
                    <p className="text-gray-900 border-b border-red-400 pb-1">■ Bundang Jesaeng Hospital</p>
                    <p className="text-gray-900 border-b border-red-400 pb-1">■ Bundang Cha Hospital</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 underline mb-1">Guri</p>
                    <p className="text-gray-900 border-b border-red-400 pb-1">■ Guri Hanyang University Hospital</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 underline mb-1">Bucheon</p>
                    <p className="text-gray-900 border-b border-red-400 pb-1">■ Bucheon Sejong Hospital</p>
                  </div>
                </div>
              </div>

              {/* Incheon 라벨 - 모바일에서 Seoul과 겹치지 않도록 아래로 이동 */}
              <div className="absolute top-[48%] sm:top-[42%] md:top-[38%] left-[2%] w-[24%] sm:w-[26%] md:w-[22%]">
                <div className="bg-blue-500 text-white px-2 py-1 rounded font-bold text-[10px] sm:text-xs md:text-sm lg:text-base shadow-lg whitespace-nowrap">
                  Incheon
                </div>
                <div className="mt-1 space-y-1 md:space-y-1.5 text-[8px] sm:text-[10px] md:text-xs lg:text-sm leading-relaxed">
                  <p className="text-gray-900 border-b border-red-400 pb-1">■ Gil Medical Center</p>
                  <p className="text-gray-900 border-b border-red-400 pb-1">■ Mediplex Sejong Hospital</p>
                </div>
              </div>

              {/* Over 30 Semi-hospitals */}
              <div className="absolute bottom-[8%] right-[6%]">
                <p className="text-gray-900 font-semibold text-[9px] sm:text-[11px] md:text-xs lg:text-sm bg-white bg-opacity-90 px-2 py-1 rounded shadow whitespace-nowrap">
                  ■ Over 30 Semi-hospitals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
