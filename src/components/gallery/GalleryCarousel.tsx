import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryCarouselProps {
  images: string[];
}

const GalleryCarousel = ({ images }: GalleryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 md:h-112.5 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-gray-200">
        No Images Available
      </div>
    );
  }

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="relative w-full h-64 md:h-80 lg:h-112.5 rounded-lg overflow-hidden shadow-md group">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

        <button
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 -translate-y-1/2 text-white/80 hover:text-white hover:scale-110 transition-all duration-300 drop-shadow-lg outline-none"
          onClick={prevSlide}
        >
          <ChevronLeft size={48} strokeWidth={1.5} />
        </button>

        <button
          aria-label="Next slide"
          className="absolute top-1/2 right-4 -translate-y-1/2 text-white/80 hover:text-white hover:scale-110 transition-all duration-300 drop-shadow-lg outline-none"
          onClick={nextSlide}
        >
          <ChevronRight size={48} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto py-2 px-1 scrollbar-hide">
        {images.map((img, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`
              relative cursor-pointer rounded-md overflow-hidden 
              w-20 h-14 md:w-24 md:h-16 shrink-0 
              transition-all duration-300
              ${
                currentIndex === slideIndex
                  ? "ring-2 ring-[#5a1e1b] opacity-100 shadow-md scale-105"
                  : "opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
              }
            `}
          >
            <img
              src={img}
              alt={`thumbnail-${slideIndex}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
