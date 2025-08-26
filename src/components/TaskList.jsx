import React from 'react'



const TaskList = () => {

    const today = new Date().toLocaleDateString();


    return (
        <div
  id="tasklist"
  className="overflow-x-auto h-[53%] flex items-center justify-start gap-5 flex-nowrap py-5 w-full rounded-xl"
>
  
 <div className="flex-shrink-0 w-[300px] h-[240px] bg-yellow-200 rounded-xl p-3 flex flex-col justify-start shadow-lg hover:shadow-xl transition-shadow">
  <div className="flex justify-between items-start mb-2">
    <h2 className="font-semibold bg-red-500 h-7 px-2 rounded text-white inline-block">
      High
    </h2>
    <h4 className="text-sm font-semibold">{today}</h4>
  </div>

  <h2 className="font-bold text-lg mb-1">Make a Youtube video</h2>
  <p className="text-sm leading-5">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus necessitatibus rem amet beatae dolor neque!
  </p>
</div>

 <div className="flex-shrink-0 w-[300px] h-[240px] bg-yellow-200 rounded-xl p-3 flex flex-col justify-start shadow-lg hover:shadow-xl transition-shadow">
  <div className="flex justify-between items-start mb-2">
    <h2 className="font-semibold bg-red-500 h-7 px-2 rounded text-white inline-block">
      High
    </h2>
    <h4 className="text-sm font-semibold">{today}</h4>
  </div>

  <h2 className="font-bold text-lg mb-1">Make a Youtube video</h2>
  <p className="text-sm leading-5">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus necessitatibus rem amet beatae dolor neque!
  </p>
</div>

</div>

    )
}

export default TaskList