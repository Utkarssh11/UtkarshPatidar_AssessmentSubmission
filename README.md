# Hotel Room Reservation System

The **Hotel Room Reservation System** is a web-based application designed to simulate the process of booking hotel rooms while minimizing travel time between rooms. The system allows users to book up to 5 rooms at a time, prioritizing room selection on the same floor and optimizing for minimal travel time when booking across multiple floors.

## Features

- **Book up to 5 rooms** at a time.
- **Prioritize booking rooms on the same floor** to minimize travel time.
- **Optimize booking across multiple floors** when rooms are not available on a single floor.
- **Random Room Occupancy Generation**: Fill rooms randomly to simulate availability.
- **Reset Booking**: Clear all room bookings with a single click.
- **Responsive UI**: Works on all device sizes (desktop, tablet, mobile).
- **User-friendly Interface**: Simple and interactive buttons for booking, resetting, and generating random occupancy.

## How to Run Locally

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)

### Steps to Run Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/hotel-room-reservation-system.git
    ```
2. Navigate to the project folder:
    ```bash
    cd hotel-room-reservation-system
    ```
3. Open the `index.html` file in your preferred browser:
    ```bash
    open index.html
    ```

### Dependencies

The project uses:
- **HTML** for structure
- **CSS** for styling
- **JavaScript** for functionality

## Project Structure


## How It Works

### Booking Logic
- **Same Floor Booking**:  
  When a user requests a certain number of rooms (up to 5), the system first checks each floor to see if it has enough available consecutive rooms.
  
- **Cross-Floor Booking**:  
  If enough consecutive rooms aren't available on the same floor, the system calculates the total travel time between potential room combinations across different floors and selects the one with the least travel time.

- **Travel Time Calculation**:  
  - Horizontal travel between adjacent rooms on the same floor takes 1 minute per room.
  - Vertical travel between floors takes 2 minutes per floor.

### Example

For example, if the available rooms are:

- **Floor 1**: 101, 102, 105, 106
- **Floor 2**: 201, 202, 203, 210
- **Floor 3**: 301, 302

And the user requests **4 rooms**, the system will prioritize booking rooms on **Floor 1** (101, 102, 105, 106) as they are all available and minimize the travel time.

However, if only **2 rooms** are available on **Floor 1** (101, 102), the system will select **201 and 202** on **Floor 2** as this minimizes vertical and horizontal travel.

## Live Application Link

You can access the live version of the Hotel Room Reservation System here:  
[Hotel Room Reservation System Live](https://your-live-app-link.com)

## Screenshots

Include screenshots of the application to showcase its functionality, such as:
- The booking interface.
- The random occupancy generation.
- Resetting the booking.

## Code Repository

The source code for the application is available on GitHub:  
[GitHub Repository](https://github.com/yourusername/hotel-room-reservation-system)

## Challenges Faced

- **Optimizing Travel Time**:  
  One of the main challenges was ensuring that the system efficiently minimized travel time when booking rooms across multiple floors. A simple algorithm was used to prioritize minimizing both horizontal and vertical travel times.
  
- **Ensuring Responsive Design**:  
  Making sure the UI looks good and functions properly on all screen sizes was another challenge that was addressed by using flexible layouts and media queries in the CSS.

## Future Enhancements

- **User Accounts**: Allow users to create accounts to view their booking history.
- **Advanced Search Filters**: Allow users to filter rooms by type (single, double, suite, etc.).
- **Booking Confirmation Email**: Add functionality to send a confirmation email upon successful booking.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
