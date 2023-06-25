import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosActions.module.css";

function TodosActions({
  deleteCompletedTodos,
  resetTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button
        title="Reset todos"
        onClick={resetTodos}
      >
        <RiRefreshLine viewBox="0 -2 24 24" />
      </Button>
      <Button
        title="Delete completed todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
