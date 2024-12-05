import { useState } from "react";

interface ImgWithTooltipProps {
  /**
   * The source URL of the image
   */
  src: string;
  /**
   * The alt text for the image, which also serves as tooltip content
   */
  alt: string;
  /**
   * Optional className for the image element
   * @default "h-8 w-10"
   */
  imgClassName?: string;
  /**
   * Optional className for the tooltip container
   * @default "absolute top-full left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white font-semibold px-2 py-1 rounded-full"
   */
  tooltipClassName?: string;
}

export default function ImgWithTooltip({
  src,
  alt,
  imgClassName = "h-8 w-10",
  tooltipClassName = "absolute top-full left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white font-semibold px-2 py-1 rounded-full",
}: ImgWithTooltipProps): JSX.Element {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <img
        className={imgClassName}
        src={src}
        alt={alt}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && <div className={tooltipClassName}>{alt}</div>}
    </div>
  );
}
