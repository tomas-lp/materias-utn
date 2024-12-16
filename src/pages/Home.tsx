import WelcomeStep1 from '@/components/welcome/WelcomeStep1';
import WelcomeStep2 from '@/components/welcome/WelcomeStep2';
import WelcomeStep3 from '@/components/welcome/WelcomeStep3';
import { useState } from 'react';

export default function Home() {
  const [welcomeStep, setWelcomeStep] = useState(1);

  return (
    <div className='w-screen h-screen bg-app-background flex justify-center items-center'>
      <div className='w-10/12 h-[70%] flex flex-row justify-center items-center space-x-16'>
        <WelcomeStep1
          variant={
            welcomeStep === 1 ? 'active' : welcomeStep < 1 ? 'before' : 'after'
          }
          onSubmit={()=> setWelcomeStep(2)}
        />
        <WelcomeStep2
          variant={
            welcomeStep === 2 ? 'active' : welcomeStep < 2 ? 'before' : 'after'
          }
          onSubmit={()=> setWelcomeStep(3)}
        />
        <WelcomeStep3
          variant={
            welcomeStep === 3 ? 'active' : welcomeStep < 3 ? 'before' : 'after'
          }
          onSubmit={()=> setWelcomeStep(1)}
        />
      </div>
    </div>
  );
}
