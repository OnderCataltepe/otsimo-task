import { OutlinedButton } from 'components';
import { useNavigate } from 'react-router-dom';
const ErrorPage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1 className="text-9xl font-bold tracking-widest text-red-300">404</h1>
      <p className="my-4 text-xl text-slate-400">Page Not Found</p>
      <OutlinedButton
        text="Go to Homepage"
        size="medium"
        color="red"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default ErrorPage;
