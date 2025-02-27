import { Plus, X } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import WelcomeListItemInfo from './WelcomeListItemInfo';
import { Comision, Materia } from '@/types/data';

type Props = {
  materia: Materia;
  variant: 'default' | 'selected';
  handleAdd?: (comision: Comision) => void;
};

export default function WelcomeListItem(props: Props) {
  return (
    <>
      {props.variant === 'default' && (
        <div
          className='flex items-center justify-between h-10 w-full rounded-base border-2 text-text font-base border-border bg-bw px-3 py-2 text-sm cursor-pointer'
          data-tooltip-id={props.materia.materia}
          data-tooltip-place='right-start'
          data-tooltip-offset={24}
          data-tooltip-position-strategy='absolute'
        >
          <div className='flex gap-4 items-center'>
            <span className='flex items-center justify-center select-none text-center bg-app-primary text-app-background m-0 rounded-full w-4 h-4 font-bold text-[10px]'>
              {props.materia.nivel}
            </span>
            <span className='select-none'>{props.materia.materia}</span>
          </div>
          <Plus className='text-app-primary w-4 h-4' />
        </div>
      )}

      {props.variant === 'selected' && (
        <div className='flex items-center justify-between h-10 w-full rounded-base border-2 text-text font-base border-border bg-bg px-3 py-2 text-sm cursor-pointer'>
          <div className='flex gap-4 items-center'>
            <span className='flex items-center justify-center select-none text-center bg-app-primary text-app-background m-0 rounded-full w-4 h-4 font-bold text-[10px]'>
              {props.materia.nivel}
            </span>
            <span className='select-none'>{props.materia.materia}</span>
          </div>
          <X className='text-app-primary w-4 h-4' />
        </div>
      )}

      <Tooltip
        id={props.materia.materia}
        clickable
        openOnClick
        globalCloseEvents={{ scroll: true, clickOutsideAnchor: true }}
        noArrow
        border='transparent'
        style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
      >
        <WelcomeListItemInfo
          materia={props.materia}
          handleAdd={props.handleAdd}
        />
      </Tooltip>
    </>
  );
}
