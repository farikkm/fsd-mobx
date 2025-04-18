import { httpClient } from "../http-client";
import { QueryParams, Todo } from "./model";

const SLUG = "todos";

export const getTodo = async (params: QueryParams): Promise<Todo[]> => {
  return httpClient.get(SLUG, { searchParams: params }).json<Todo[]>();
}

export const getTodoById = (id: number): Promise<Todo> => {
  return httpClient.get(`${SLUG}/${id}`).json<Todo>();
}

export const updateTodo = (todo: Todo): Promise<Todo> => {
  return httpClient.put(`${SLUG}/${todo.id}`, { json: todo }).json<Todo>();
}