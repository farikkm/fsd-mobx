import {createBrowserRouter} from 'react-router-dom';
import { TodoListPage } from 'pages/todo-list-page';
import MainLayout from 'shared/ui/main-layout';

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