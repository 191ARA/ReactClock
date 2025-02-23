import React, { useState, useEffect } from "react";
import "./App.css"; 

function Clock() {
  // Состояние для хранения 
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => setTime(new Date()), 10);

    // Очищаем интервал что бы не было перегрузки
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container text-center mt-5">
      {/* Заголовок */}
      <h1 className="text-primary">Clock</h1>

      {/* Дата и время */}
      <div className="clock-box p-4 rounded shadow">
        {/* Отображение даты*/}
        <p className="fs-3">{time.toLocaleDateString()}</p>

        {/* Отображаем время */}
        <p className="fs-2 fw-bold">
          {time.toLocaleTimeString("ru-RU", { hour12: false })}.
          {time.getMilliseconds()}
        </p>
      </div>
    </div>
  );
}

// Рендерит Clock
export default function App() {
  return <Clock />;
}



