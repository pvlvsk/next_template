import { ESizeWrapIcon } from "./types";

export const WrapIcon = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size: ESizeWrapIcon;
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
    >
      {children}
    </div>
  );
};
