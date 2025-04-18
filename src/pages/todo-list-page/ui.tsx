import { Result, Space, Spin } from "antd";
import { TodoModel } from "entities/todo";
import TodoRow from "entities/todo/ui/todo-row";
import { ToggleTask } from "features/toggle-task";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const TodoListPage = observer(() => {
  const {
    todoStore: { getTaskList, todoList, taskListError, isLoading },
  } = TodoModel;

  useEffect(() => {
    console.log("TodoListPage mounted");
    // Fetch the todo list when the component mounts
    getTaskList({});
  }, []);

  if (taskListError) {
    return <Result status="error" title="Error" subTitle={taskListError} />;
  }

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <p>filter</p>
      {isLoading ? (
        <Spin size="large" style={{ margin: "0 auto", display: "block" }} />
      ) : (
        todoList.map((todo) => (
          <TodoRow
            key={todo.id}
            title={todo.title}
            id={todo.id}
            action={<ToggleTask todo={todo} />}
          />
        ))
      )}
    </Space>
  );
});
