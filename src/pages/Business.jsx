// src/pages/Business.jsx
export default function Business() {
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            사업방향
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MPK BioSolution은 Chemical과 Devices 두 가지 핵심 분야에서 혁신적인 솔루션을 제공합니다.
          </p>
        </div>

        {/* Chemical & Devices 섹션 */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Chemical */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center gap-4 mb-8">
              {/* 알약 아이콘 */}
              <div className="w-20 h-20 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <ellipse cx="50" cy="50" rx="35" ry="20" fill="#1f2937" transform="rotate(-45 50 50)"/>
                  <line x1="25" y1="25" x2="75" y2="75" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-blue-600">Chemical</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Responsible for a healthy life with proven stability through the clinical trials
            </p>
          </div>

          {/* Devices */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center gap-4 mb-8">
              {/* 주사기 아이콘 */}
              <div className="w-20 h-20 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* 주사기 몸통 */}
                  <rect x="35" y="25" width="15" height="35" fill="#1f2937" rx="2"/>
                  {/* 주사기 플런저 */}
                  <rect x="38" y="15" width="9" height="15" fill="#1f2937"/>
                  <circle cx="42.5" cy="15" r="5" fill="#1f2937"/>
                  {/* 주사바늘 */}
                  <polygon points="40,60 45,60 43,85 42,85" fill="#6b7280"/>
                  {/* 눈금 */}
                  <line x1="35" y1="35" x2="32" y2="35" stroke="white" strokeWidth="1.5"/>
                  <line x1="35" y1="45" x2="32" y2="45" stroke="white" strokeWidth="1.5"/>
                  <line x1="35" y1="55" x2="32" y2="55" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-blue-600">Devices</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Create a reliable healthcare environment by high-quality medical devices
            </p>
          </div>
        </div>

        {/* 추가 정보 섹션 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Competencies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Quality Assurance</h3>
              <p className="text-sm text-gray-600">
                엄격한 품질 관리 시스템을 통한 최상의 제품 보증
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center mx-auto mb-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Innovation</h3>
              <p className="text-sm text-gray-600">
                지속적인 연구개발을 통한 혁신적인 솔루션 제공
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center mx-auto mb-4">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Customer Focus</h3>
              <p className="text-sm text-gray-600">
                고객 중심의 맞춤형 서비스와 신속한 대응
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
