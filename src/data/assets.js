/**
 * Centralized Assets Configuration
 * All files reside in public/assets/
 * Replace any filename here when providing actual photos, gifs, or audio.
 */

export const ASSET_BASE = '/assets';

export const assets = {
  // Welcome Screen Animated Cat GIF (Supplied Tenor GIF)
  helloCat: {
    src: `${ASSET_BASE}/hello-cat.gif`,
    fallbackSrc: 'https://media1.tenor.com/m/k4q_fhUFnX0AAAAd/cat.gif',
    alt: "Animated cat playfully saying hello",
    type: "image",
    fallbackType: "hello-cat",
    caption: "A very excited cat waiting for Kumbhkaran!"
  },

  // Teddy Bear Animations & Illustrations (Milk & Mocha / White & Brown aesthetic)
  teddyWelcome: {
    src: `${ASSET_BASE}/hello-cat.gif`,
    fallbackSrc: 'https://media1.tenor.com/m/k4q_fhUFnX0AAAAd/cat.gif',
    alt: "Animated cat playfully saying hello",
    type: "image",
    fallbackType: "hello-cat",
    caption: "A very excited cat waiting for Kumbhkaran!"
  },
  teddyFight: {
    src: `${ASSET_BASE}/teddy-fight.gif`,
    alt: "Playful teddy bears wrestling",
    type: "image",
    fallbackType: "teddy-fight",
    caption: "Playful fight because you tried to sleep!"
  },
  teddyHappy: {
    src: `${ASSET_BASE}/teddy-happy.gif`,
    alt: "Teddy jumping for joy",
    type: "image",
    fallbackType: "teddy-happy",
    caption: "Yay! Let's celebrate, buddy!"
  },
  teddyHug: {
    src: `${ASSET_BASE}/teddy-hug.gif`,
    fallbackSrc: 'https://media1.tenor.com/m/HFVj221IoRAAAAAd/dance-kiss-video.gif',
    alt: "Warm hug between best buddies",
    type: "image",
    fallbackType: "teddy-hug",
    caption: "Warm hug between best friends"
  },
  teddyTogether: {
    src: `${ASSET_BASE}/teddy-together.png`,
    alt: "White and caramel teddy bears sitting together",
    type: "image",
    fallbackType: "teddy-together",
    caption: "Best friends sitting together"
  },

  // Tom & Jerry Playful Rivalry References
  tomJerryChase: {
    src: `${ASSET_BASE}/tom-jerry-chase.gif`,
    alt: "Tom and Jerry playful chase",
    type: "image",
    fallbackType: "tom-jerry-chase",
    caption: "Unlimited cat-and-mouse banter"
  },
  tomJerryOffice: {
    src: `${ASSET_BASE}/tom-jerry-office.gif`,
    alt: "Tom and Jerry office mischief",
    type: "image",
    fallbackType: "tom-jerry-office",
    caption: "Irritating each other like Tom & Jerry"
  },
  tomJerryPeace: {
    src: `${ASSET_BASE}/tom-jerry-peace.gif`,
    alt: "Tom and Jerry peaceful truce",
    type: "image",
    fallbackType: "tom-jerry-peace",
    caption: "Calling a truce after all the mischief"
  },

  // Five Personal Tenor GIFs
  nonstopMessages: {
    src: `${ASSET_BASE}/nonstop-messages.gif`,
    fallbackSrc: 'https://media1.tenor.com/m/HHWJFGqXnt4AAAAd/mikrene.gif',
    alt: "Sending nonstop messages",
    type: "image",
    caption: "WHEN I SEND YOU 27 MESSAGES AND YOU HAVEN'T REPLIED TO EVEN ONE. 🙄",
    handwritten: "Hello jii??? Are you alive???"
  },
  irritationGif: {
    src: `${ASSET_BASE}/irritation.gif`,
    fallbackSrc: 'https://media.tenor.com/T-v1xYm8M0UAAAAj/mad.gif',
    alt: "Playful irritation",
    type: "image",
    caption: "WHEN I IRRITATE YOU, BUT YOU KNOW YOU DESERVE IT. 😂"
  },
  buddyHug: {
    src: `${ASSET_BASE}/buddy-hug.gif`,
    fallbackSrc: 'https://media1.tenor.com/m/HFVj221IoRAAAAAd/dance-kiss-video.gif',
    alt: "Warm cute hug between buddies",
    type: "image",
    caption: "OKAY FINE, ENOUGH FIGHTING. HERE'S A HUG, BUDDY. 🤍"
  },
  thankYouBear: {
    src: `${ASSET_BASE}/thank-you-bear.gif`,
    fallbackSrc: 'https://media1.tenor.com/m/xPDDnUtYMS0AAAAC/line-sticker-thank-you-sticker.gif',
    alt: "Thank you bear sticker",
    type: "image",
    caption: "THANK YOU FOR BEING MY BEST MITTR! 🤍"
  },
  teddyDance: {
    src: `${ASSET_BASE}/teddy-dance.gif`,
    fallbackSrc: 'https://media.tenor.com/vhY5yLMC9PAAAAAj/milk-and.gif',
    alt: "Both teddies dancing celebrating",
    type: "image",
    caption: "WE SURVIVED ANOTHER YEAR OF EACH OTHER! LET'S GOOOOOOO! 😂🤍"
  },

  // Office & Team Scrapbook Memories
  teamGroup: {
    src: `${ASSET_BASE}/team-group.jpg`,
    alt: "Our crazy little team together",
    type: "image",
    fallbackType: "doodle-team",
    caption: "Our Crazy Little Team 🤍"
  },
  teamLunch: {
    src: `${ASSET_BASE}/team-lunch.jpg`,
    alt: "Team lunch and happy hours",
    type: "image",
    fallbackType: "doodle-lunch",
    caption: "Team Lunch = Happy Hours 🍕"
  },
  kitkatBreak: {
    src: `${ASSET_BASE}/kitkat-break.jpg`,
    alt: "KitKat chocolate break and team gossip",
    type: "image",
    fallbackType: "doodle-kitkat",
    caption: "KitKat Breaks Are Important 🍫"
  },
  everydayMasti: {
    src: `${ASSET_BASE}/everyday-masti.jpg`,
    alt: "Everyday full masti and fun at desk",
    type: "image",
    fallbackType: "doodle-masti",
    caption: "Everyday Full Masti 😂"
  },
  peopleSpecial: {
    src: `${ASSET_BASE}/people-special.jpg`,
    alt: "The people who made office days special",
    type: "image",
    fallbackType: "doodle-special",
    caption: "The People Who Made It Special 🫶"
  },
  // Legacy / Alternate file key mappings
  office01: {
    src: `${ASSET_BASE}/office-01.jpg`,
    alt: "Everyday full masti at desk",
    type: "image",
    fallbackType: "doodle-masti",
    caption: "Everyday Full Masti 😂"
  },
  snacks01: {
    src: `${ASSET_BASE}/snacks-01.jpg`,
    alt: "Team lunch and snacks",
    type: "image",
    fallbackType: "doodle-lunch",
    caption: "Team Lunch = Happy Hours 🍕"
  },
  team01: {
    src: `${ASSET_BASE}/team-01.jpg`,
    alt: "Our crazy little team",
    type: "image",
    fallbackType: "doodle-team",
    caption: "Our Crazy Little Team 🤍"
  },
  office02: {
    src: `${ASSET_BASE}/office-02.jpg`,
    alt: "The people who made it special",
    type: "image",
    fallbackType: "doodle-special",
    caption: "The People Who Made It Special 🫶"
  },
  office03: {
    src: `${ASSET_BASE}/office-03.jpg`,
    alt: "KitKat breaks and little things",
    type: "image",
    fallbackType: "doodle-kitkat",
    caption: "KitKat Breaks Are Important 🍫"
  },

  // Birthday & Celebration
  grandMoment: {
    src: `${ASSET_BASE}/grand-moment.png`,
    fallbackSrc: 'https://images.openai.com/static-rsc-4/_KFkO-llHArZjqNwGG4VEoVEUXfM6Vvlf8zAOIs2SOdNQYoDJWFJsWcot2eggdw3Mu6qe71_1Q8ND9sdiog3etKFRZs4txuvYkQf0-Xvi0LoHhaFcigpQ_6P0nPikRsrx0sIlvLewfdLqUntK0EPIamv5Ca1fmk9kSm4IDLfoFLZa6ielLSTUQGPUaL0uyAB?purpose=fullsize',
    alt: "New Field. New Dreams. Same Legend.",
    type: "image",
    caption: "New Field. New Dreams. Same Legend."
  },
  birthdayCake: {
    src: `${ASSET_BASE}/birthday-cake.gif`,
    alt: "Celebration birthday cake with glowing candles",
    type: "image",
    fallbackType: "cake-illustration",
    caption: "A delicious vintage birthday cake"
  },
  birthdayVideo: {
    src: `${ASSET_BASE}/birthday-video.mp4`,
    alt: "Birthday surprise video",
    type: "video",
    fallbackType: "video-placeholder",
    caption: "A special birthday video clip"
  },

  // Audio Tracks
  backgroundMusic: {
    src: `${ASSET_BASE}/background-music.mp3`,
    type: "audio",
    title: "Gentle Lofi Acoustic Birthday Melody"
  },
  celebrationSound: {
    src: `${ASSET_BASE}/celebration.mp3`,
    type: "audio",
    title: "Chimes & Celebration Sparkle"
  }
};

/**
 * Helper to retrieve an asset by key safely
 */
export function getAsset(key) {
  if (assets[key]) {
    return assets[key];
  }
  return {
    src: '',
    alt: 'Memory illustration',
    type: 'image',
    fallbackType: 'default'
  };
}
