document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const carouselContainer = document.getElementById("carousel");
            data.people.forEach(person => {
                const personElement = createPersonElement(person);
                carouselContainer.appendChild(personElement);
            });

            // Altre operazioni con i dati JSON se necessario
        })
        .catch(error => console.error("Errore nel caricamento dei dati:", error));
});

function createPersonElement(person) {
    const personElement = document.createElement("div");
    personElement.className = "person";

    const image = document.createElement("img");
    image.src = person.image;
    personElement.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = person.name;
    personElement.appendChild(name);

    const role = document.createElement("p");
    role.textContent = person.role;
    personElement.appendChild(role);

    return personElement;
}


// ANALYTICS GOOGLE

            // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
            import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
          
            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            const firebaseConfig = {
              apiKey: "AIzaSyBOanZVjiyVmwEdy1Kxlv_7eGeVs3i51PU",
              authDomain: "salvemini-vibes-bd7c5.firebaseapp.com",
              projectId: "salvemini-vibes-bd7c5",
              storageBucket: "salvemini-vibes-bd7c5.appspot.com",
              messagingSenderId: "644060245096",
              appId: "1:644060245096:web:822715c89b44570cbf9fdd",
              measurementId: "G-ZK7MWW9BHX"
            };
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-1E7RJ93RHV');

// YT VIDEOS

// SCROLLER


// CHECKSTATUS

var options = {
    channel: "salvemini_vibes", // TODO: Change this to the streams username you want to embed
    width: 1920,
    height: 1080,
    controls: false,
  };
  var player = new Twitch.Player("twitch", options);

  player.addEventListener(Twitch.Player.READY, initiate)

  function initiate() {
    player.addEventListener(Twitch.Player.ONLINE, handleOnline);
    player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.removeEventListener(Twitch.Player.READY, initiate);
  }

  function handleOnline() {
    document.getElementById("twitch").classList.remove('hide');
    player.removeEventListener(Twitch.Player.ONLINE, handleOnline);
    player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.setMuted(true);
    document.getElementById('offlinedataimg').style.display = 'none'; 
    document.getElementById('btn2').classList.add('hide');
  }
  function handleOffline() {
    document.getElementById("twitch").classList.add('hide');
    player.removeEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.addEventListener(Twitch.Player.ONLINE, handleOnline);
    player.setMuted(true);
  }
  player.setVolume(0.5);

  // ANIMATIO

    // TITOLO

     var utente = "salvemini_vibes";
    function getTwitchStreamTitle() {
      var apiUrl = 'https://api.twitch.tv/helix/streams?user_login=' + utente;

      $.ajax({
          url: apiUrl,
          success: function (data) {
              if (data.data.length > 0) {
                  var twitchTitle = data.data[0].title;
                  document.getElementById('infotitle').innerHTML = twitchTitle;
              } else {
                  document.getElementById('infotitle').innerHTML = 'Il canale non è in diretta';
              }
          },
          error: function (error) {
              console.error('Errore nella richiesta API Twitch:', error);
          }
      });
  }

  // Chiamata iniziale
  getTwitchStreamTitle();

  // Aggiorna ogni 5 minuti (300000 millisecondi)
  setInterval(getTwitchStreamTitle, 300000);
    

  let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}
//

