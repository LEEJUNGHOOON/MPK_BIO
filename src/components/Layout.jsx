// src/components/Layout.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import SlideMenu from "./SlideMenu";
import logoImage from "../assets/logo.png";
import menuIcon from "../assets/menu.png";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200 relative z-30">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* 햄버거 메뉴 버튼 - 왼쪽 */}
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 focus:outline-none transition-transform hover:scale-110"
              aria-label="메뉴 열기"
            >
              <img
                src={menuIcon}
                alt="메뉴"
                className="w-full h-full object-contain"
              />
            </button>

            {/* 로고 - 가운데 */}
            <Link
              to="/"
              className="absolute left-1/2 transform -translate-x-1/2"
              onClick={closeMenu}
            >
              <img
                src={logoImage}
                alt="HUMANS HEALTHCARE"
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </Link>

            {/* 오른쪽 여백 (균형을 위해) */}
            <div className="w-10 sm:w-12"></div>
          </div>
        </div>
      </header>

      {/* 슬라이드 메뉴 */}
      <SlideMenu isOpen={isMenuOpen} onClose={closeMenu} />

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
