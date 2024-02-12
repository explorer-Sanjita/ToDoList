import './TaskList.css';
import Button from './Button.jsx';

const TaskList = ({tasks,onDeleteTask,onChangeTask}) => {
    return(
        <>
            <ol style={{ textAlign: 'left' }}>
                {tasks.map((task)=>{
                    return(<li key={task.id} >
                        <input 
                        type="checkbox"
                        checked={task.done}
                        onChange={()=> onChangeTask({...task,done:!task.done})} />
                        <span className={task.done?'completed':'not-completed'}>{task.text}</span>
                        
                        <Button onClick={()=>onDeleteTask(task.id)}>Delete</Button> 
                        {/* beside every task, there is option to delete the task */}
                    </li>
                    )
                })}
            </ol>
        </>
    )
}

export default TaskList;