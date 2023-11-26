export default function InputBox(props) {
  return (
    <div className="flex flex-column justify-center">
      <input
        className="border rounded-sm w-[270px] h-[38px] border-slate-200  
        pl-2 py-3 placeholder:text-sm  m-1 bg-[#FAFAFA] focus:border focus:outline 
        focus:outline-slate-500 placeholder:text-xs  placeholder:text-slate-500 "
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
