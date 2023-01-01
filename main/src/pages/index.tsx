import './index.less'
import MainMenu from '@/pages/MainMenu';
import TaskList from '@/pages/TaskList';

export default function IndexPage() {
  return (
    <div className="page container">
      <MainMenu/>
      <TaskList/>
    </div>
  );
}
