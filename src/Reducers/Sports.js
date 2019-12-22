const sportsDefault = ["Badminton", "Squash", "Basketball"];

export default (state = sportsDefault, action) => {
  switch (action.type) {
    case "ADD_SPORTS":
      return [...new Set([...state, ...action.sports])];
    default:
      return state;
  }
};
