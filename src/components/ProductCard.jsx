// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* 이미지 영역 */}
      <div className="relative bg-gray-100 aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* 내용 영역 */}
      <div className="p-6">
        {/* 제품명 */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{product.nameKo}</p>

        {/* 설명 */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        {/* 특징 */}
        {product.features && product.features.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-700 mb-2">주요 특징</p>
            <ul className="space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-xs text-gray-600 flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
