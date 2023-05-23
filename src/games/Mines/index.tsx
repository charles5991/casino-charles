import React from "react";

import image from "./image.png";

export default {
  name: "Mines",
  short_name: "mines",
  description: "",
  creator: "2yWGEWW5hMtMbvGAKsqVxurQTKqTmSNBLTYUozG5Qdd7",
  theme_color: "#ff6a6a",
  image,
  app: React.lazy(() => import("./App")),
};
