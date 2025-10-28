"use client";

import React from "react";

function Book() {
  return (
    <>
      <div className="book-module_wrap relative inline-block w-fit perspective-midrange">
        <div className="book-module relative aspect-(--aspect-ratio) w-fit rotate-0 transition-all duration-300 ease-out transform-3d">
          <div className="book-module_inner bg-linear-to-br from-white to-pink-100">
            <div className="book-module_body">
              <div className="book-module_bind relative z-[1] bg-linear-to-r from-neutral-500 via-neutral-600 to-neutral-700" />
              <div className="book-module_content">
                <img
                  src="https://homepage.momocdn.net/img/momo-amazone-s3-api-250821154232-638913877527374430.png"
                  alt="Product Foundation Tranning"
                  className="absolute top-4 right-4 w-2 select-none"
                />
                <img
                  className="absolute right-4 bottom-4 h-8 select-none"
                  src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg"
                ></img>
                <div className="text-lg font-bold text-neutral-900">
                  Product Foundation Tranning
                </div>
              </div>
            </div>
          </div>
          <div className="book-module_page" />
          <div className="book-module_back" />
        </div>
      </div>
      <style jsx>{`
        .book-module_wrap{
          --book-width: 196;
          --book-default-width: 196;
          --book-color: var(--color-neutral-100);
          --book-text-color: var(--color-neutral-900);
          --book-depth: 26cqw;
          --book-border-radius: 6px 4px 4px 6px;
          --hover-rotate: -20deg;
          --hover-scale: 1.066;
          --hover-translate-x: -8px;
          --aspect-ratio: 49 / 60;
          --bg-shadow: linear-gradient(90deg, #fff0 0%, #fff0 12%, #ffffff40 29.25%, #fff0 50.5%, #fff0 75.25%, #ffffff40 91%, #fff0 100%), linear-gradient(90deg, #00000008 0%, #0000001a 12%, #0000 30%, #00000005 50%, #0003 73.5%, #00000080 75.25%, #00000026 85.25%, #0000 100%);
        }
        .book-module{
          container-type: inline-size;
          min-width: calc(var(--book-default-width) * 1px);
        }
        .book-module_inner{
          width: calc(var(--book-width) * 1px);
          border-radius: var(--book-border-radius);
          height: 100%;
          overflow: hidden;
          transform: translateZ(0);
          box-shadow: 0 1px 1px #00000005, 0 4px 8px -4px #0000001a, 0 16px 24px -8px #00000008;
          min-width: calc(var(--book-width) * 1px);
          position: absolute;
        }
        .book-module_inner:after{
          content: "";
          border: 1px solid var(--color-neutral-200);
          border-radius: inherit;
          pointer-events: none;
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          box-shadow: inset 0 1px 2px #ffffff4d;
        }
        .book-module_body{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          justify-content: flex-start;

        }
       
        .book-module_bind{
          {/* background: var(--bg-shadow); */}
          {/* opacity: .2; */}
          min-width: 8.5%;
          height: 100%;
        }
        .book-module_content{
          width: 100%;
          padding: 8%;
          container-type: inline-size;
        }
        .book-module_page{
          height: calc(100% - 6px);
          width: calc(var(--book-depth) - 2px);
          transform: translateX(calc(var(--book-width)*1px - var(--book-depth)/2 - 3px))rotateY(90deg)translateX(calc(var(--book-depth)/2));
          position: absolute;
          top: 3px;
          background: linear-gradient(90deg, #eaeaea 0%, #0000 70%), linear-gradient(#fff, #fafafa);
        }
        .book-module_back{
          width: calc(var(--book-width) * 1px);
          border-radius: var(--book-border-radius);
          height: 100%;
          transform: translateZ(calc(-1 * var(--book-depth)));
          position: absolute;
          left: 0;
          background: var(--book-color);
        }
        .book-module_wrap:hover .book-module{
          transform: rotateY(var(--hover-rotate)) scale(var(--hover-scale)) translateX(var(--hover-translate-x));
        }
      `}</style>
    </>
  );
}

export default Book;
