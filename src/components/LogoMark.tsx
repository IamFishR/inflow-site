/** Play / launcher icon (512) copied from the Android app. */
export const LOGO_SRC = "/icon-512.png";

export function LogoMark({
  className = "h-7 w-7 rounded-md",
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <img
      src={LOGO_SRC}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden
    />
  );
}
