// src/pages/Products.jsx
import { useState } from "react";
import InfiniteCarousel from "../components/InfiniteCarousel";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/productsData";
import companyCarouselImg from "../assets/Carousels/CompanyCarousel.png";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 선택된 카테고리에 따라 제품 필터링
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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

        {/* 카테고리 필터 */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* 제품 그리드 */}
        <div className="mb-20">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                해당 카테고리에 제품이 없습니다.
              </p>
            </div>
          )}
        </div>

        {/* 주요 제품 카테고리 설명 */}

        {/* 디지털 헬스케어 솔루션 */}
      </div>

      {/* 파트너 로고 무한 캐러셀 - 전체 너비 */}
      <div className="w-full bg-gray-50 border-y border-gray-200">
        <div className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            주요 파트너사
          </h2>
          <InfiniteCarousel singleImage={companyCarouselImg} speed={50} />
        </div>
      </div>
    </div>
  );
}
