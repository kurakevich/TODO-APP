import styles from "./Todo.module.css";
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function Todo(props) {
  console.log(props);
  return (
    <div
      className={`${styles.todo} ${
        props.todo.isComplited ? styles.completedTodo : " "
      } `}
    >
      <div className={styles.todoText}>
        <RiTodoFill className={styles.todoIcon} /> {props.todo.text}
      </div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => props.deleteTodo(props.todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => props.toggleTodo(props.todo.id)}
      />
    </div>
  );
}

export default Todo;
