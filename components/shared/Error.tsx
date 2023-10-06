interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className='flex justify-center text-red'>
      <p>{error}</p>
    </div>
  );
};

export default Error;
