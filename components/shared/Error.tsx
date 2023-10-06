interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className='text-center text-red'>
      <p>{error}</p>
    </div>
  );
};

export default Error;
