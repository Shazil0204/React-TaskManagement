import transition from "../Components/transition";

function Home() {
  return (
    <div>
      <h1 className="w-4/5 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center text-[10vw] font-medium leading-none uppercase">
        Home
      </h1>
    </div>
  );
}

export default transition(Home);
