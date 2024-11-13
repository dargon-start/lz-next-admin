
'use client'

import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { theme } from "antd";
export default function DragAndDrop(){

  const { token } = theme.useToken();

  const todoItems = [
    "Schedule perm",
    "Rewind VHS tapes",
    "Make change for the arcade",
    "Get disposable camera developed",
    "Learn C++",
    "Return Nintendo Power Glove",
  ];

  const doneItems = ["Pickup new mix-tape from Beth"];

  // group配置配型相同值，拖放允许在父级(列表)之间传输值

  const [todoList,todos] = useDragAndDrop<HTMLUListElement, string>(todoItems,{
    group: 'todoList',
    selectedClass: "bg-blue-500 text-white",
    multiDrag:true,
  })
  const [doneList,dones] = useDragAndDrop<HTMLUListElement, string>(doneItems,{
    group: 'todoList', // 拖拽组
    selectedClass: "bg-blue-500 text-white", // 拖拽选中时的样式
    multiDrag:true, // 允许拖拽多个元素
  })


  return (
    <div className="flex h-[400px]">
      <div className="w-[400px]">
        <h2 className="text-center text-xl">Todos</h2>
        <ul ref={todoList} className="border-solid border-2 rounded h-[90%]">
          {todos.map((todo) => (
            <li className="p-2.5" key={todo}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[400px]">
        <h2 className="text-center text-xl" >complete</h2>
        <ul ref={doneList} className="border-solid border-2 rounded ml-2.5 h-[90%] ">
          {dones.map((done) => (
              <li className="p-2.5" key={done} style={{ color: token.colorTextQuaternary }}>
              {done}
            </li>
          ))}
        </ul>
      </div>  
    </div>
  )
}