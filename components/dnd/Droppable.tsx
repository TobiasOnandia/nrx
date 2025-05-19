"use client";
import { useDroppable } from "@dnd-kit/core";
import React from "react";

interface DroppableProps {
  id: string;
  children: React.ReactNode;
}

export function Droppable({ id, children }: DroppableProps) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  const style = {
    transition: "all 0.2s ease-in-out",
    border: "2px dashed",
    borderRadius: "8px",
    padding: "16px",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
