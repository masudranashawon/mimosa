import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subTitle: string;
  color?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subTitle,
  color = 'bg-red',
}) => {
  return (
    <div className='flex items-center gap-2.5'>
      <span className={cn('h-16 w-2 2xl:h-20 2xl:w-3', color)}></span>
      <div className='flex flex-col items-start gap-2.5 '>
        <span className='text-xs font-semibold uppercase tracking-[0.375em] 2xl:text-lg'>
          {subTitle}
        </span>
        <h3 className='text-3xl 2xl:text-5xl'>{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
