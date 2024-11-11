import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [canPlayAudio, setCanPlayAudio] = useState(false);

  useEffect(() => {
    if (canPlayAudio || page > 0) {
      const audio = new Audio("/audios/page-flip-01a.mp3");
      audio.play();
    }
  }, [page, canPlayAudio]);

  return (
    <>
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex flex-col justify-between">
  <a
    className="pointer-events-auto mt-10 ml-10 "
    href="https://github.com/Karan3304"
  >
    <img className="w-10 sm:w-20 rounded-full duration-300 hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.8)]" src="/images/github_image.png" />
  </a>
  <div className="w-full overflow-auto pointer-events-auto flex justify-center sm:items-end mb-10 sm:mb-0">
    <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
      <button className="px-4 py-3 rounded-full text-lg uppercase shrink-0 border border-transparent transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.8)] hover:border-white font-dancing">
        About me
      </button>
      {/* <button>
          className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
            page === pages.length
              ? "bg-white/90 text-black"
              : "bg-black/30 text-white"
          }`}
          onClick={() => setPage(pages.length)}
        >
          Back Cover
        </button> */}
    </div>
  </div>
</main>


      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Hi,This is Karan
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              and this is my personal
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Developer Portfolio
            </h2>
            {/* <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Ultimate Guide
            </h2> */}
            {/* <h2 className="shrink-0 text-white text-9xl font-medium">
              Tutorials
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Practice
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>*/}
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Hi,This is Karan
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              and this is my personal
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Developer Portfolio
            </h2>
            {/* <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Ultimate Guide
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Tutorials
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Practice
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2> */}
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-20 text-white font-bold flex flex-col space-y-4 lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:text-center lg:text-5xl sm:top-0 sm:right-4 sm:left-auto sm:transform-none sm:text-2xl sm:text-right font-blackletter">
  <div >
    MERN Stack Developer
  </div>
  <div>
    Web2 and Web3 Aficionado
  </div>
</div>

    </>
  );
};
