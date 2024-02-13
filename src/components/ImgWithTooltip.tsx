import { useState } from "react";

export default function ImgWithTooltip({ src, alt }: { src: string, alt: string }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative inline-block">
      <img className="h-8 w-10" src={src} alt={alt} onMouseOver={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)} />
      {showTooltip && <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white font-semibold px-2 py-1 rounded">{alt}</div>}
    </div>
  );
}