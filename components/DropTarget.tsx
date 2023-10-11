// components/DropTarget.tsx
import React, { ReactNode, useState } from 'react';
import DraggableItem from './DraggableItem';

const DropTarget = ({list, setList}:{ list: string[],setList: any}) => {
  const [items, setItems] = useState<string[]>([]);


  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    setItems([...items, data]);
    setList(list.filter(x => x !== data))
  };

  const handleRemove = (index: number, item: string) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setList((prevState:any) => [...prevState, item]);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        border: '2px dashed gray',
        minHeight: '100px',
        padding: '16px',
      }}
    >
      {
        items.length > 0 && items.map((item, index) => (
          <DraggableItem
            key={index}
            name={item}
            onRemove={() => handleRemove(index, item)}
          />
        ))
      }
    </div>
  );
};

export default DropTarget;
