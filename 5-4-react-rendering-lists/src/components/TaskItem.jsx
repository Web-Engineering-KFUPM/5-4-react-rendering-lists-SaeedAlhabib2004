import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task" key={task.id}>
      <label className="taskMain">
        {/* Checkbox toggles task completion */}
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />
        {/* Show due badge only if task is not done */}
        {!task.isDone && <DueBadge dueDate={task.dueDate} />}
        {/* Task title */}
        <span className="title">{task.title}</span>
      </label>
      {/* Delete button calls onDelete */}
      <button
        className="ghost"
        aria-label="Delete task"
        onClick={() => onDelete(task.id)}
      >
        ✕
      </button>
    </li>
  );
}