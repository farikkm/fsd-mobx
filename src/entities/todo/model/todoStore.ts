import { makeAutoObservable, runInAction } from "mobx";
import { getTodo, getTodoById } from "shared/api/todos";
import { QueryParams, Todo } from "shared/api/todos/model";

class TodoStore {
  todoList: Todo[] = [];
  todo: Todo | null = null;
  isLoading: boolean = false;
  taskListError: string | null = null;
  taskError: string | null = null;
  isUpdateLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getTaskList = async (params: QueryParams) => {
    this.isLoading = true;
    try {
      const data = await getTodo(params);

      runInAction(() => {
        this.todoList = data;
      });
      console.log("Todo list fetched successfully", data);
    } catch (error) {
      runInAction(() => {
        this.taskListError = "Failed to fetch todo list";
      });
      console.error("Error fetching todo list", error);
    } finally {
      this.isLoading = false;
    }
  }

  getTaskById = async (id: number) => {
    this.isLoading = true;
    try {
      const data = await getTodoById(id);

      runInAction(() => {
        this.todo = data || null;
      });
      console.log("Todo fetched successfully", data);
    } catch (error) {
      runInAction(() => {
        this.taskError = "Failed to fetch todo";
      });
      console.error("Error fetching todo", error);
    } finally {
      this.isLoading = false;
    }
  }

  updateTodo = async (todo: Todo) => {
    console.log("Updating todo", todo);
    
    this.isUpdateLoading = true;
    try {
      await this.updateTodo(todo);
    } catch (error) {
      throw new Error("Failed to update todo");
    } finally {
      this.isUpdateLoading = false;
    }
  }
}

export const todoStore = new TodoStore();