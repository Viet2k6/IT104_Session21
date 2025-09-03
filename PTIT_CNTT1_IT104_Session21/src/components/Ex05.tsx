function Ex05() {
  return (
    <div className="relative w-[300px] h-[200px] bg-blue-200 font-semibold border border-gray-300 rounded-lg p-4">
      <span className="text-[#4482a2]">Relative parent</span>
      <div className="absolute bottom-0 left-0 w-[120px] h-[50px] bg-[#0ea5e9] text-white flex items-center justify-center text-sm rounded-lg shadow-md">
        Absolute child
      </div>
    </div>
  );
}

export default Ex05;
