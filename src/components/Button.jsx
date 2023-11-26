function Button(props) {
  return props.name ? (
    <div className="flex flex-cloumn justify-center m-3 ">
      <button
        className=" w-[270px] h-[38px] border border-sky-400 rounded-lg bg-sky-400 text-white 
      font-medium "
      >
        {props.name}
      </button>
    </div>
  ) : (
    <div>
      <button>Click Me</button>
    </div>
  );
}

export default Button;
