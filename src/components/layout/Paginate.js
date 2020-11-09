import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

const Paginate =  ({setPage, page, size, setSize}) => {
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setSize(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={190}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={size}
      rowsPerPageOptions={[1,2,3,4,5,6,7,8,9,10]}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
}
export default Paginate;