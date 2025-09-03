function Ex05() {
  return (
    <div className="relative w-[260px] h-[200px] bg-[#e0f7fa] border-2 border-[#b2ebf2] rounded-[10px] text-[#0369a1] p-3">
      <div className="relative w-[210px] h-[160px] bg-[#b3e5fc] border-2 border-[#81d4fa] text-[#0369a1] p-4">
        <p><b>Relative parent</b></p>
        <div className="absolute bottom-0 left-0 bg-[#0288d1] text-white px-4 py-2 rounded-md">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  )
}

export default Ex05;
