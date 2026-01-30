
const TaskFilter = ({ currentFilter, setFilter }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            {/* All filter */}
            <button 
                className={currentFilter === 'all' ? 'active-filter' : ''} 
                onClick={() => setFilter('all')}
            >
                All
            </button>
            
            {/* pending filter */}
            <button 
                className={currentFilter === 'pending' ? 'active-filter' : ''} 
                onClick={() => setFilter('pending')}
            >
                Pending
            </button>
            {/* complete filter */}
            <button 
                className={currentFilter === 'completed' ? 'active-filter' : ''} 
                onClick={() => setFilter('completed')}
            >
                Completed
            </button>
        </div>
    );
};

export default TaskFilter;