const MyPagination = (props: {
  quantityItems: number,
  quantityPerPage: number,
  onPageSelected: (number: number) => void,
}) => {
  const maxPageCount = Math.ceil(props.quantityItems / props.quantityPerPage);
  const arrayOfPageNumber = Array.from({ length: maxPageCount }, (_, i) => i + 1);

  const arrayOfButtons = arrayOfPageNumber.map((label: number) => {
    return (
      <button onClick={() => props.onPageSelected(label)}>
        {label}
      </button>
    );
  })

  return (
    <div className="mytable-totalization-body">
      {arrayOfButtons}
    </div>
  );
};

export default MyPagination;