export const createDaySchedule = (input = {}) => ({
  type: "CREATE_SCHEDULE",
  daySchedule: { day: input.day, cell: input.cell }
});

export default createDaySchedule;
