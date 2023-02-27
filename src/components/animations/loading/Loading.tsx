const Loading = (): JSX.Element => {
  return (
    <div className="fixed inset-0  z-50 mx-auto flex w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-70 py-8 outline-none focus:outline-none">
      <div className="relative mx-auto w-3/4 p-1 md:w-2/4">
        {' '}
        <div className="flex items-center justify-center">
          <p className="animate-ping text-5xl text-white">O</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
