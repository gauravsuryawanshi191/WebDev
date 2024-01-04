import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const EventList = () => {
    // Sample event data
    const events = [
      {
        eventTitle: 'Event 1',
        eventDescription: 'Description 1',
        dueDate: '2024-01-01',
      },
      {
        eventTitle: 'Event 2',
        eventDescription: 'Description 2',
        dueDate: '2024-01-02',
      },
    ];
  
    return (
      <div>
        <h2>Event List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Event Title</th>
              <th>Description</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.eventTitle}</td>
                <td>{event.eventDescription}</td>
                <td>{event.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default EventList;