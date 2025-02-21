import { Tooltip } from 'react-tooltip'
import ListItemInfo from './ListItemInfo';
import ReactDOMServer from 'react-dom/server';

type Props = {
  number: number;
  name: string;
  variant: 'bloqueada' | 'desbloqueada' | 'cursando' | 'regular' | 'aprobada';
};

export default function ListItem(props: Props) {
  return (
    <div
      className={`flex w-full overflow-hidden whitespace-nowrap justify-between items-center border border-app-border rounded-md px-4 py-5 ${props.variant === 'regular' || props.variant === 'aprobada' ? 'bg-app-border' : 'bg-app-background'}`}
      data-tooltip-id={props.name}
      data-tooltip-html={ReactDOMServer.renderToString(<ListItemInfo variant={props.variant}></ListItemInfo>)}
      data-tooltip-place='right-start'
      data-tooltip-offset={24}
      data-tooltip-position-strategy='fixed'
    >
      <div className='flex gap-4 items-center'>
        <span className='select-none text-center bg-app-primary text-app-background m-0 rounded-full w-4 h-4 font-bold text-[10px]'>
          {props.number}
        </span>
        <span className='select-none max-w-44 overflow-hidden whitespace-nowrap text-nowrap text-ellipsis'>{props.name}</span>
      </div>

      {props.variant === 'bloqueada' && (
        <div className={`w-4 h-4 rounded-full bg-app-danger`}></div>
      )}

      {props.variant === 'desbloqueada' && (
        <div className={`w-4 h-4 rounded-full bg-app-success`}></div>
      )}

      {props.variant === 'cursando' && (
        <div className={`w-4 h-4 rounded-full bg-app-blue`}></div>
      )}

      {props.variant === 'regular' && (
        <div className={`w-4 h-4 rounded-full bg-app-warning`}></div>
      )}

      {props.variant === 'aprobada' && (
        <div className={`w-4 h-4 rounded-full bg-app-primary`}></div>
      )}

      <Tooltip id={props.name} clickable noArrow border='transparent' style={{backgroundColor: 'transparent', margin: 0, padding: 0}}/>
    </div>
  );
}
