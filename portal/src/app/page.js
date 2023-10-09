import Image from 'next/image';
import StatusofRecords from './pages/stats';
import Signin from './pages/signin';
import Signup from './pages/signup';



   //url(http://drive.google.com/uc?export=view&id=1x5FBM3hnFmBiz2dTOtmcoVW8ufDxJcaS)

   
export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat "  >

      <Signin/>
    
     
    </div>
  );
}
