import "./components/h"
import H from "./components/h";
import P from "./components/p";
import Img from "./components/img";
import "./globals.css";


export default function Home() {
  return (

    <div className="flex justify-center items-center h-screen bg-[var(--very-dark-blue-main-bg)] text-[var(--white)]">

    <div className="w-[280px] h-auto rounded-[10px] p-5 bg-[var(--very-dark-blue-card-bg)] shadow-[4px_10px_20px_35px_rgba(0,0,0,0.291)]">
    <div className="relative cursor-pointer">
        < Img cn="w-full h-auto block rounded-[10px] mb-[10px]" src="./image-equilibrium.jpg" alt=""  />
        <div className="absolute top-0 w-full h-full bg-[var(--cyan)] flex justify-center
        items-center rounded-[10px] opacity-0 transition-opacity duration-[400ms] hover:opacity-60" >
        <Img  src="/icon-view.svg" alt=""  />
        </div>
    </div> 
       <H  text= "Equilibrium #3429"/>
       <br />
      

       <P txt="Our Equilibrium collection promotes balance and calm" />
      <br />
    <div className=" flex justify-between text-center items-center ">
        <div className="flex items-center gap-1.5 text-[var(--cyan)]"> 
        <Img  cn="mt-[19px]" src="/icon-ethereum.svg" alt="" />
        <H h5="0.041 ETH" />
        </div>

      <div className="flex items-center justify-center gap-[5px] text-[var(--soft-blue)]">
      <Img cn="mt-[19px]" src="/icon-clock.svg" alt="" />
      <H h5="3 days left" />
      </div>
    </div>
<hr className="border-[1px] text[var((--soft-blue)] m-[16px]"  />

  <div className="flex items-center gap-3">
<Img cn="w-[35] h-[35] border rounded-[50%]" src="/image-avatar.png" alt=""/>
<P txt="Creation of "  span="Jules Wyvern" /> 


  </div>

</div>

    </div>
  );
}
