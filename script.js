document.addEventListener('DOMContentLoaded', () => {
    const hotel = Array.from({ length: 10 }, (_, i) => Array(i === 9 ? 7 : 10).fill(false));
    const hotelGrid = document.getElementById('hotelGrid');

    function renderHotel() {
        hotelGrid.innerHTML = '';
        hotel.forEach((floor, floorIndex) => {
            const floorDiv = document.createElement('div');
            floorDiv.className = 'floor';
            floor.forEach((room, roomIndex) => {
                const roomDiv = document.createElement('div');
                roomDiv.className = 'room ' + (room ? 'booked' : 'available');
                roomDiv.textContent = (floorIndex + 1) * 100 + roomIndex + 1;
                floorDiv.appendChild(roomDiv);
            });
            hotelGrid.appendChild(floorDiv);
        });
    }

    function bookRooms(numRooms) {
        for (let floorIndex = 0; floorIndex < hotel.length; floorIndex++) {
            const floor = hotel[floorIndex];
            const availableRooms = floor.reduce((acc, room, index) => {
                if (!room) acc.push(index);
                return acc;
            }, []);
            if (availableRooms.length >= numRooms) {
                for (let i = 0; i < numRooms; i++) {
                    floor[availableRooms[i]] = true;
                }
                return true;
            }
        }
        return false;
    }

    function randomizeOccupancy() {
        hotel.forEach(floor => {
            floor.forEach((_, index) => {
                floor[index] = Math.random() < 0.5;
            });
        });
    }

    document.getElementById('bookingForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const numRooms = parseInt(document.getElementById('num_rooms').value, 10);
        if (!bookRooms(numRooms)) {
            alert('Not enough rooms available on a single floor.');
        }
        renderHotel();
    });

    document.getElementById('resetButton').addEventListener('click', () => {
        hotel.forEach(floor => floor.fill(false));
        renderHotel();
    });

    document.getElementById('randomizeButton').addEventListener('click', () => {
        randomizeOccupancy();
        renderHotel();
    });

    renderHotel();
});