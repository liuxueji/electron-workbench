import './index.less'
import moment from 'moment'

interface Iprops {
  title:String
  info:String
  endTime:moment.Moment
}
export default function ListItem(props:Iprops) {
  const {title,info,endTime} = props 
  return (
    <div className="list-item">
      <div className="list-item__left">
        <div className="list-item__name">{title}</div>
        <div className="list-item__info">{info}</div>
      </div>
      <div className="list-item__right">
        <div className="list-item__endTime">{endTime.format('Y-M-D HH:mm')}</div>
        <div className="list-item__finish-btn">完成</div>
      </div>
    </div>
  );
}
