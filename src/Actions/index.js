import uuid from "uuid";

export const addEvent = ({
  description = "",
  sport = "",
  lokofu = "",
  from = undefined,
  to = undefined
} = {}) => ({
  type: "ADD_EVENT",
  event: {
    id: uuid(),
    description,
    sport,
    lokofu,
    from,
    to
  }
});

export default addEvent;
