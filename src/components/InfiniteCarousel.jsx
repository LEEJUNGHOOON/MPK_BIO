// src/components/InfiniteCarousel.jsx
import { useEffect, useRef } from "react";

export default function InfiniteCarousel({
  images = [],
  speed = 30,
  singleImage = null,
}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += speed / 60; // 60fps 기준

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed]);

  // 단일 이미지 모드
  if (singleImage) {
    // 이미지를 충분히 많이 복제하여 끊김 없이 보이도록
    const repeatedImages = Array(20).fill(singleImage);

    return (
      <div className="w-full overflow-hidden bg-white py-8">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden"
          style={{
            scrollBehavior: "auto",
          }}
        >
          {repeatedImages.map((img, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={img}
                alt={`Carousel ${index + 1}`}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 기존 다중 이미지 모드
  if (images.length === 0) {
    return null;
  }

  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden"
        style={{
          scrollBehavior: "auto",
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={image.src}
              alt={image.alt || `Partner ${index + 1}`}
              className="h-16 md:h-20 lg:h-24 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
