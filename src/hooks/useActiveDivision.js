import { useState } from "react";

export default function useActiveDivision() {
  const [activeDivision, setActiveDivision] = useState(null);
  return { activeDivision, setActiveDivision };
}
