type Props = {
  variant: 'bloqueada' | 'desbloqueada' | 'cursando' | 'regular' | 'aprobada';
};

export default function ListItemInfo(props: Props) {
  return (
    <div className={`flex flex-col border border-app-border rounded-md px-4 py-2 space-y-2 ${props.variant === 'regular' || props.variant === 'aprobada' ? 'bg-app-border' : 'bg-app-background'}`}>
      <span className='font-semibold text-sm'>Nombre de la materia</span>
      <div className='flex flex-row items-start space-x-2'>
        {props.variant === 'bloqueada' && (
          <>
            <div className='w-4 h-4 rounded-full bg-app-danger'></div>
            <span className='font-medium text-sm'>No puede cursar</span>
          </>
        )}

        {props.variant === 'desbloqueada' && (
          <>
            <div className='w-4 h-4 rounded-full bg-app-success'></div>
            <span className='font-medium text-sm'>Puede cursar</span>
          </>
        )}

        {props.variant === 'cursando' && (
          <>
            <div className='w-4 h-4 rounded-full bg-app-blue'></div>
            <span className='font-medium text-sm'>Cursando</span>
          </>
        )}

        {props.variant === 'regular' && (
          <>
            <div className='w-4 h-4 rounded-full bg-app-warning'></div>
            <span className='font-medium text-sm'>Regular</span>
          </>
        )}

        {props.variant === 'aprobada' && (
          <>
            <div className='w-4 h-4 rounded-full bg-app-primary'></div>
            <span className='font-medium text-sm'>Aprobada</span>
          </>
        )}
        <span></span>
      </div>

      <div className="flex flex-col">
        
      </div>
    </div>
  );
}
