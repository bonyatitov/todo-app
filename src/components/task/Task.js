import React, { useEffect, useRef } from 'react';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

import Timer from '../timer';
import './task.css';

const Task = ({
  id,
  description,
  condition,
  setCompleted,
  deleteTask,
  taskDate,
  timeMinutes,
  timeSecundes,
  active,
  updateTaskTime,
  toggleTimer,
}) => {
  const created = formatDistanceToNow(taskDate, { addSuffix: true });

  const timerIdRef = useRef(null);
  const startTimeRef = useRef(null);
  const durationRef = useRef(null);

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  const startTimer = () => {
    startTimeRef.current = Date.now();
    durationRef.current = Number(timeMinutes) * 60 + Number(timeSecundes);

    timerIdRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const remaining = durationRef.current - elapsed;

      if (remaining <= 0) {
        stopTimer();
        updateTaskTime(id, false, 0, 0);
        return;
      }

      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;
      updateTaskTime(id, true, minutes, seconds);
    }, 1000);
  };

  useEffect(() => {
    if (active) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => stopTimer();
  }, [active]);

  return (
    <div className="view">
      <input onChange={() => setCompleted(id)} className="toggle" type="checkbox" checked={condition} />
      <label>
        <span className="description">{description || 'Empty'}</span>
        <Timer
          timeMinutes={timeMinutes}
          timeSecundes={timeSecundes}
          active={active}
          toggleTimer={() => toggleTimer(id)}
        />
        <span className="created">{created}</span>
      </label>
      <button className="icon icon-edit"></button>
      <button onClick={() => deleteTask(id)} className="icon icon-destroy"></button>
    </div>
  );
};

export default Task;
