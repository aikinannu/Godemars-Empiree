// Example utility to calculate node positions in a circular layout
export function positionNodes(count, radius = 150) {
  return Array.from({ length: count }).map((_, i) => {
    const angle = (i / count) * 2 * Math.PI;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  });
}
// Example utility to calculate node positions in a circular layout
export function positionNodes(count, radius = 150) {
  return Array.from({ length: count }).map((_, i) => {
    const angle = (i / count) * 2 * Math.PI;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  });
}
