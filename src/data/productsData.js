// src/data/productsData.js

// Collagen 이미지
import ateloQImg from "../assets/Products/Collagen/ATELO Q.png";
import teragenImg from "../assets/Products/Collagen/TERAGEN.jpeg";

// Hemostatic 이미지
import boneStateImg from "../assets/Products/Hemostatic/BONE-STATE.jpg";
import hemofixImg from "../assets/Products/Hemostatic/Hemofix.jpeg";
import novacolImg from "../assets/Products/Hemostatic/Novacol.jpg";

// POA 이미지
import inotissImg from "../assets/Products/POA/Inotiss.jpeg";
import medicloreImg from "../assets/Products/POA/MEDICLORE.jpeg";
import precoatImg from "../assets/Products/POA/Precoat.png";

// Skin Closure 이미지
import bifixImg from "../assets/Products/Skin Closure/BI-FIX.jpg";
import episealImg from "../assets/Products/Skin Closure/EPI-SEAL.jpg";
import exofinImg from "../assets/Products/Skin Closure/EXOFIN.jpeg";
import exofinFusionImg from "../assets/Products/Skin Closure/Exofin Fusion.jpeg";
import surgiSkincloImg from "../assets/Products/Skin Closure/SURGI SKINCLO.jpg";

export const categories = [
  { id: "all", name: "전체", nameEn: "All Products" },
  { id: "collagen", name: "콜라겐", nameEn: "Collagen" },
  { id: "hemostatic", name: "지혈제", nameEn: "Hemostatic" },
  { id: "poa", name: "유착방지제", nameEn: "Anti-Adhesion" },
  { id: "skinClosure", name: "피부접합제", nameEn: "Skin Closure" },
];

export const products = [
  // Collagen 제품
  {
    id: 1,
    category: "collagen",
    name: "ATELO Q",
    nameKo: "아텔로큐",
    image: ateloQImg,
    description: "정맥에 바늘 또는 카테터를 삽입하여 용기에 있는 양액을 주입하는 기구",
    features: [
      "고순도 콜라겐 사용",
      "생체 적합성 우수",
      "빠른 조직 재생",
      "다양한 의료 분야 적용 가능",
    ],
  },
  {
    id: 2,
    category: "collagen",
    name: "TERAGEN",
    nameKo: "테라겐",
    image: teragenImg,
    description: "고품질 콜라겐 기반 조직 재생 제품",
    features: [
      "자연 유래 콜라겐",
      "우수한 생체 흡수성",
      "조직 재생 촉진",
      "수술 후 회복 지원",
    ],
  },

  // Hemostatic 제품
  {
    id: 3,
    category: "hemostatic",
    name: "BONE-STATE",
    nameKo: "본스테이트",
    image: boneStateImg,
    description: "골 수술 시 출혈을 효과적으로 제어하는 지혈제",
    features: [
      "신속한 지혈 효과",
      "골 조직 친화적",
      "사용 편의성",
      "안전한 생체 흡수",
    ],
  },
  {
    id: 4,
    category: "hemostatic",
    name: "Hemofix",
    nameKo: "헤모픽스",
    image: hemofixImg,
    description: "수술 중 효과적인 출혈 관리를 위한 지혈 솔루션",
    features: [
      "빠른 지혈 작용",
      "다양한 수술에 적용",
      "생체 안전성 검증",
      "편리한 사용법",
    ],
  },
  {
    id: 5,
    category: "hemostatic",
    name: "Novacol",
    nameKo: "노바콜",
    image: novacolImg,
    description: "콜라겐 기반의 효과적인 지혈제",
    features: [
      "콜라겐 기반 제형",
      "우수한 지혈 성능",
      "조직 재생 지원",
      "최소 부작용",
    ],
  },

  // POA 제품
  {
    id: 6,
    category: "poa",
    name: "Inotiss",
    nameKo: "이노티스",
    image: inotissImg,
    description: "수술 후 조직 유착을 효과적으로 방지하는 제품",
    features: [
      "유착 방지 효과",
      "생체 흡수성 소재",
      "다양한 수술 적용",
      "안전성 검증",
    ],
  },
  {
    id: 7,
    category: "poa",
    name: "MEDICLORE",
    nameKo: "메디클로어",
    image: medicloreImg,
    description: "복강경 수술 후 유착을 방지하는 혁신적인 솔루션",
    features: [
      "복강경 수술 최적화",
      "장기간 유착 방지",
      "사용 편의성",
      "임상 검증 완료",
    ],
  },
  {
    id: 8,
    category: "poa",
    name: "Precoat",
    nameKo: "프리코트",
    image: precoatImg,
    description: "수술 부위의 유착을 예방하는 보호막 형성 제품",
    features: [
      "보호막 형성",
      "유착 예방 효과",
      "생체 적합성",
      "다양한 수술 적용",
    ],
  },

  // Skin Closure 제품
  {
    id: 9,
    category: "skinClosure",
    name: "BI-FIX",
    nameKo: "바이픽스",
    image: bifixImg,
    description: "피부 절개 부위를 안전하게 접합하는 의료용 접착제",
    features: [
      "강력한 접착력",
      "빠른 경화 시간",
      "흉터 최소화",
      "간편한 사용",
    ],
  },
  {
    id: 10,
    category: "skinClosure",
    name: "EPI-SEAL",
    nameKo: "에피실",
    image: episealImg,
    description: "피부 표면을 효과적으로 봉합하는 실링 제품",
    features: [
      "방수 기능",
      "유연한 막 형성",
      "감염 예방",
      "자연 박리",
    ],
  },
  {
    id: 11,
    category: "skinClosure",
    name: "EXOFIN",
    nameKo: "엑소핀",
    image: exofinImg,
    description: "외과 수술 후 피부 접합을 위한 고급 솔루션",
    features: [
      "정밀한 접합",
      "최소 흉터",
      "신속한 치유",
      "환자 만족도 높음",
    ],
  },
  {
    id: 12,
    category: "skinClosure",
    name: "Exofin Fusion",
    nameKo: "엑소핀 퓨전",
    image: exofinFusionImg,
    description: "차세대 피부 접합 기술이 적용된 프리미엄 제품",
    features: [
      "혁신적인 포뮬러",
      "우수한 접착력",
      "피부 친화적",
      "빠른 회복",
    ],
  },
  {
    id: 13,
    category: "skinClosure",
    name: "SURGI SKINCLO",
    nameKo: "써지 스킨클로",
    image: surgiSkincloImg,
    description: "수술 부위 피부를 감싸고 보호하는 피부 접합 시스템",
    features: [
      "포괄적 보호",
      "감염 차단",
      "편안한 착용감",
      "효과적인 치유",
    ],
  },
];
