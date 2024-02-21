let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
if (theme == "dark") {
  document.documentElement.classList.add("dark");
}
document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
  });
document.getElementById("song-saved").addEventListener("click", function () {
  document.getElementById("song-saved").classList.toggle("saved");
});
Amplitude.init({
  bindings: {
    37: "prev",
    39: "next",
    32: "play_pause",
  },
  callbacks: {
    timeupdate: function () {
      let percentage = Amplitude.getSongPlayedPercentage();
      if (isNaN(percentage)) {
        percentage = 0;
      }
      /**
       * Massive Help from: https://nikitahl.com/style-range-input-css
       */
      let slider = document.getElementById("song-percentage-played");
      slider.style.backgroundSize = percentage + "% 100%";
    },
  },
  songs: [
    {
      name: "Track 01: Tweeters, Woofers, Heavy Metal",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2024",
      url: "./Final/Ad Astra.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },
    {
      name: "Track 02: The Summer of George",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2024",
      url: "./Final/The-Summer-of-George.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },
    {
      name: "Track 03: Otherkin",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2024",
      url: "./Final/Otherkin.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },
    {
      name: "Track 04: Title",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2024",
      url: "./",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },
    {
      name: "Track 05: ℏ = h/2π",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2024",
      url: "./Final/ℏ = h_2π.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    },
    {
      name: "Track 06: Ad Astra",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2024",
      url: "./Final/Ad Astra.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/warp.png",
    }

    // Tweeters, Woofers, Heavy Metal
    /*{
          name: "Track 01: Tweeters, Woofers, Heavy Metal",
          artist: "Atom Loves You",
          album: "Ad Astra per Aspera, 2024",
          url: "./mp3/Tweeters, Woofers, Heavy Metal (quick).mp3",
          cover_art_url: "https://assets.codepen.io/6566924/warp.png"
        },
      
      // Track 02: The Summer of George
      {
          name: "Track 02: The Summer of George",
          artist: "Atom Loves You",
          album: "Ad Astra per Aspera, 2024",
          url: "./audio/mp3/The-Summer-of-George.mp3",
          cover_art_url: "https://assets.codepen.io/6566924/warp.png"
        },
      
      //Track 03: Otherkin
            {
              name: "Track 03: Otherkin",
              artist: "Atom Loves You",
              album: "Ad Astra per Aspera, 2024",
              url: "./audio/mp3/Otherkin.mp3",
              cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
            },
      
      //Track 04: Ooo
            {
              name: "Track 04: Ooo",
              artist: "Atom Loves You",
              album: "Ad Astra per Aspera, 2024",
              url: "./audio/wav/Ooo.wav",
              cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
            },
      
      // Track 05: ℏ = h/2π
            {
              name: "Track 05: ℏ = h/2π",
              artist: "Atom Loves You",
              album: "Ad Astra per Aspera, 2024",
              url: "./audio/mp3/ℏ = h_2π.mp3",
              cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
            },
      
      //Track 06: Ad Astra
            {
              name: "Track 06: Ad Astra",
              artist: "Atom Loves You",
              album: "Ad Astra per Aspera, 2024",
              url: "./audio/mp3/Ad-Astra.mp3", 
              cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
            },
      
      //Track 07: Lo-fi
            {
              name: "Track 07: Lo-fi",
              artist: "Atom Loves You",
              album: "Ad Astra per Aspera, 2024",
              url: "./audio/mp3/Lo-fi.mp3",
              cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
            },
      
      //Track 08: MySong-62
            {
              name: "Track 08: MySong-62",
              artist: "Atom Loves You",
              album: "Ad Astra per Aspera, 2024",
              url: "./audio/wav/My Song 62-Last-Updated-on-Dec-31-2023.wav",
              cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
            },
      
      //Track 09: MySong-36
            {
              name: "Track 09: MySong-36",
              artist: "Atom Loves You",
              album: "Ad Astra per Aspera, 2024",
              url: "./audio/wav/My-Song-36-Updated-on-Dec-31-2023.wav",
              cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
            },
      
      //Track 10: Data is Destiny
            {
              name: "Track 10: Data is Destiny",
              artist: "Atom Loves You",
              album: "Ad Astra per Aspera, 2024",
              url: "./audio/wav/Data is Destiny.wav", 
              cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
            },
      
      
      //Track 11: Jan 25, 2024
            {
              name: "Track 11: Jan 25, 2024",
              artist: "Atom Loves You",
              album: "Ad Astra per Aspera, 2024",
              url: "./audio/wav/Jan-25-2024 2.wav", 
              cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
            },
      
      //Track 12:
            {
              name: "Track 12: Last Track",
              artist: "Atom Loves You",
              album: "Ad Astra per Aspera, 2024",
              url: "./audio/wav/Last track.wav", 
              cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
            },
      */
  ],
});
window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};
