import { useEffect, useState } from "react";

interface Props {
  percent: number;
}

const CircularProgress = ({ percent }: Props) => {
  const config = {
    radius: 80,
    strokeWidth: 15,
  };

  const circumference = config.radius * 2 * Math.PI;
  const [value, setValue] = useState(circumference);

  function setProgress(percent: number) {
    const offset = circumference - (percent / 100) * circumference;
    setValue(offset);
  }

  useEffect(() => setProgress(percent));

  return (
    <>
      <div className="inline-flex items-center justify-center overflow-hidden rounded-full">
        <svg className="w-48 h-48 -rotate-90">
          <circle
            className="text-gray-300 "
            strokeWidth={`${config.strokeWidth}`}
            stroke="currentColor"
            fill="transparent"
            r={`${config.radius}`}
            cx={`${config.radius + config.strokeWidth}`}
            cy={`${config.radius + config.strokeWidth}`}
          />
          <circle
            className={
              percent > 50
                ? "text-green-500"
                : percent <= 10
                ? "text-red-500"
                : "text-yellow-500"
            }
            strokeWidth={`${config.strokeWidth}`}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={value}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={`${config.radius}`}
            cx={`${config.radius + config.strokeWidth}`}
            cy={`${config.radius + config.strokeWidth}`}
          />
        </svg>
        <span
          className={
            "absolute text-3xl font-semibold " +
            (percent > 50
              ? "text-green-500"
              : percent <= 10
              ? "text-red-500"
              : "text-yellow-500")
          }
        >
          {percent}%
        </span>
      </div>
    </>
  );
};

export default CircularProgress;
