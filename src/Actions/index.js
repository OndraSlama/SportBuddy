import uuid from "uuid";

export const addEvent = ({
  description = "",
  sport = "",
  from = undefined,
  to = undefined,
  numberOfPlayers = ""
} = {}) => ({
  type: "ADD_EVENT",
  event: {
    id: uuid(),
    description,
    sport,
    from,
    to,
    numberOfPlayers
  }
});

export default addEvent;
