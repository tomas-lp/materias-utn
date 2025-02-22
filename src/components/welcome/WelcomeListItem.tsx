import { Plus, X } from 'lucide-react';

type Props = {
  number: string;
  name: string;
  variant: 'default' | 'selected';
};

export default function WelcomeListItem(props: Props) {
  return (
    <>
      {props.variant === 'default' && (
        <div className='flex items-center justify-between h-10 w-full rounded-base border-2 text-text font-base border-border bg-bw px-3 py-2 text-sm cursor-pointer'>
          <div className='flex gap-4 items-center'>
            <span className='flex items-center justify-center select-none text-center bg-app-primary text-app-background m-0 rounded-full w-4 h-4 font-bold text-[10px]'>
              {props.number}
            </span>
            <span className='select-none'>{props.name}</span>
          </div>
          <Plus className='text-app-primary w-4 h-4' />
        </div>
      )}

      {props.variant === 'selected' && (
        <div className='flex items-center justify-between h-10 w-full rounded-base border-2 text-text font-base border-border bg-bg px-3 py-2 text-sm cursor-pointer'>
          <div className='flex gap-4 items-center'>
            <span className='flex items-center justify-center select-none text-center bg-app-primary text-app-background m-0 rounded-full w-4 h-4 font-bold text-[10px]'>
              {props.number}
            </span>
            <span className='select-none'>{props.name}</span>
          </div>
          <X className='text-app-primary w-4 h-4' />
        </div>
      )}
    </>
  );
}
