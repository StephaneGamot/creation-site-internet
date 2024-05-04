'use client'

interface ProgressBarProps {
    color: string;
    percentage: number;
  }

export default function ProgressBar({ color, percentage }:ProgressBarProps) {
    return (
        <div className="relative h-5 w-full bg-gray-200 rounded-full overflow-hidden w-64 my-auto mx-5">
          <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}>
        
          </div>
        </div>
    )
  }
  


  /*   


      <span className="float-right mr-2 text-white font-bold">{`${percentage}%`}</span>

      */