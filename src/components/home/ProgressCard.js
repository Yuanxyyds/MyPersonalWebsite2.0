import { useEffect, useRef, useState } from 'react';
import './../../style/home/progress-card.css';

const designTasks = ["User Research", "UI Design", "UI Rendering"];
const devTasks = ["Frontend", "Backend/ML", "Testing"];

export default function ProgressCard() {
    const [progress, setProgress] = useState(0);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [hasStarted, setHasStarted] = useState(false);
    const cardRef = useRef(null);

    // Observer to detect when card is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    // Animation logic once visible
    useEffect(() => {
        if (!hasStarted) return;

        const allTasks = ["", ...designTasks, ...devTasks];
        const totalTasks = allTasks.length;
        const totalDuration = (totalTasks - 1) * 600;
        const updateInterval = 50;
        const progressStep = 100 / (totalDuration / updateInterval);

        let pct = 0;
        const interval = setInterval(() => {
            pct += progressStep;
            if (pct >= 100) {
                setProgress(100);
                clearInterval(interval);
            } else {
                setProgress(pct);
            }
        }, updateInterval);

        allTasks.forEach((task, index) => {
            setTimeout(() => {
                setCompletedTasks(prev => [...prev, task]);
            }, index * 600);
        });

        return () => clearInterval(interval);
    }, [hasStarted]);

    const isCompleted = (task) => completedTasks.includes(task);

    const handleRestart = () => {
        setCompletedTasks([]);
        setProgress(0);
        setHasStarted(false);
    };

    return (
        <div className="progress-card" ref={cardRef} onClick={handleRestart}>
            <div className="card-header">
                <h4>
                    &lt;&nbsp;&gt; {progress === 100
                        ? 'Project Completed!'
                        : 'Coding in Progress...'}
                </h4>
                <span><h4>{progress.toFixed(0)}%</h4></span>
            </div>

            <div className="progress-bar">
                <div className={`progress-fill ${progress === 100 ? 'done' : ''}`} style={{ width: `${progress}%` }} />
            </div>

            <div className="phases">
                <div className='phase-container'>
                    <div className="phase">
                        <p className={`md`} style={{ marginBottom: '6px' }}>✎ Design</p>
                        {designTasks.map((task) => (
                            <p key={task} className={`small trans ${isCompleted(task) ? 'done' : 'undone'}`} style={{ marginBottom: '4px' }}>
                                {isCompleted(task) ? '✓ ' : '☐ '}{task}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='phase-container'>
                    <div className="phase">
                        <p className='md' style={{ marginBottom: '6px' }}>&lt;&nbsp;&gt; Develop</p>
                        {devTasks.map((task) => (
                            <p key={task} className={`small trans ${isCompleted(task) ? 'done' : 'undone'}`} style={{ marginBottom: '4px' }}>
                                {isCompleted(task) ? '✓ ' : '☐ '}{task}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
