const events = [
    {
        name: "TechFest 2025",
        date: "July 10, 2025",
        time: "10:00 AM",
        location: "FAST NUCES, Islamabad",
        description: "A gathering of tech enthusiasts, workshops, and innovation talks."
    },
    {
        name: "Foodie Fiesta",
        date: "July 20, 2025",
        time: "5:00 PM",
        location: "F-9 Park, Islamabad",
        description: "A festival for food lovers featuring local and international cuisines."
    },
    {
        name: "Music Madness",
        date: "August 5, 2025",
        time: "7:30 PM",
        location: "PNCA, Islamabad",
        description: "Live performances from top Pakistani and international bands."
    },
    {
        name: "Short Marathon 2025",
        date: "July 10, 2025",
        time: "10:00 AM",
        location: "FAST NUCES, Islamabad",
        description: "A gathering of tech enthusiasts, workshops, and innovation talks."
    },
    {
        name: "Nach De Sare Fest",
        date: "July 20, 2025",
        time: "5:00 PM",
        location: "F-9 Park, Islamabad",
        description: "A festival for food lovers featuring local and international cuisines."
    },
    {
        name: "Laughter Challange",
        date: "August 5, 2025",
        time: "7:30 PM",
        location: "PNCA, Islamabad",
        description: "Live performances from top Pakistani and international bands."
    }
];

const eventsContainer = document.getElementById('eventsContainer');
const searchInput = document.getElementById('searchInput');

// Render all events
function displayEvents(eventsToShow) {
    eventsContainer.innerHTML = '';
    eventsToShow.forEach(event => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-4';

        col.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h3 class="card-title">${event.name}</h3>
          <p class="card-text"><strong>Date:</strong> ${event.date}</p>
          <p class="card-text"><strong>Time:</strong> ${event.time}</p>
          <p class="card-text"><strong>Location:</strong> ${event.location}</p>
          <p class="card-text">${event.description}</p>
            <div class="text-center">
            <a href="#" class="btn text-white px-4 py-2" style="background-color: #000; border-radius: 30px;">Register</a>
            </div>
        </div>
      </div>
    `;
        eventsContainer.appendChild(col);
    });
}

displayEvents(events);

// Live Search
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = events.filter(event =>
        event.name.toLowerCase().includes(query)
    );
    displayEvents(filtered);
});
