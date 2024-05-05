'use client'

interface ProgressBarProps {
    percentage: number;
  }

export default function ProgressBar({ percentage }:ProgressBarProps) {
    return (
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden w-64 my-auto mx-5">
          <div className={`h-full bg-sky-800 rounded-full`} style={{ width: `${percentage}%` }}>
        
          </div>
        </div>
    )
  }
  


  /*   


      <span className="float-right mr-2 text-white font-bold">{`${percentage}%`}</span>

      */