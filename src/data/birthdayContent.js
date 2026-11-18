/**
 * Centralized Birthday Content Configuration
 * Customize all text, captions, memory cards, and letters here.
 */

export const birthdayData = {
  recipient: {
    name: "Bestie",
    nickname: "You Idiot",
    birthDate: {
      year: 2001,
      month: 11, // November (1-indexed for human readability)
      day: 20,
    },
    celebrationYear: 2026,
  },

  scene01: {
    tag: "A Secret Project",
    heading: "HEY YOU... 👀",
    introLines: [
      "So... I've been secretly working on something for you.",
      "Before you ask, YES, I actually put some serious effort into this.",
      "And no, it's not another boring birthday message.",
      "Someone has spent their precious time creating something special for you. So you better appreciate it. 😂"
    ],
    question: "Are you ready to see what I've made?",
    btnYes: "YESSS! SHOW ME! ✨",
    btnNo: "NOPE, I'M BUSY. 🙄",

    rejectionDrama: {
      heading: "EXCUSE ME???? 😭",
      subheading: "YOU CAN'T JUST REJECT MY HARD WORK LIKE THAT!",
      body: "I HAVE SPENT MY PRECIOUS HOURS ON THIS! Weeks of planning, hours of coding, and infinite braincells went into this masterpiece! You are NOT walking away so easily! 🥊🧸",
      btnAccept: "OKAY FINE, SHOW ME 😂"
    }
  },

  scene02: {
    tag: "Chapter 02 / Office Chronicles",
    heading: "THE OFFICE CHRONICLES",
    subheading: "Where productivity met unlimited nonsense.",
    description: "Click any polaroid to take a closer trip down memory lane.",
    memories: [
      {
        id: "irritate",
        assetKey: "office01",
        title: "NON-STOP IRRITATING EACH OTHER",
        caption: "WORK WAS HARD. IRRITATING EACH OTHER WAS EASY.",
        note: "Professional colleagues? Maybe. Peaceful colleagues? NEVER.",
        doodle: "paperclip",
        rotate: -2.5,
        colorTag: "#B8C4B0"
      },
      {
        id: "snacks",
        assetKey: "snacks01",
        title: "THE SNACKS DEPARTMENT",
        caption: "BREAK TIME WAS OUR SPECIALIZATION.",
        note: "Some meetings were important. Some snacks were MORE important.",
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
        note: "Typing furiously just to look busy, pretending to understand Jira tickets, and 4 PM chai debates.",
        doodle: "sparkle",
        rotate: 2.1,
        colorTag: "#E8DFD1"
      },
      {
        id: "little-things",
        assetKey: "office03",
        title: "THE LITTLE THINGS",
        caption: "It's funny how the smallest everyday moments become the memories we miss the most.",
        note: "From debug headaches to uncontrollable laughing fits across the room. Thank you for making work bearable.",
        doodle: "heart",
        rotate: -3.0,
        colorTag: "#B8C4B0"
      }
    ]
  },

  scene03: {
    tag: "Chapter 03 / Secret Envelopes",
    heading: "A FEW THINGS I DON'T SAY OFTEN...",
    subheading: "Four letters sealed with care. Click each envelope to unfold what's inside.",
    letters: [
      {
        id: "letter-1",
        title: "OPEN WHEN YOU NEED A SMILE",
        badge: "Letter 01",
        color: "#D8C6A5",
        stamp: "☕",
        content: `Just a reminder that somewhere in this world, there is someone who thinks you're a complete idiot but still likes having you around.

Lucky you! 😂`
      },
      {
        id: "letter-2",
        title: "OPEN WHEN LIFE GETS DIFFICULT",
        badge: "Letter 02",
        color: "#B8C4B0",
        stamp: "🌱",
        content: `Life won't always go according to plan. There will be confusing days, unexpected turns and moments when you question yourself.

But please never underestimate yourself. You're capable of so much more than you realize.

Keep going. I'm cheering for you.`
      },
      {
        id: "letter-3",
        title: "OPEN WHEN YOU MISS OUR OLD OFFICE DAYS",
        badge: "Letter 03",
        color: "#C5D1D8",
        stamp: "📎",
        content: `Remember those ordinary working days, the endless irritating, random conversations, snack breaks and team masti?

We probably didn't realize how many beautiful memories we were making at that time.

I hope we never stop creating moments like those.`
      },
      {
        id: "letter-4",
        title: "OPEN WHEN YOU FORGET HOW SPECIAL YOU ARE",
        badge: "Letter 04",
        color: "#A99A88",
        stamp: "🤍",
        content: `You're genuinely one of those people I'm glad life introduced me to.

I appreciate your presence, your madness, your kindness and the person you're becoming.

Never stop believing in yourself.`
      }
    ]
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
      { year: 2010, title: "Childhood Memories", text: "School days, games, and discovering the simple joys." },
      { year: 2015, title: "Teenage Adventures", text: "Big dreams beginning to form, energy and ambitions." },
      { year: 2020, title: "A New Chapter", text: "Stepping into code, software, college, and adulthood." },
      { year: 2024, title: "New Experiences", text: "Bravery to pivot, explore new horizons, and grow." },
      { year: 2026, title: "The 25th Birthday", text: "Quarter-century milestone of an absolute legend!" }
    ],
    birthdayCard2001: {
      title: "THE DAY OUR FAVOURITE HUMAN ARRIVED. 🤍",
      dateText: "20 NOVEMBER 2001",
      note: "The universe had no idea the amount of chaos and greatness it had just released."
    },
    birthdayCard2026: {
      title: "20 NOVEMBER 2026",
      subtitle: "25 YEARS OF BEING YOU!",
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

I'm genuinely rooting for you.`
    },
    partB: {
      heading: "HAPPIEST BIRTHDAYYYYY!!",
      subheading: "IT'S YOUR DAY!",
      prompt: "Make a wish before the candles disappear.",
      btnWish: "MAKE A WISH ✨",
      letterTitle: "A Birthday Letter Just For You",
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
    finalLetter: `Among all the people life introduces us to, some become really special without us even realizing when it happened.

I'm genuinely glad our paths crossed.

Thank you for being part of so many happy memories.

Thank you for all the random conversations, the laughs, the office madness and the little moments that made ordinary days special.

I hope life gives you countless reasons to smile.

No matter where life takes us, I hope we never lose the ability to laugh together and create new memories.

Here's to all the memories we've made and all the madness still waiting for us.

HAPPY BIRTHDAY, BESTIE. 🤍`,
    footerQuote: "MADE WITH LOVE, A LITTLE MADNESS, AND MANY HOURS OF CODING.",
    footerSignature: "From your favourite human and permanent headache.",
    replayBtn: "REPLAY THE SURPRISE ↺"
  }
};
