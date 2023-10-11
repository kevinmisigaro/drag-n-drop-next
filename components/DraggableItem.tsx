import React from "react";

const DraggableItem = ({
  name,
  onRemove,
}: {
  name?: string;
  onRemove?: () => void;
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", name!);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        padding: "8px",
        margin: "8px",
        backgroundColor: "lightblue",
        cursor: "move",
      }}
    >
      <div>{name}</div>
      <div
        onClick={onRemove}
        className="text-center font-bold mt-4 text-transparent hover:text-black cursor-pointer"
      >
        X
      </div>
    </div>
  );
};

export default DraggableItem;
