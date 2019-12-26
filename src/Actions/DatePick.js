// const createAllCells = (start,stop) =>{
//     return "prdel"
// }

export const createCell = (input = {}) => ({
  type: "CREATE_CELL",
  cell: input
});

export default createCell;
