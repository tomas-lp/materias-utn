import { Plus } from "lucide-react"

type Props = {
  number: string,
  name: string,
  variant: 'default' | 'selected'
}

export default function WelcomeListItem (props: Props) {
  return (
    <div className={`flex justify-between items-center border border-app-border rounded-md px-4 py-2 ${props.variant === 'selected' && 'bg-app-border'}`}>
      <div className="flex gap-4 items-center">
      <span className="select-none text-center bg-app-primary text-app-background m-0 rounded-full w-4 h-4 font-bold text-[10px]">{props.number}</span>
      <span className="select-none">{props.name}</span>
      </div>
      <Plus className={`text-app-primary w-4 h-4 cursor-pointer ${props.variant === 'selected' && 'rotate-45'}`}/>
    </div>
  )
}