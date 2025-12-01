import { useState } from "react";

export default function Example() {
  const [selected, setSelected] = useState(null);

  const items = {
    mobile: {
      title: "Mobile friendly",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      image:
        "https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png",
    },
    performance: {
      title: "Performance",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
      image:
        "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png",
    },
    security: {
      title: "Security",
      description:
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.",
      image:
        "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png",
    },
    apis: {
      title: "Powerful APIs",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.",
      image: "",
    },
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-900">
        <div className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-base/7 font-semibold text-indigo-400">
              Deploy faster
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Everything you need to deploy your app
            </p>

            {/* GRID */}
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              {/* Mobile */}
              <div
                onClick={() => setSelected(items.mobile)}
                className="relative lg:row-span-2 cursor-pointer"
              >
                <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      Mobile friendly
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </p>
                  </div>
                  <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                      <img
                        alt=""
                        src={items.mobile.image}
                        className="size-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
              </div>

              {/* Performance */}
              <div
                onClick={() => setSelected(items.performance)}
                className="relative max-lg:row-start-1 cursor-pointer"
              >
                <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      Performance
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit
                      maiores impedit.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                    <img
                      alt=""
                      src={items.performance.image}
                      className="w-full max-lg:max-w-xs"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
              </div>

              {/* Security */}
              <div
                onClick={() => setSelected(items.security)}
                className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 cursor-pointer"
              >
                <div className="absolute inset-px rounded-lg bg-gray-800" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      Security
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                      Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                      suspendisse semper morbi.
                    </p>
                  </div>
                  <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                    <img
                      alt=""
                      src={items.security.image}
                      className="h-[min(152px,40cqw)] object-cover"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-ppx rounded-lg shadow-sm outline outline-white/15" />
              </div>

              {/* APIs */}
              <div
                onClick={() => setSelected(items.apis)}
                className="relative lg:row-span-2 cursor-pointer"
              >
                <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      Powerful APIs
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                      Sit quis amet rutrum tellus ullamcorper ultricies libero
                      dolor eget sem sodales gravida.
                    </p>
                  </div>
                  <div className="relative min-h-120 w-full grow">
                    <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                      <div className="flex bg-gray-900 outline outline-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                          <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                            NotificationSetting.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            App.jsx
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14"></div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              </div>
            </div>
          </div>
        </div>

        {/* MODAL */}
        {selected && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {selected.title}
              </h2>

              <p className="text-gray-600 mt-4">{selected.description}</p>

              {selected.image && (
                <img
                  src={selected.image}
                  alt=""
                  className="mt-6 rounded-xl w-full object-cover"
                />
              )}

              <button
                onClick={() => setSelected(null)}
                className="mt-8 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
