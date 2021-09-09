import { useState } from "react";
import { useRouter } from "next/router";

function Events({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  // why again calling category=sports ??
  // This is because current senarios is having 10 records out of tht only 2 has sports
  // so call needs to be triggered when there are >100 records related to sports
  const fetchSportsEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>sports events</button>
      <h2>List of events</h2>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.id} </h2>
            <h2>{event.title} </h2>
            <h2>{event.category} </h2>
            <p>{event.description} </p>
          </div>
        );
      })}
    </>
  );
}

export default Events;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
