import UserInfo from "@/components/home/UserInfo"

export default function Home () {
  return (
    <div className='w-screen h-screen bg-app-background flex justify-center items-center'>
      <div className='w-full p-8 max-w-screen-2xl h-full grid grid-cols-2'>
        <div className="border-r border-app-border flex flex-col">
          <UserInfo open/>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}