import React, { useState, useEffect } from 'react'
import './Stopwatch.css';

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const [mode, setMode] = useState("stopwatch");

    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    function handleReset() {
        setSeconds(mode === "stopwatch" ? 0 : 25 * 60);
        setRunning(false);
    }

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            setSeconds((prev) => (mode === "stopwatch" ? prev + 1 : prev - 1));
        }, 1000);

        return () => clearInterval(interval);
    }, [running, mode]);

    useEffect(() => {
        if (mode === "pomodoro" && seconds === 0 && running) {
            setRunning(false);
            alert("Pomodoro done! Take a break 🍅");
        }
    }, [seconds, mode, running]);

    useEffect(() => {
        if (mode === "pomodoro" && running) {
            document.title = `⏳ ${formatTime(seconds)} - Focus!`;
        } else {
            document.title = "react-practice";
        }
    }, [seconds, running, mode]);

    return (
        <div className="timer-card">
            <h1 className="timer-title">⏱️ Stopwatch</h1>

            <div>
                <button
                    className={mode === "stopwatch" ? "mode-btn active" : "mode-btn"}
                    onClick={() => { setMode("stopwatch"); setSeconds(0); setRunning(false); }}
                >
                    Stopwatch
                </button>
                <button
                    className={mode === "pomodoro" ? "mode-btn active" : "mode-btn"}
                    onClick={() => { setMode("pomodoro"); setSeconds(25 * 60); setRunning(false); }}
                >
                    Pomodoro 🍅
                </button>
            </div>

            <h2 className="timer-display">{formatTime(seconds)}</h2>

            <div>
                <button className="btn-start" onClick={() => setRunning(true)}>Start</button>
                <button className="btn-pause" onClick={() => setRunning(false)}>Pause</button>
                <button className="btn-reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch