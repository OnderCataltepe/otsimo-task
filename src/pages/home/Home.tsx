import { Banner, OutlinedButton } from 'components';
import { BANNER_DATA } from 'constants/index';
import { useNavigate } from 'react-router-dom';
const Home = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex-col px-2 py-4 md:px-6 md:py-8">
      <section className="mb-12">
        <div className="flex aspect-[2] h-auto w-full flex-col items-center justify-center bg-customImg bg-cover  text-center">
          <div className="bgGlass flex h-full w-full flex-col items-center justify-evenly">
            <p className="mb-4 bg-black bg-opacity-50 p-2 text-sm font-bold leading-relaxed tracking-wider text-white md:px-8 md:text-4xl">
              We offer custom quality meals. You can choose the ingredients of each meal in
              different qualities.
            </p>

            <OutlinedButton
              text="Show Me"
              size="large"
              color="green"
              onClick={() => navigate('/menu')}
            />
          </div>
        </div>
      </section>

      <section>
        {BANNER_DATA.map((item) => (
          <Banner key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
};

export default Home;
