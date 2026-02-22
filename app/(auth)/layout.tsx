import React from "react";
interface Pros {
  children: React.ReactNode;
}
const layout = ({ children }: Pros) => {
  return <div>{children}</div>;
};

export default layout;
