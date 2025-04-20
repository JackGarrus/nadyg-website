interface Props {
  className: string;
}

const Square = ({ className }: Props) => {
  return (
    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" className={className} />
    </svg>
  );
};

export default Square;
