let rooms = [
  { room_number: 101, room_type: "Deluxe", price: 3000, available: true, guest: null },
  { room_number: 102, room_type: "Deluxe", price: 3000, available: true, guest: null },
  { room_number: 201, room_type: "Super Deluxe", price: 4500, available: true, guest: null },
  { room_number: 202, room_type: "Super Deluxe", price: 4500, available: false, guest: "Ravi" },
  { room_number: 301, room_type: "Suite", price: 7000, available: true, guest: null }
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
