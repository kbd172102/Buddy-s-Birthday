/**
 * Centralized Birthday Content Configuration
 * Fully updated with playful Kumbhkaran, Buddy, and My Best Mittr refinements.
 * All captions, cards, profile details, and letters are customizable here.
 */

export const birthdayData = {
  recipient: {
    name: "My Best Mittr 🤍",
    nickname: "Kumbhkaran",
    birthDate: {
      year: 2001,
      month: 11, // November
      day: 20,
    },
    celebrationYear: 2026,
  },

  scene01: {
    tag: "A Little Surprise For You",
    heading: "Hello ji 🫠!! 👀",
    introLines: [
      "Uthhhh jaaaooo! Someone has something to show you! 😝",
      "Well well well... look who's here!",
      "Ready for a little surprise, buddy?"
    ],
    question: "SHALL WE BEGIN THIS LITTLE ADVENTURE?",
    btnYes: "YESSS, LET'S GOOOO! ✨",
    btnNo: "NOPE, I'M SLEEPING. 😴",

    rejectionDrama: {
      heading: "OH HELLOOOO, KUMBHKARAN!",
      subheading: "Birthday hai tumhara, attitude nahi dikhana! 😂",
      body: "Ab chupchaap aage badho!",
      btnAccept: "OKAY OKAY, I'M COMING! 🏃‍♂️💨"
    }
  },

  scene02: {
    tag: "Chapter 02 / Office Chronicles",
    heading: "THE OFFICE CHRONICLES",
    subheading: "Where productivity met unlimited nonsense.",
    description: "Click any polaroid to take a closer trip down memory lane.",
    nonstopMessages: {
      caption: "WHEN I SEND YOU 27 MESSAGES AND YOU HAVEN'T REPLIED TO EVEN ONE. 🙄",
      handwritten: "Hello jii??? Are you alive???",
      note: "Seen: 2 hours ago. Reply status: Pending forever 😂"
    },
    memories: [
      {
        id: "irritate",
        assetKey: "office01",
        title: "NON-STOP IRRITATING EACH OTHER",
        caption: "WORK WAS HARD. IRRITATING EACH OTHER WAS EASY.",
        note: "Professional colleagues? Maybe. Peaceful colleagues? NEVER. Pure Tom & Jerry energy every single day!",
        doodle: "paperclip",
        rotate: -2.5,
        colorTag: "#B8C4B0"
      },
      {
        id: "snacks",
        assetKey: "snacks01",
        title: "THE SNACKS DEPARTMENT",
        caption: "BREAK TIME WAS OUR SPECIALIZATION.",
        note: "Some meetings were important. Some snacks were MORE important. Snack detector Kumbhkaran on high alert!",
        doodle: "coffee",
        rotate: 3.2,
        colorTag: "#D8C6A5"
      },
      {
        id: "team",
        assetKey: "team01",
        title: "TEAM MASTI",
        caption: "THE TEAM HAD DEADLINES. WE HAD OTHER PLANS.",
        note: "The best desk conversations and team chaos that HR never needed to know about.",
        doodle: "star",
        rotate: -1.8,
        colorTag: "#C5D1D8"
      },
      {
        id: "random",
        assetKey: "office02",
        title: "RANDOM OFFICE MOMENTS",
        caption: "Some of the best memories were made during the most ordinary days.",
        note: "Typing furiously just to look busy, pretending to understand Jira tickets, and 4 PM chai debates with you, buddy.",
        doodle: "sparkle",
        rotate: 2.1,
        colorTag: "#E8DFD1"
      },
      {
        id: "little-things",
        assetKey: "office03",
        title: "THE LITTLE THINGS",
        caption: "It's funny how the smallest everyday moments become the memories we miss the most.",
        note: "From debug headaches to uncontrollable laughing fits across the room. Grateful for ordinary days made unforgettable with you, buddy.",
        doodle: "heart",
        rotate: -3.0,
        colorTag: "#B8C4B0"
      }
    ]
  },

  // Page 3: LITTLE MOMENTS, BIG MEMORIES 🤍
  scene03: {
    tag: "Little Moments, Big Memories 🤍",
    heading: "JUST A FEW THINGS ABOUT US...",
    subheading: "A little teasing, unlimited messages, and moments that stay with us forever.",
    memoryCards: [
      {
        id: "card-irritation",
        num: "01",
        title: "NONSTOP IRRITATION 😂",
        text: "When I irritate you, you irritate me back, and somehow neither of us knows when to stop.",
        assetKey: "irritationGif",
        gifSrc: "/assets/irritation.gif",
        fallbackSrc: "https://media.tenor.com/T-v1xYm8M0UAAAAj/mad.gif",
        alt: "Nonstop irritation GIF",
        washiAngle: -2.5,
        tag: "Tom & Jerry Energy",
        badgeColor: "#B8C4B0"
      },
      {
        id: "card-messages",
        num: "02",
        title: "UNLIMITED MESSAGES 📱",
        text: "When I keep sending you messages and you probably wonder why your phone is still alive.",
        assetKey: "nonstopMessages",
        gifSrc: "/assets/nonstop-messages.gif",
        fallbackSrc: "https://media1.tenor.com/m/HHWJFGqXnt4AAAAd/mikrene.gif",
        alt: "Unlimited messages GIF",
        washiAngle: 2.0,
        tag: "Spam Level: Expert",
        badgeColor: "#C5D1D8"
      },
      {
        id: "card-hug",
        num: "03",
        title: "FIGHTS DON'T LAST FOREVER 🧸",
        text: "A little teasing, a little fighting, and then we're back to being buddies.",
        assetKey: "teddyHug",
        gifSrc: "/assets/teddy-hug.gif",
        fallbackSrc: "https://media1.tenor.com/m/HFVj221IoRAAAAAd/dance-kiss-video.gif",
        alt: "Teddy hug GIF",
        washiAngle: -1.8,
        tag: "Buddies Forever",
        badgeColor: "#D8C6A5"
      }
    ],
    transition: {
      heading: "BUT SERIOUSLY, BUDDY...",
      message: `Among all the ordinary days, some people make things a little more memorable.

From our office days, random conversations, snack breaks and endless team masti, I'm glad we have so many little moments to look back on.

Your good morning wishes really do make my day, buddy. Your random messages always bring a smile to my face. I honestly thought that after leaving the office, you would never message me again, but somehow, we still share that connection. Thank you for being there for me. ❤️

I hope life brings you happiness, success and everything your heart is working towards.

Always keep smiling, buddy.
      
You're my best mittr. 🤍`
    }
  },

  scene04: {
    tag: "Chapter 04 / The Journey",
    heading: "IT ALL STARTED IN NOVEMBER...",
    subheading: "One November day in 2001, the world got a little more interesting.",
    targetDay: 20,
    targetMonth: 11, // November
    birthYear: 2001,
    currentCelebrationYear: 2026,
    timeline: [
      { year: 2001, title: "The Beginning", text: "The day our favourite human arrived into this world." },
      { year: 2005, title: "Growing Up", text: "Tiny feet, endless curiosity, and early mischievous signs." },
      { year: 2010, title: "Childhood Memories", text: "School days, games, and discovering simple joys." },
      { year: 2015, title: "Teenage Adventures", text: "Big dreams beginning to form, energy and ambitions." },
      { year: 2020, title: "A New Chapter", text: "Stepping into code, software, college, and adulthood." },
      { year: 2024, title: "New Experiences", text: "Bravery to pivot, explore new horizons, and grow, buddy." },
      { year: 2026, title: "The 25th Birthday", text: "Quarter-century milestone for our Kumbhkaran!" }
    ],
    birthdayCard2001: {
      title: "THE DAY OUR FAVOURITE HUMAN ARRIVED. 🤍",
      dateText: "20 NOVEMBER 2001",
      note: "The universe had no idea the amount of chaos and greatness it had just released."
    },
    birthdayCard2026: {
      title: "20 NOVEMBER 2026",
      subtitle: "25 YEARS OF BEING YOU, BUDDY!",
      note: "AND STILL CAUSING TROUBLE. 😂 Quarter of a century accomplished!"
    },
    birthdayCardDefault: {
      title: "ANOTHER CHAPTER OF YOUR STORY.",
      note: "Every single year adds another layer of courage, laughter, and wisdom."
    }
  },

  scene05: {
    tag: "Chapter 05 / The Grand Moment",
    partA: {
      heading: "NEW FIELD. NEW DREAMS. SAME LEGEND.",
      subheading: "Pivoting takes courage. And you have got plenty of it.",
      message: `Life has a funny way of taking us in unexpected directions.

New beginnings can feel confusing and challenging, but I hope you always remember how capable you are.

You've got so much ahead of you.

Keep exploring, keep learning, keep growing and never stop believing in yourself.

Always rooting for you, buddy.`
    },
    partB: {
      heading: "HAPPIEST BIRTHDAYYYYY!!",
      subheading: "IT'S YOUR DAY!",
      prompt: "Make a wish before the candles disappear, Kumbhkaran!",
      btnWish: "MAKE A WISH ✨",
      celebrationDanceHeading: "WE SURVIVED ANOTHER YEAR OF EACH OTHER!",
      celebrationDanceSub: "LET'S GOOOOOOO! 😂🤍",
      letterTitle: "A Birthday Letter For My Best Mittr",
      letterBody: `To my favourite human,

Another year older, another year wiser... although I'm still waiting for the wiser part. 😂

I genuinely hope this new chapter of your life brings you everything you've been working towards.

I hope you find happiness in unexpected places, success in whatever path you choose, people who appreciate you, and countless reasons to smile.

I'm proud of you for having the courage to explore a different path and start something new.

Never doubt yourself. Keep growing, keep learning, keep laughing and keep being the wonderfully weird person you are.

Thank you for being part of my life and for all the memories we've made.

Here's to more nonsense, more laughter, more adventures and many more birthdays!

And remember...

You can change your career.
You can change your hairstyle.
You can change your entire life.

BUT YOU CANNOT ESCAPE MY IRRITATION. 😂

HAPPY BIRTHDAY, YOU IDIOT! 🤍`
    }
  },

  scene06: {
    tag: "Chapter 06 / One Last Thought",
    heading: "UNDER A BLANKET OF STARS",
    subheading: "Before you close this little journal...",
    btnReveal: "ONE LAST THING... 🤍",
    thankYouCaption: "THANK YOU FOR BEING MY BEST MITTR! 🤍",
    finalLetter: `Among all the people life introduces us to, some become really special without us even realizing when it happened.

I'm genuinely glad our paths crossed.

Thank you for being part of so many happy memories.

Thank you for all the random conversations, the laughs, the office madness and the little moments that made ordinary days special.

I hope life gives you countless reasons to smile.

No matter where life takes us, I hope we never lose the ability to laugh together and create new memories.

Here's to all the memories we've made and all the madness still waiting for us.

HAPPY BIRTHDAY, MY BEST MITTR. 🤍`,
    footerQuote: "MADE WITH LOVE, A LITTLE MADNESS & UNLIMITED BAKCHODI.",
    footerSignature: "From your favourite human and permanent headache.",
    replayBtn: "REPLAY THE SURPRISE ↺"
  }
};
