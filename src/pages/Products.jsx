// src/pages/Products.jsx
export default function Products() {
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            제품정보
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            의료진의 업무 효율성과 환자 만족도를 높이는 다양한 첨단 의료기기와
            혁신적인 헬스케어 솔루션을 제공합니다.
          </p>
        </div>

        {/* 주요 제품 카테고리 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            주요 제품 카테고리
          </h2>

          {/* 진단 장비 */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    진단 장비
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    정확하고 신속한 진단을 위한 최첨단 의료 진단 장비를
                    제공합니다. 고해상도 이미징부터 실시간 모니터링까지 다양한
                    진단 솔루션을 갖추고 있습니다.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">
                        영상진단장비
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• X-ray 시스템</li>
                        <li>• 초음파 진단기</li>
                        <li>• CT/MRI 장비</li>
                        <li>• 내시경 시스템</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">검사장비</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 혈액분석기</li>
                        <li>• 생화학분석기</li>
                        <li>• 심전도기</li>
                        <li>• 폐기능검사기</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <svg
                      className="w-32 h-32 text-blue-600 mx-auto mb-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                    <p className="text-blue-800 font-medium">첨단 진단장비</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 치료 장비 */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg order-2 lg:order-1">
                  <div className="text-center">
                    <svg
                      className="w-32 h-32 text-green-600 mx-auto mb-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <p className="text-green-800 font-medium">치료 전문장비</p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    치료 장비
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    환자의 빠른 회복과 효과적인 치료를 위한 전문 의료장비를
                    제공합니다. 최신 기술을 적용한 안전하고 정확한 치료
                    솔루션입니다.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">수술장비</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 레이저 수술기</li>
                        <li>• 전기수술기</li>
                        <li>• 수술용 현미경</li>
                        <li>• 로봇 수술 시스템</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">재활장비</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 물리치료기</li>
                        <li>• 재활훈련장비</li>
                        <li>• 전기자극치료기</li>
                        <li>• 보행훈련기</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 모니터링 시스템 */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-3xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    모니터링 시스템
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    실시간 환자 상태 모니터링과 데이터 분석을 통해 의료진의
                    정확한 판단을 지원하고 환자 안전을 보장하는 통합 모니터링
                    솔루션입니다.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">
                        생체신호 모니터
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 심전도 모니터</li>
                        <li>• 혈압 모니터</li>
                        <li>• 산소포화도 측정기</li>
                        <li>• 체온 모니터링</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3">
                        중환자실 시스템
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 통합 모니터링</li>
                        <li>• 인공호흡기</li>
                        <li>• 주사기 펌프</li>
                        <li>• 환자감시시스템</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <svg
                      className="w-32 h-32 text-purple-600 mx-auto mb-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <p className="text-purple-800 font-medium">
                      실시간 모니터링
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 디지털 헬스케어 솔루션 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            디지털 헬스케어 솔루션
          </h2>
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-white"
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
                <h3 className="text-xl font-bold mb-4">AI 진단 지원</h3>
                <p className="text-gray-300">
                  인공지능을 활용한 영상 분석 및 진단 보조 시스템
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-white"
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
                <h3 className="text-xl font-bold mb-4">클라우드 플랫폼</h3>
                <p className="text-gray-300">
                  의료데이터 통합 관리 및 실시간 공유 시스템
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">모바일 헬스</h3>
                <p className="text-gray-300">
                  환자 자가 관리 및 원격 모니터링 앱
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 서비스 지원 */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            서비스 지원
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">설치 및 구축</h3>
              <p className="text-sm text-gray-600">
                전문 엔지니어의 현장 설치 및 시스템 구축
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">교육 및 훈련</h3>
              <p className="text-sm text-gray-600">
                의료진 대상 장비 사용법 교육
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-700"
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
              <h3 className="font-bold text-gray-900 mb-2">유지보수</h3>
              <p className="text-sm text-gray-600">
                정기 점검 및 24시간 기술 지원
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">컨설팅</h3>
              <p className="text-sm text-gray-600">
                의료기관 맞춤형 솔루션 컨설팅
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
