import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const AddEvent = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
    };
  
    return (
      <div>
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="eventTitle" className="form-label">
              Event Title
            </label>
            <input
              type="text"
              className="form-control"
              id="eventTitle"
              placeholder="Enter event title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="eventDescription" className="form-label">
              Event Description
            </label>
            <textarea
              className="form-control"
              id="eventDescription"
              rows="3"
              placeholder="Enter event description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="dueDate" className="form-label">
              Due Date
            </label>
            <input
              type="date"
              className="form-control"
              id="dueDate"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Event
          </button>
        </form>
      </div>
    );
  };
  
  export default AddEvent;