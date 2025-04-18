import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../../shared/ui/main-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>To-do List</div>
      },
      {
        path: ":id",
        element: <div>To-do Detail</div>
      }
    ]
  }
])