function Loader() {
  return (
    <div className="flex flex-col animate-pulse gap-2">
      <div className="w-72 h-2 bg-primaryColor"></div>
      <div className="flex gap-2">
        <div className="w-36 h-2 bg-primaryColor"></div>
        <div className="w-20 h-2 bg-primaryColor"></div>
      </div>
      <div className="w-72 h-2 bg-primaryColor"></div>
    </div>
  );
}
export default Loader;
