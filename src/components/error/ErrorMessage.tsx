interface EMProps {
  message: string | null;
}

const ErrorMessage = ({ message }: EMProps): JSX.Element => {
  return (
    <div className="w-full text-center">
      <h1 className="whitespace-pre-wrap text-2xl font-semibold tracking-wider text-red-700">
        {message}
      </h1>
    </div>
  );
};

export default ErrorMessage;
