import uuid from "uuid";

export const addEvent = ({ description = "", sport = "" } = {}) => ({
  type: "ADD_EVENT",
  event: {
    id: uuid(),
    description,
    sport
  }
});

export default addEvent;
