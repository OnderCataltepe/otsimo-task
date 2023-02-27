import TypeWriter from 'components/animations/text/TypeWriter';
import { useInView } from 'react-intersection-observer';
import { OutlinedButton } from 'components';
import { useNavigate } from 'react-router-dom';
import type { BannerT } from 'types';

const Banner = (item: BannerT): JSX.Element => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <div className="flex min-h-[50vh] w-full flex-col border-t-2 border-brownPrimary py-12 md:h-[80vh] md:flex-row even:md:flex-row-reverse">
      <div ref={ref} className="flex w-full items-center justify-center px-8 text-center md:w-1/2">
        {inView && <TypeWriter text={item.text} />}
      </div>
      <div className="flex w-full flex-col items-center justify-evenly p-4 md:w-1/2">
        <div className="w-2/3">
          <img alt={item.text} src={item.image} />
        </div>
        <div>
          <OutlinedButton
            text="Explore"
            color={item.color}
            size="large"
            onClick={() => navigate(item.path)}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
