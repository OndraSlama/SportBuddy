// import update from 'react-addons-update';
const dateDefault = [];



export default ( state = dateDefault, action) => {
    switch (action.type) {
      case "CREATE_CELL":
        return  action.cell;
      default:
        return state;
    }
  };