// src/components/SlideMenu.jsx
import { Link } from "react-router-dom";
import xButtonIcon from "../assets/X_button.jpg";

const SlideMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* 오버레이 - 데스크탑만 */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-300 ease-in-out z-40 hidden md:block ${
          isOpen
            ? "bg-opacity-50 pointer-events-auto"
            : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* 데스크탑: 왼쪽에서 오른쪽으로 슬라이드 */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-xl transition-transform duration-300 ease-in-out z-50 hidden md:block ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "300px" }}
      >
        <div className="p-6">
          {/* 메뉴 헤더 */}
          <div className="flex justify-between items-center mb-8 pt-4">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              className="w-6 h-6 hover:opacity-70 transition-opacity"
              onClick={onClose}
              aria-label="메뉴 닫기"
            >
              <img
                src={xButtonIcon}
                alt="닫기"
                className="w-full h-full object-contain"
              />
            </button>
          </div>

          {/* 메뉴 항목들 */}
          <nav>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/about"
                  onClick={onClose}
                  className="block text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg"
                >
                  회사소개
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  onClick={onClose}
                  className="block text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg"
                >
                  사업방향
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={onClose}
                  className="block text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg"
                >
                  제품정보
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg"
                >
                  오시는길
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* 모바일: 위에서 아래로 슬라이드 */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-4">
          {/* 모바일 메뉴 헤더 */}
          <div className="flex justify-between items-center mb-6 pt-2">
            <div className="text-lg font-bold text-gray-800">Menu</div>
            <button
              className="w-6 h-6 hover:opacity-70 transition-opacity"
              onClick={onClose}
              aria-label="메뉴 닫기"
            >
              <img
                src={xButtonIcon}
                alt="닫기"
                className="w-full h-full object-contain"
              />
            </button>
          </div>

          {/* 모바일 메뉴 항목들 */}
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  onClick={onClose}
                  className="block text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-2 border-b border-gray-100"
                >
                  회사소개
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  onClick={onClose}
                  className="block text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-2 border-b border-gray-100"
                >
                  사업방향
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={onClose}
                  className="block text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-2 border-b border-gray-100"
                >
                  제품정보
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-2"
                >
                  오시는길
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SlideMenu;
