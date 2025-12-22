const Nav = () => {
  return (
    <>
      <div className="flex bg-[#e0e2ff] items-center justify-between px-18 py-5">
        <h4 className="bg-[#32143f] text-white px-6 py-2 border-[3px] uppercase rounded-full tracking-wider text-sm">
          Targer audience
        </h4>

        <a href="https://github.com/Ronit-kukadiya" target="_blank">
          <button className="bg-[#bc90ff] px-6 py-2 border-2 uppercase rounded-full tracking-wider text-sm">
            Digital banking platform
          </button>
        </a>
      </div>
    </>
  );
};

export default Nav;
