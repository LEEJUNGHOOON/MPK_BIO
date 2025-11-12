// src/components/SlideMenu.jsx
import { Link } from "react-router-dom";
import xButtonIcon from "../assets/X_button.jpg";

const SlideMenu = ({ isOpen, onClose, menuItems = [] }) => {
  // 기본 메뉴 항목 (props로 받지 못한 경우)
  const defaultMenuItems = [
    { path: "/about", label: "회사소개" },
    { path: "/business", label: "사업방향" },
    { path: "/products", label: "제품정보" },
    { path: "/contact", label: "오시는길" },
  ];

  const items = menuItems.length > 0 ? menuItems : defaultMenuItems;

  return (
    <>
      {/* 오버레이 */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-300 ease-in-out z-40 lg:hidden ${
          isOpen
            ? "bg-opacity-50 pointer-events-auto"
            : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* 모바일: 위에서 아래로 슬라이드 */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 lg:hidden ${
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
              {items.map((item, index) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`block text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 py-3 px-2 ${
                      index < items.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SlideMenu;
