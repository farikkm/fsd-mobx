import { lazy } from 'react';
import {createBrowserRouter} from 'react-router-dom';
import MainLayout from 'shared/ui/main-layout';

const TodoListPage = lazy(() =>
  import('pages/todo-list-page').then(module => ({
    default: module.TodoListPage,
  }))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TodoListPage />
      },
      {
        path: ":id",
        element: <div>To-do Detail</div>
      }
    ]
  }
]);