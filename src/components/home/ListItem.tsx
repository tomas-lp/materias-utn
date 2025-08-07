import { Tooltip } from 'react-tooltip';
import ListItemInfo from './ListItemInfo';
import { Materia } from '@/types/data';

type Props = {
  materia: Materia;
  variant: 'bloqueada' | 'desbloqueada' | 'cursando' | 'regular' | 'aprobada';
  puedeCursar:
    | {
        puede?: undefined;
        noCumpleRegular?: undefined;
        noCumpleAprobada?: undefined;
      }
    | {
        puede: boolean;
        noCumpleRegular: string[];
        noCumpleAprobada: string[];
      };
};

export default function ListItem(props: Props) {
  return (
    <div
      className={`flex w-full overflow-hidden whitespace-nowrap items-center justify-between h-10 rounded-base border-2 text-text font-base border-border bg-bw text-sm cursor-pointer px-4 py-5 hover:bg-app-border ${
        props.variant === 'regular' || props.variant === 'aprobada'
          ? 'bg-app-border'
          : 'bg-app-background'
      }`}
      data-tooltip-id={props.materia.id}
      data-tooltip-place='right-start'
      data-tooltip-offset={24}
      data-tooltip-position-strategy='absolute'
    >
      <div className='flex gap-4 items-center'>
        <span className='flex justify-center items-center select-none text-center bg-app-primary text-app-background m-0 rounded-full w-4 h-4 font-bold text-[10px]'>
          {props.materia.nivel}
        </span>
        <span className='select-none max-w-44 overflow-hidden whitespace-nowrap text-nowrap text-ellipsis'>
          {props.materia.materia}
        </span>
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

      <Tooltip
        id={props.materia.id}
        clickable
        openOnClick
        globalCloseEvents={{ scroll: true, clickOutsideAnchor: true }}
        noArrow
        border='transparent'
        style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
      >
        <ListItemInfo
          materia={props.materia}
          variant={props.variant}
          puedeCursar={props.puedeCursar}
        ></ListItemInfo>
      </Tooltip>
    </div>
  );
}
