let rooms = [
  { room_number: 111, room_type: "Deluxe", price: 5000, available: true, guest: null },
  { room_number: 222, room_type: "Deluxe", price: 5000, available: true, guest: null },
  { room_number: 333, room_type: "Super Deluxe", price: 7500, available: true, guest: null },
  { room_number: 555, room_type: "Suite", price: 10500, available: false, guest: "Ravi" },
  { room_number: 666, room_type: "Presidential Suite", price: 15000, available: true, guest: null }
];

function displayRooms() {
  let table = document.getElementById("roomTable");
  table.innerHTML = "";

  rooms.forEach(room => {
    table.innerHTML += `
      <tr>
        <td>${room.room_number}</td>
        <td>${room.room_type}</td>
        <td>₹ ${room.price}</td>
        <td class="${room.available ? 'available' : 'booked'}">
          ${room.available ? 'Available' : 'Booked'}
        </td>
        <td>
          <button onclick="cancelRoom(${room.room_number})"
            ${room.available ? "disabled" : ""}>
            Cancel
          </button>
        </td>
      </tr>
    `;
  });
}

function bookRoom() {
  let roomNo = Number(document.getElementById("roomNo").value);
  let guest = document.getElementById("guestName").value;
  let days = Number(document.getElementById("days").value);

  let room = rooms.find(r => r.room_number === roomNo);

  if (!room) {
    alert("Room not found");
    return;
  }

  if (!room.available) {
    alert("Room already booked");
    return;
  }

  room.available = false;
  room.guest = guest;

  let bill = room.price * days;
  document.getElementById("bill").innerText =
    `Booking successful! Total bill: ₹ ${bill}`;

  displayRooms();
}

function cancelRoom(roomNo) {
  let room = rooms.find(r => r.room_number === roomNo);
  room.available = true;
  room.guest = null;
  document.getElementById("bill").innerText = "";
  displayRooms();
}

displayRooms();



