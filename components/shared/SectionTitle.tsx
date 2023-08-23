import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subTitle: string;
  color?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subTitle,
  color = "bg-red",
}) => {
  return (
    <div className='flex gap-2.5 items-center'>
      <span className={cn("2xl:w-3 2xl:h-20 w-2 h-16", color)}></span>
      <div className='flex flex-col gap-2.5 items-start '>
        <span className='uppercase text-xs 2xl:text-lg tracking-[0.375em] font-semibold'>
          {subTitle}
        </span>
        <h3 className='text-3xl 2xl:text-5xl'>{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
