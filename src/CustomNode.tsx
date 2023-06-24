import React, { memo } from "react";
import { Handle, Position } from "reactflow";

function CustomNode(data: any) {
  return (
    <div
      className=" cursor-auto w-[150px] px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400"
      onClick={() => {
        alert("go to whiteboard");
      }}
    >
      <div className="flex">
        <div className="rounded-full w-[1px] h-1 flex justify-center items-center bg-gray-100 ">
          {data.data.emoji}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold truncate w-[90px]">
            {data.data.name}
          </div>
          <div className="text-gray-500">{data.data.job}</div>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Right}
        // className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Left}
        // className="w-16 !bg-teal-500"
      />
    </div>
  );
}

export default memo(CustomNode);
