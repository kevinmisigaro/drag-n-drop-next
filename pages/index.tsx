import DraggableItem from "@/components/DraggableItem";
import DropTarget from "@/components/DropTarget";
import { useState } from "react";

export default function Index() {
  const [originalList, setOriginalList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
  ]);


  return (
    <div className="p-20">
      <h1>Drag and Drop Example</h1>
      <div className="mb-10" style={{ display: "flex" }}>
        {originalList.map((x) => (
          <DraggableItem name={x} key={x} />
        ))}
      </div>
      <DropTarget list={originalList} setList={setOriginalList} />
    </div>
  );
}
