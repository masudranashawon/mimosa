import { BeatLoader } from 'react-spinners';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div className='flex justify-center'>
      <BeatLoader
        color='#32B8CB'
        loading={isLoading}
        size={16}
        data-testid='loader'
        aria-label='Loading Spinner'
      />
    </div>
  );
};

export default Loading;
