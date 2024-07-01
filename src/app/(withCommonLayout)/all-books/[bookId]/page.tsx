import React from "react";

const BookPageDetails = ({ params }: any) => {
  const { bookId } = params;

  return <div>BookPageDetails: {bookId}</div>;
};

export default BookPageDetails;
