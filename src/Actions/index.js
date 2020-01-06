import uuid from "uuid";

export const addEvent = ({
  description = "",
  sport = "",
  from = undefined,
  to = undefined,
  numberOfPlayers = "",
  schedule = undefined
} = {}) => ({
  type: "ADD_EVENT",
  event: {
    id: uuid(),
    description,
    sport,
    from,
    to,
    numberOfPlayers,
    schedule
  }
});

export default addEvent;
