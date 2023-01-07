import './index.less';
import ListItem from '@/pages/TaskList/components/ListItem';
import { Input, Tag, DatePicker, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import moment from 'moment';

type TaskT = {
  title: string;
  desc: string;
  endTime: moment.Moment;
};

export default function TaskList() {
  const [isCreate, setIsCreate] = useState(false);
  const [ddl, setDDL] = useState<moment.Moment>(moment());
  const [tasks, setTasks] = useState<TaskT[]>([]);
  const [curTitle, setCurTitle] = useState('');


  const handleSelectTime = (value: any) => {
    setDDL(value)
  };

  const handleCreate = () => {
    setTasks([...tasks,{
      title:curTitle,
      endTime:ddl,
      desc:''
    }])
    setCurTitle('')
  };

  const handleQuickCreate = (offSet: number) => {
    const d = new Date();
    const time =
      d
        .toLocaleDateString()
        .split('/')
        .join(' ') + ' 18:00:00';
    let momentTime = moment(time).add(offSet, 'd');
    setDDL(momentTime);
  };
  return (
    <div className="task-list">
      <h1>TaskList</h1>
      <div className="add-task-btn">
        <PlusOutlined className="plus-icon" />
        <Input
          placeholder="创建任务"
          className="input"
          onChange={(e:any) => {
            setCurTitle(e.target.value);
          }}
          value={curTitle}
        />
      </div>
      <div className="select-time">
        <Tag
          color="lime"
          onClick={() => {
            handleQuickCreate(0);
          }}
        >
          今天
        </Tag>
        <Tag
          color="green"
          onClick={() => {
            handleQuickCreate(1);
          }}
        >
          明天
        </Tag>
        <DatePicker
          showTime
          onOk={handleSelectTime}
          placeholder="选择任务截至日期"
          value={ddl}
          size="small"
        />
        <Button
          type="primary"
          size="small"
          onClick={handleCreate}
          disabled={curTitle === ''}
        >
          创建
        </Button>
      </div>
      <div className="task-list-wrapper">
        {tasks.map(i => (
          <ListItem title={i.title} desc="" endTime={i.endTime} key={i.title}/>
        ))}
      </div>
    </div>
  );
}
