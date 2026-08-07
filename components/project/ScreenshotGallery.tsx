"use client";

import { useState } from "react";
import Image from "next/image";

type ScreenshotGalleryProps = {
  images: string[];
  projectTitle: string;
};

export default function ScreenshotGallery({
  images,
  projectTitle,
}: ScreenshotGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Screenshots Grid */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div key={image} className="text-center">
            {/* Phone Preview */}
            <button
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group mx-auto block w-full max-w-[280px] cursor-zoom-in"
              aria-label={`View ${projectTitle} screenshot ${index + 1}`}
            >
              <div className="relative w-full overflow-hidden rounded-[2rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl transition duration-300 group-hover:-translate-y-2 group-hover:shadow-blue-200">
                
                {/* Phone Speaker */}
                <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-gray-900" />

                {/* Screenshot */}
                <div className="overflow-hidden rounded-[1.4rem] bg-white">
                  <Image
                    src={image}
                    alt={`${projectTitle} screenshot ${index + 1}`}
                    width={500}
                    height={900}
                    className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </button>

            {/* Label */}
            <p className="mt-4 text-sm font-medium text-gray-500">
              Screen {index + 1}
            </p>
          </div>
        ))}
      </div>

      {/* Full Screen Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-gray-900 shadow-lg transition hover:bg-gray-200"
            aria-label="Close preview"
          >
            ×
          </button>

          {/* Large Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={`${projectTitle} enlarged screenshot`}
              width={700}
              height={1200}
              className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}