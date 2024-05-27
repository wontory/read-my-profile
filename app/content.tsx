export default function Content() {
  return (
    <div tw="flex">
      <div tw="items-end flex flex-col p-8 w-80">
        <img src="https://github.com/wontory.png" width={200} height={200} />
        <div tw="items-end flex flex-col mt-5">
          <div tw="mt-2">Seoul, Korea</div>
          <div tw="mt-2">+10 123 456 789</div>
          <div tw="mt-2 font-medium text-black underline">
            devwontory@gmail.com
          </div>
          <div tw="mt-2 font-medium text-black underline">
            https://www.wontory.dev/
          </div>
        </div>
      </div>
      <div tw="flex flex-col justify-between p-8 w-140">
        <div tw="text-xl font-semibold">Frontend Developer</div>
        <div tw="text-5xl font-bold leading-tight">Wontory</div>
        <div tw="my-5 h-1 rounded bg-indigo-500"></div>
        <div tw="text-lg leading-relaxed text-slate-600">
          Innovative front-end developer skilled in React and Tailwind CSS,
          adept at building sleek and responsive user interfaces that captivate
          users' attention and enhance usability.
        </div>
      </div>
    </div>
  );
}
