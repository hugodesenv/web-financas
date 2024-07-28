import { useState } from "react";

const MyPagination = (props: {
  quantityItems: number,
  quantityPerPage: number,
  onPageSelected: (number: number) => void,
}) => {
  const [initialPageNumber, setInitialPageNumber] = useState(0);
  const maxPageCount = Math.ceil(props.quantityItems / props.quantityPerPage);

  /**
   * Função que controlamos a exibição da numeração de páginas.
   * @param operation flag para sabermos o que é para ser feito
   */
  function handleInitialPageNumber(operation: "increment" | "decrement" | "last" | "first") {
    let _initialPageNumber = initialPageNumber;
    const lastPageInitialNumber = maxPageCount - 5;

    if (operation === 'increment') {
      _initialPageNumber += 5;
    } else if (operation === 'decrement') {
      _initialPageNumber -= 5;
    } else if (operation === 'last') {
      _initialPageNumber = lastPageInitialNumber;
    } else {
      _initialPageNumber = 0;
    }

    if ((_initialPageNumber + 5) > maxPageCount) {
      _initialPageNumber = lastPageInitialNumber;
    }

    if (_initialPageNumber < 1) {
      _initialPageNumber = 0;
    }

    setInitialPageNumber(_initialPageNumber);
  }

  const arrayOfPageNumber = Array.from({ length: 5 }, (_, i) => (i + initialPageNumber) + 1);

  const arrayOfButtons = arrayOfPageNumber.map((pageNumber: number) => {
    return (
      <button onClick={() => props.onPageSelected(pageNumber)}>
        {pageNumber}
      </button>
    );
  })

  return (
    <div className="mytable-totalization-body">
      <button onClick={() => handleInitialPageNumber('decrement')}>Anterior</button>
      {arrayOfButtons}
      <button onClick={() => handleInitialPageNumber('increment')}>Próximo</button>
    </div>
  );
};

export default MyPagination;