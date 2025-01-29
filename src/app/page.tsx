import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="box-border flex flex-col items-center justify-between">
<div className="flex flex-col md:flex-row w-full p-4 border-b-0 md:border-b border-gray">
      
        <div className="w-full md:hidden">
          <h1 className="text-h1 text-purple font-bold pl-4 no-underline underline-none">1.0</h1>
      
<div className="border-b border-gray my-2 hidden md:block"></div>
        </div>

     
        <h1 className="text-h1 text-purple font-bold hidden md:block">1.0</h1>
        <div className="border-b border-gray my-2  md:none"></div>
  
        <h2 className="text-h2 text-purple font-bold flex-grow md:text-center pl-4 sm:pl-4 text-left ">
          Наши услуги
        </h2>

      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <Slider />
      </div>
    </main>
  );
}