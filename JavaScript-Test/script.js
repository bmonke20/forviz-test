const bookingData = [
  {
    id: 1,
    roomId: "A101",
    startTime: "2019-09-28 13:00:00",
    endTime: "2019-09-28 14:00:00",
    title: "Lunch with Petr",
  },
  {
    id: 2,
    roomId: "A101",
    startTime: "2019-09-28 14:00:00",
    endTime: "2019-09-28 15:00:00",
    title: "Sales Weekly Meeting",
  },
  {
    id: 3,
    roomId: "A101",
    startTime: "2019-09-28 16:00:00",
    endTime: "2019-09-28 18:00:00",
    title: "Anastasia Website Warroom",
  },
  {
    id: 4,
    roomId: "A101",
    startTime: "2019-09-29 13:00:00",
    endTime: "2019-09-29 14:00:00",
    title: "One-on-One Session",
  },
  {
    id: 5,
    roomId: "A101",
    startTime: "2019-09-29 16:00:00",
    endTime: "2019-09-29 18:00:00",
    title: "UGC Sprint Planning",
  },
  {
    id: 6,
    roomId: "A102",
    startTime: "2019-09-30 09:00:00",
    endTime: "2019-10-04 18:00:00",
    title: "5-Day Design Sprint Workshop",
  },
  {
    id: 7,
    roomId: "Auditorium",
    startTime: "2019-09-19 09:00:00",
    endTime: "2019-09-23 19:00:00",
    title: "Thai Tech Innovation 2019",
  },
  {
    id: 8,
    roomId: "A101",
    startTime: "2019-09-28 10:00:00",
    endTime: "2019-09-28 13:00:00",
    title: "Raimonland project",
  },
  {
    id: 9,
    roomId: "A102",
    startTime: "2019-09-30 18:00:00",
    endTime: "2019-09-30 20:00:00",
    title: "Management Meetinng",
  },
  {
    id: 10,
    roomId: "A101",
    startTime: "2019-10-04 14:00:00",
    endTime: "2019-10-06 11:00:00",
    title: "3-day workshop Corgi costume",
  },
];

const checkAvailability = (roomId, startTime, endTime) => {
  const reqStart = new Date(startTime);
  const reqEnd = new Date(endTime);

  console.log("startTime", reqStart);
  console.log("endTime", reqEnd);

  for (let booking of bookingData) {
    if (booking.roomId === roomId) {
      const bookingStart = new Date(booking.startTime);
      const bookingEnd = new Date(booking.endTime);

      console.log("title", booking.title);
      console.log("bookingStart", bookingStart);
      console.log("bookingEnd", bookingEnd);

      // Check room if not available
      if (reqStart < bookingEnd && reqEnd > bookingStart) {
        console.log("Not available");
        return false;
      }
    }
  }

  // After Check if room available
  console.log("available");
  return true;
};

const getBookingsForWeek = (roomId, weekNo) => {
  const now = new Date();

  const startDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startWeek = new Date(startDay);
  startWeek.setDate(startWeek.getDate() - startWeek.getDay());

  const startNextWeek = new Date(startWeek);
  startNextWeek.setDate(startNextWeek.getDate() + 7);

  const endOfWeek = new Date(startNextWeek);
  endOfWeek.setDate(endOfWeek.getDate() - 1);

  const endOfNextWeek = new Date(startNextWeek);
  endOfNextWeek.setDate(endOfNextWeek.getDate() + 6);

  let start, end;

  if (weekNo === "today") {
    start = startDay;
    end = new Date(startDay);
    end.setDate(end.getDate() + 1);

    console.log("Booking Today", start, "to", end);
  } else if (weekNo === "this week") {
    start = startWeek;
    end = endOfWeek;

    console.log("Booking this week", start, "to", end);
  } else if (weekNo === "next week") {
    start = startNextWeek;
    end = endOfNextWeek;

    console.log("Booking next week", start, "to", end);
  } else {
    return bookingData
      .filter((booking) => booking.roomId === roomId)
      .map((booking) => ({
        room: booking.roomId,
        title: booking.title,
        time: `${booking.startTime}-${booking.endTime}`,
      }));
  }

  const filterBooking = bookingData.filter((booking) => {
    const bookingStart = new Date(booking.startTime);
    const bookingEnd = new Date(booking.endTime);

    return (
      (booking.roomId === roomId &&
        bookingStart >= start &&
        bookingStart <= end) ||
      (bookingEnd >= start && bookingEnd <= end)
    );
  });

  console.log("BOOKING", filterBooking);
  return filterBooking;
};

console.log(
  checkAvailability("A101", "2019-10-01 13:00:00", "2019-10-30 14:00:00")
);

console.log(getBookingsForWeek("A101", "today"));
console.log(getBookingsForWeek("A101", "this week"));
console.log(getBookingsForWeek("A101", "next week"));
