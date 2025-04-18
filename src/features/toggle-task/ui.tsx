import { Checkbox, Spin } from "antd";
import { TodoModel } from "entities/todo";
import { Todo } from "shared/api/todos/model";

interface ToggleTaskProps {
  todo: Todo;
}

export const ToggleTask = ({ todo }: ToggleTaskProps) => {
  const {
    todoStore: { updateTodo, isUpdateLoading },
  } = TodoModel;

  return isUpdateLoading ? (
    <Spin />
  ) : (
    <Checkbox
      onChange={(val) => updateTodo({ ...todo, completed: val.target.checked })}
    />
  );
};
