import { Card, Space } from "antd";
import { Link } from "react-router-dom";

interface TodoRowProps {
  id: number;
  title: string;
  action: React.ReactNode;
}

const TodoRow = ({ id, title, action }: TodoRowProps) => {
  return (
    <Card style={{ width: 600, margin: "10px" }}>
      <Space>
        {action}
        <Link to={`/${id}`}>{title}</Link>
      </Space>
    </Card>
  );
};

export default TodoRow;
