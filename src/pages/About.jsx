// src/pages/About.jsx
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
            휴먼스헬스케어는 혁신적인 의료기기와 헬스케어 솔루션을 통해 의료진과
            환자 모두에게 더 나은 의료 서비스를 제공합니다.
          </p>
        </div>

        {/* 회사 개요 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                우리의 비전
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                건강한 사회를 만들어가는 혁신적인 헬스케어 기업으로서, 최첨단
                의료기술과 인간 중심의 서비스를 통해 모든 사람이 더 건강하고
                행복한 삶을 영위할 수 있도록 기여합니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">혁신적인 의료기술 개발</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">
                    고객 중심의 맞춤형 서비스
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-700">
                    지속가능한 헬스케어 생태계 구축
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                회사 정보
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">설립년도</span>
                  <span className="font-semibold">2019년</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">대표자</span>
                  <span className="font-semibold">노갑용</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">사업분야</span>
                  <span className="font-semibold">의료기기, 헬스케어</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">위치</span>
                  <span className="font-semibold">서울시 송파구</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 핵심 가치 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            핵심 가치
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                혁신 Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                끊임없는 연구개발을 통해 의료 분야의 새로운 패러다임을 제시하며,
                최첨단 기술로 고객의 기대를 뛰어넘는 솔루션을 제공합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center mb-6">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                신뢰 Trust
              </h3>
              <p className="text-gray-600 leading-relaxed">
                투명하고 정직한 경영을 바탕으로 고객, 파트너, 임직원과의
                신뢰관계를 구축하며 사회적 책임을 다합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                전문성 Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                의료 분야의 깊이 있는 전문 지식과 풍부한 경험을 바탕으로
                고품질의 제품과 서비스를 지속적으로 제공합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 연혁 */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            회사 연혁
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-700 font-bold">2019</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    회사 설립
                  </h3>
                  <p className="text-gray-600">
                    휴먼스헬스케어 설립 및 의료기기 사업 시작
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-700 font-bold">2020</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    사업 확장
                  </h3>
                  <p className="text-gray-600">
                    헬스케어 솔루션 분야 진출 및 주요 병원과 파트너십 체결
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-700 font-bold">2021</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    기술 혁신
                  </h3>
                  <p className="text-gray-600">
                    디지털 헬스케어 플랫폼 개발 및 상용화
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-700 font-bold">현재</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    지속적 성장
                  </h3>
                  <p className="text-gray-600">
                    의료기관 및 연구기관과의 협력 확대를 통한 지속적인 혁신
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
