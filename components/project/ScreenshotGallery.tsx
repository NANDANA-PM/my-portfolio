"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

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
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div key={image} className="text-center group flex flex-col items-center">
            {/* Phone Preview */}
            <button
              type="button"
              onClick={() => setSelectedImage(image)}
              className="relative mx-auto block w-full max-w-[280px] cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2.5rem]"
              aria-label={`View ${projectTitle} screenshot ${index + 1}`}
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              <div className="relative w-full overflow-hidden rounded-[2rem] border-[8px] border-zinc-900 bg-zinc-900 shadow-xl transition-transform duration-300 group-hover:-translate-y-2 dark:border-zinc-800 dark:bg-zinc-800">
                
                {/* Phone Speaker */}
                <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-zinc-900 dark:bg-zinc-800" />

                {/* Screenshot */}
                <div className="overflow-hidden rounded-[1.4rem] bg-background">
                  <Image
                    src={image}
                    alt={`${projectTitle} screenshot ${index + 1}`}
                    width={500}
                    height={900}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </button>

            {/* Label */}
            <div className="mt-6 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              Screen {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close preview"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Large Image */}
          <div
            className="relative h-full max-h-[90vh] w-full max-w-[500px] flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-[2rem] border-[8px] border-zinc-900 bg-zinc-900 shadow-2xl dark:border-zinc-800 dark:bg-zinc-800">
              {/* Phone Speaker */}
              <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-zinc-900 dark:bg-zinc-800" />
              
              <div className="overflow-hidden rounded-[1.4rem] bg-background">
                <Image
                  src={selectedImage}
                  alt={`${projectTitle} enlarged screenshot`}
                  width={700}
                  height={1200}
                  className="h-auto max-h-[85vh] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}