import { useState, useCallback } from "react";

export function useZoom() {
  const [zoom, setZoom] = useState(1);

  const zoomIn = useCallback(() => {
    setZoom(prev => {
      const newZoom = Math.min(prev + 0.1, 2);
      document.body.style.zoom = newZoom.toString();
      return newZoom;
    });
  }, []);

  const zoomOut = useCallback(() => {
    setZoom(prev => {
      const newZoom = Math.max(prev - 0.1, 0.5);
      document.body.style.zoom = newZoom.toString();
      return newZoom;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
    document.body.style.zoom = "1";
  }, []);

  return { zoom, zoomIn, zoomOut, resetZoom };
}
