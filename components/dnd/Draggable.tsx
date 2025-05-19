// components/dnd/Draggable.tsx
"use client";
import { useDraggable } from "@dnd-kit/core";
import React from "react";

interface DraggableProps {
  id: string;
  children: React.ReactNode;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  hideOriginal?: boolean;
  isPositionedAbsolute?: boolean;
}

export function Draggable({
  id,
  children,
  x = 0,
  y = 0,
  width,
  height,
  hideOriginal = true, // Por defecto, oculta el original (útil para sidebar)
  isPositionedAbsolute = false, // Por defecto, no posiciona absolutamente (útil para sidebar)
}: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
    });

  const style: React.CSSProperties = {
    ...(isPositionedAbsolute && {
      position: "absolute",
      left: x,
      top: y,
      width: width || "auto",
      height: height || "auto",
    }),
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : "none",
    opacity: isDragging && hideOriginal ? 0 : 1,
    cursor: isDragging ? "grabbing" : "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}
