import { useState } from 'react';
import '../styles/TaskCarousel.css';
import TaskItem from './TaskItem';

const TaskCarousel = ({ tasks, deleteTask, toggleTask }) => {
    // The current task saving
    const [currentIndex, setCurrentIndex] = useState(0);

    // Next task function
    const nextTask = () => {
        // If reach the last- return tha start
        if (currentIndex === tasks.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };
    
    return (
        <div className="carousel-window">
            <div 
                className="carousel-track" 
                style={{
                    // The replacement of the task- the main logic
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 0.5s ease-in-out'
                }}
            >
                {tasks.map((task) => (
                    <div className="carousel-item" key={task.id} >
                        <TaskItem 
                            task={task} 
                            deleteTask={deleteTask} 
                            toggleTask={toggleTask} 
                        />
                    </div>
                ))}
            </div>

            {/* Next task button */}
            <button onClick={nextTask} style={{margin: '3px'}}>
                Next task
            </button>
        </div>
    );
};

export default TaskCarousel;