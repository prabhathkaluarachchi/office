import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

const initialImages = [
  "/gallery/img5.png",
  "/gallery/img1.png",
  "/gallery/img6.png",
  "/gallery/img2.png",
  "/gallery/img8.png",
  "/gallery/img4.png",
  "/gallery/img7.png",
  "/gallery/img9.png",
  "/gallery/img3.png",
];

const extraImages = [
  "/gallery/img9.png",
  "/gallery/img9.png",
  "/gallery/img9.png",
  "/gallery/img9.png",
    "/gallery/img9.png",
  "/gallery/img9.png",
    "/gallery/img9.png",
];

export default function GalleryGrid() {
  const [showMore, setShowMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const allImages = [...initialImages, ...extraImages];
  const images = showMore ? allImages : initialImages;

  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);
  const prevImage = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-white py-10 px-4 md:px-20">
      {/* DESKTOP GRID (visible only on md and up) */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[120px] sm:auto-rows-[140px] md:grid-cols-4 md:auto-rows-[180px] md:gap-4">
            {initialImages.map((src, index) => {
              const spanClass =
                index % 7 === 0
                  ? "md:col-span-2"
                  : index % 5 === 0
                  ? "md:row-span-2"
                  : "";
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-md cursor-pointer relative ${spanClass}`}
                  onClick={() => openModal(index)}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              );
            })}
          </div>

          {!showMore && (
            <div
              onClick={() => setShowMore(true)}
              className="absolute inset-0 top-1/2 bg-gradient-to-t from-white/95 via-white/80 to-transparent rounded-md items-end justify-center cursor-pointer shadow-inner hidden md:flex"
            >
              <div className="flex flex-col items-center pb-6">
                <div className="bg-black p-3 rounded-full shadow-lg mb-2">
                  <ChevronDown className="text-white w-6 h-6" />
                </div>
                <p className="text-yellow-500 font-medium text-sm">
                  Show More Photos
                </p>
              </div>
            </div>
          )}
        </div>

        {showMore && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 auto-rows-[120px] sm:auto-rows-[140px] md:grid-cols-4 md:auto-rows-[180px] md:gap-4">
            {extraImages.map((src, index) => {
              const globalIndex = initialImages.length + index;
              return (
                <div
                  key={globalIndex}
                  className="overflow-hidden rounded-md cursor-pointer relative"
                  onClick={() => openModal(globalIndex)}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${globalIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* MOBILE/TABLET GRID (visible only below md) */}
      <div className="block md:hidden">
        <div className="relative">
          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[120px] sm:auto-rows-[140px]">
            {images.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-md cursor-pointer relative"
                onClick={() => openModal(index)}
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Mobile Gradient Overlay (same style as desktop) */}
          {!showMore && (
            <div
              onClick={() => setShowMore(true)}
              className="absolute inset-0 top-1/2 bg-gradient-to-t from-white/95 via-white/80 to-transparent rounded-md items-end justify-center cursor-pointer shadow-inner flex"
            >
              <div className="flex flex-col items-center pb-6">
                <div className="bg-black p-3 rounded-full shadow-lg mb-2">
                  <ChevronDown className="text-white w-6 h-6" />
                </div>
                <p className="text-yellow-500 font-medium text-sm">
                  Show More Photos
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MODAL SHARED BETWEEN VIEWS */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white"
          >
            <X size={32} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={images[activeIndex]}
            alt="Enlarged"
            className="max-w-[90vw] max-h-[80vh] rounded-md shadow-xl"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}




// OLD Style Code same as FIGMA UI
// import React, { useState } from "react";
// import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

// const initialImages = [
//   "/gallery/img5.png",
//   "/gallery/img1.png",
//   "/gallery/img6.png",
//   "/gallery/img2.png",
//   "/gallery/img8.png",
//   "/gallery/img4.png",
//   "/gallery/img7.png",
//   "/gallery/img9.png",
//   "/gallery/img3.png",
// ];

// const extraImages = [
//   "/gallery/img9.png",
//   "/gallery/img9.png",
//   "/gallery/img9.png",
//   "/gallery/img9.png",

// ];

// export default function GalleryGrid() {
//   const [showMore, setShowMore] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const images = showMore ? [...initialImages, ...extraImages] : initialImages;

//   const openModal = (index) => setActiveIndex(index);
//   const closeModal = () => setActiveIndex(null);
//   const prevImage = () =>
//     setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   const nextImage = () =>
//     setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

//   return (
//     <section className="bg-white py-10 px-4 md:px-20">
//       {/* === IMAGE GRID === */}
//       <div className="relative">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[180px]">
//           {initialImages.map((src, index) => {
//             const spanClass =
//               index % 7 === 0
//                 ? "md:col-span-2"
//                 : index % 5 === 0
//                 ? "md:row-span-2"
//                 : "";
//             return (
//               <div
//                 key={index}
//                 className={`overflow-hidden rounded-md cursor-pointer relative ${spanClass}`}
//                 onClick={() => openModal(index)}
//               >
//                 <img
//                   src={src}
//                   alt={`Gallery image ${index + 1}`}
//                   className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* === SHOW MORE OVERLAY === */}
//         {!showMore && (
//           <div
//             onClick={() => setShowMore(true)}
//             className="absolute inset-0 top-1/2 bg-gradient-to-t from-white/95 via-white/80 to-transparent rounded-md flex items-end justify-center cursor-pointer shadow-inner"
//           >
//             <div className="flex flex-col items-center pb-6">
//               <div className="bg-black p-3 rounded-full shadow-lg mb-2">
//                 <ChevronDown className="text-white w-6 h-6" />
//               </div>
//               <p className="text-yellow-500 font-medium text-sm">
//                 Show More Photos
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* === EXTRA IMAGES === */}
//       {showMore && (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 auto-rows-[150px] md:auto-rows-[180px]">
//           {extraImages.map((src, index) => {
//             const globalIndex = initialImages.length + index;
//             return (
//               <div
//                 key={globalIndex}
//                 className="overflow-hidden rounded-md cursor-pointer relative"
//                 onClick={() => openModal(globalIndex)}
//               >
//                 <img
//                   src={src}
//                   alt={`Gallery image ${globalIndex + 1}`}
//                   className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {/* === MODAL === */}
//       {activeIndex !== null && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
//           <button
//             onClick={closeModal}
//             className="absolute top-4 right-4 text-white"
//           >
//             <X size={32} />
//           </button>
//           <button
//             onClick={prevImage}
//             className="absolute left-4 text-white"
//             aria-label="Previous"
//           >
//             <ChevronLeft size={40} />
//           </button>
//           <img
//             src={images[activeIndex]}
//             alt="Enlarged"
//             className="max-w-[90vw] max-h-[80vh] rounded-md shadow-xl"
//           />
//           <button
//             onClick={nextImage}
//             className="absolute right-4 text-white"
//             aria-label="Next"
//           >
//             <ChevronRight size={40} />
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

// const initialImages = [
//   "/gallery/img1.png",
//   "/gallery/img2.png",
//   "/gallery/img3.png",
//   "/gallery/img4.png",
//   "/gallery/img5.png",
//   "/gallery/img6.png",
//   "/gallery/img7.png",
//   "/gallery/img8.png",
//   "/gallery/img9.png",
// ];

// const extraImages = [
//   "/gallery/img9.png",
//   "/gallery/img9.png",
//   "/gallery/img9.png",
//   "/gallery/img9.png",
//   "/gallery/img9.png",
//   "/gallery/img9.png",
// ];

// export default function GalleryGrid() {
//   const [showMore, setShowMore] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null); // For popup
//   const images = showMore ? [...initialImages, ...extraImages] : initialImages;

//   const openModal = (index) => setActiveIndex(index);
//   const closeModal = () => setActiveIndex(null);
//   const prevImage = () =>
//     setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   const nextImage = () =>
//     setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

//   return (
//     <section className="bg-white py-10 px-4 md:px-20">
//       {/* === FIRST ROW === */}
//       <div className="grid md:grid-cols-2 gap-4 mb-5">
//         <div className="grid grid-rows-2 gap-4">
//           <div className="w-full h-full">
//             <img
//               src={images[0]}
//               alt="Gallery image 1"
//               onClick={() => openModal(0)}
//               className="w-full h-full object-cover rounded-md cursor-pointer"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src={images[1]}
//               alt="Gallery image 2"
//               onClick={() => openModal(1)}
//               className="w-full h-full object-cover rounded-md cursor-pointer"
//             />
//             <img
//               src={images[2]}
//               alt="Gallery image 3"
//               onClick={() => openModal(2)}
//               className="w-full h-full object-cover rounded-md cursor-pointer"
//             />
//           </div>
//         </div>
//         <div className="h-full">
//           <img
//             src={images[3]}
//             alt="Gallery image 4"
//             onClick={() => openModal(3)}
//             className="w-full h-full object-cover rounded-md cursor-pointer"
//           />
//         </div>
//       </div>

//       {/* === SECOND ROW === */}
//       <div className="mb-4">
//         <img
//           src={images[4]}
//           alt="Gallery image 5"
//           onClick={() => openModal(4)}
//           className="w-full h-auto rounded-md cursor-pointer"
//         />
//       </div>

//       {/* === THIRD ROW + Overlay === */}
//       <div className="relative">
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
//           {images.slice(5, 9).map((src, index) => (
//             <img
//               key={index + 5}
//               src={src}
//               alt={`Gallery image ${index + 6}`}
//               onClick={() => openModal(index + 5)}
//               className="w-full h-auto rounded-md cursor-pointer"
//             />
//           ))}
//         </div>

//         {!showMore && (
//           <div
//             onClick={() => setShowMore(true)}
//             className="absolute inset-0 top-1/2 bg-gradient-to-t from-white/95 via-white/70 to-transparent rounded-md flex items-end justify-center cursor-pointer shadow-inner"
//           >
//             <div className="flex flex-col items-center pb-6">
//               <div className="bg-black p-3 rounded-full shadow-lg mb-2">
//                 <ChevronDown className="text-white w-6 h-6" />
//               </div>
//               <p className="text-yellow-500 font-medium text-sm">
//                 Show More Photos
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* === EXTRA IMAGES === */}
//       {showMore && (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
//           {extraImages.map((src, index) => (
//             <img
//               key={index + initialImages.length}
//               src={src}
//               alt={`Extra image ${index + 1}`}
//               onClick={() => openModal(index + initialImages.length)}
//               className="w-full h-auto rounded-md cursor-pointer"
//             />
//           ))}
//         </div>
//       )}

//       {/* === MODAL === */}
//       {activeIndex !== null && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
//           <button
//             onClick={closeModal}
//             className="absolute top-4 right-4 text-white"
//           >
//             <X size={32} />
//           </button>
//           <button
//             onClick={prevImage}
//             className="absolute left-4 text-white"
//             aria-label="Previous"
//           >
//             <ChevronLeft size={40} />
//           </button>
//           <img
//             src={images[activeIndex]}
//             alt="Enlarged"
//             className="max-w-[90vw] max-h-[80vh] rounded-md shadow-xl"
//           />
//           <button
//             onClick={nextImage}
//             className="absolute right-4 text-white"
//             aria-label="Next"
//           >
//             <ChevronRight size={40} />
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }
