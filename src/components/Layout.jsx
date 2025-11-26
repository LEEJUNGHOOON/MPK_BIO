// src/components/Layout.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SlideMenu from "./SlideMenu";
import logoImageMobile from "../assets/logo1.jpg";
import logoImageDesktop from "../assets/logo2.png";
import menuIcon from "../assets/menu.png";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 현재 경로 확인 함수
  const isActive = (path) => {
    return location.pathname === path;
  };

  // 메뉴 항목들
  const menuItems = [
    { path: "/about", label: "회사소개" },
    { path: "/business", label: "사업방향" },
    { path: "/products", label: "제품정보" },
    { path: "/contact", label: "오시는길" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200 relative z-30">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between lg:justify-center max-w-[1600px] mx-auto relative">
            {/* 왼쪽: 로고 - 데스크탑에서는 absolute로 왼쪽에 고정 */}
            <Link
              to="/"
              className="flex items-center py-3 lg:absolute lg:left-0"
              onClick={closeMenu}
            >
              {/* 데스크탑 로고 */}
              <img
                src={logoImageDesktop}
                alt="SK BIOFARM"
                className="hidden lg:block h-16 xl:h-20 w-auto"
              />
              {/* 모바일 로고 */}
              <img
                src={logoImageMobile}
                alt="SK BIOFARM"
                className="lg:hidden h-12 sm:h-14 w-auto"
              />
            </Link>

            {/* 데스크탑 메뉴 - 중앙 */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[15px] font-medium transition-colors whitespace-nowrap py-6 ${
                    isActive(item.path)
                      ? "text-gray-900 border-b-2 border-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* 오른쪽: 언어 선택 (데스크탑) / 햄버거 메뉴 (모바일) */}
            <div className="flex items-center lg:absolute lg:right-0">
              {/* 언어 선택 - 데스크탑만 표시 */}
              <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeWidth="2"
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  />
                </svg>
              </button>

              {/* 햄버거 메뉴 버튼 - 모바일만 표시 */}
              <button
                onClick={toggleMenu}
                className="lg:hidden flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 focus:outline-none transition-transform hover:scale-110"
                aria-label="메뉴 열기"
              >
                <img
                  src={menuIcon}
                  alt="메뉴"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 슬라이드 메뉴 (모바일용) */}
      <SlideMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        menuItems={menuItems}
      />

      {/* 메인 컨텐츠 */}
      <main className="w-full">{children}</main>

      {/* 푸터 */}
      <footer className="bg-gray-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="text-xl font-bold">회사명 : MPK BIOSOLUTION</div>
            <div className="text-sm text-gray-300">
              주소 : 경기도 성남시 분당구 탄천상로 164 (주)MPK BioSolution
            </div>
            <div className="text-sm text-gray-300">대표자 : 문효원</div>
            <div className="text-sm text-gray-300">
              FAX : 031-717-9545 사업자등록번호 : 602-81-69712
            </div>
            <div className="text-xs text-gray-400 pt-4 border-t border-gray-700">
              Copyright© 2021. All Reserved MPK BioSolution Co., Ltd.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
