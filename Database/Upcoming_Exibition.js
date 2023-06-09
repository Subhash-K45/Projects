const { Upcoming_Exibition } = require("./mongoose");

const Upcoming_Exibition_Data = async function ({
  Event_Title,
  Event_Timings,
  Event_Location,
  Event_Description,
}) {
  try {
    const Data = new Upcoming_Exibition({
      Event_Title: Event_Title,
      Event_Timings: Event_Timings,
      Event_Location: Event_Location,
      Event_Description: Event_Description,
    });
    await Data.save();
  } catch (error) {
    console.error(`Error saving ${id}:`, error);
  }
};

module.exports = Upcoming_Exibition_Data;
