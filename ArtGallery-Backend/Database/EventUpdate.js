const { Event_Update } = require("./mongoose");

const Save_Event = async function ({
  Event_Title,
  Event_Timings,
  Event_Location,
  Event_Description,
}) {
  try {
    const Event = new Event_Update({
      Event_Title: Event_Title,
      Event_Timings: Event_Timings,
      Event_Location: Event_Location,
      Event_Description: Event_Description,
    });
    await Event.save();
  } catch (error) {
    console.error(`Error saving the Event:`, error);
  }
};

module.exports = Save_Event;
