// components/dnd/Draggable.tsx
"use client";
import { useDraggable } from "@dnd-kit/core";
import React from "react";

interface DraggableProps {
  id: string; // El ID único para este elemento arrastrable
  children: React.ReactNode;
}

export function Draggable({ id, children }: DraggableProps) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
  });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </div>
  );
}
