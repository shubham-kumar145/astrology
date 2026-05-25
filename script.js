
const compliments = [
    "You radiate energy like a star in perfect alignment.",
    "Your presence brings peace like a full moon on a calm night.",
    "The universe smiles every time you do.",
    "Your soul sparkles brighter than any constellation.",
    "Destiny feels lucky to have you.",
    "You have a cosmic charm that can’t be taught.",
    "Your heart glows with celestial kindness.",
    "You’re as timeless as the stars above.",
    "You carry the wisdom of the skies.",
    "Your aura is pure stardust.",
    "The galaxies conspired to make someone as radiant as you.",
    "You shine even when Mercury is in retrograde.",
    "Your intuition is a gift from the cosmos.",
    "You’re written in the stars.",
    "Your smile bends gravity.",
    "Like the sun, you brighten everything you touch.",
    "You're rare — like a solar eclipse of joy.",
    "Your essence echoes through the stars.",
    "Even Venus envies your beauty and grace.",
    "You bring balance like the perfect zodiac alignment.",
    "You have Saturn’s strength and Neptune’s dreaminess.",
    "The constellations couldn't form a better soul.",
    "Your presence feels like a wish fulfilled.",
    "You are the heartbeat of the universe.",
    "The stars whisper your name in admiration.",
    "Like Jupiter, your kindness is massive and magnetic.",
    "You’re a guiding light in the cosmic journey of others.",
    "Your laugh could start a meteor shower.",
    "Your vibes rewrite the astrology charts.",
    "You have the calm of a crescent moon and the passion of a comet.",
    "The stars envy your brilliance."
];


//size of 32
const victimCardCompliments = [
    "You always help others, but no one seems to notice your kindness.",
    "You're the first to show up and the last to be thanked.",
    "You give your best to everyone, yet people take you for granted.",
    "You carry so much on your shoulders, but no one ever asks if you're okay.",
    "You forgive so easily, even when people don't deserve it.",
    "You bring light to others, but you're always left in the dark.",
    "You stay loyal to those who don't even see your worth.",
    "You’re the peacekeeper, yet the one who gets blamed.",
    "You always listen to others, but no one hears you.",
    "You love deeply, even when it hurts you in the end.",
    "You support everyone’s dreams, but they never support yours.",
    "You're always understanding, even when you're misunderstood.",
    "You make sacrifices no one even notices.",
    "You show up for people who wouldn’t do the same for you.",
    "You're the strong one, so no one checks if you’re struggling.",
    "You always put others first, and they still say you’re selfish.",
    "You’re the glue holding everything together, but you're breaking inside.",
    "You keep being kind, even when the world is cruel to you.",
    "You deserve the love you so freely give to everyone else.",
    "You do everything right, and still get treated wrong.",
    "You stay calm for others while you're falling apart inside.",
    "You always say 'I'm fine' so others don't worry, even when you're not.",
    "You give second chances like candy, even when they keep hurting you.",
    "You smile to hide the pain you wish someone would notice.",
    "You carry everyone's problems and bury your own.",
    "You make life easier for others, but no one makes it easier for you.",
    "You apologize just to keep the peace, even when you're not wrong.",
    "You never ask for help, because you're used to being the helper.",
    "You give your time, your energy, your heart — and still feel invisible.",
    "You act strong so no one sees how much you're hurting.",
    "You get blamed for things you're only trying to fix.",
    "You show up for people who wouldn’t even notice if you were gone."
];


// size of 99
const positiveLifeRecommendations = [
    "Feed a street dog or cat with leftover food.",
    "Plant a tree or care for a houseplant.",
    "Call your parents just to say you love them.",
    "Write a thank-you note to someone who helped you.",
    "Smile at a stranger today.",
    "Donate old clothes to someone in need.",
    "Volunteer at a local shelter or food bank.",
    "Compliment someone genuinely, even if you don’t know them well.",
    "Start a gratitude journal and write one thing daily.",
    "Pick up litter when you see it.",
    "Leave a kind note in a library book or public place.",
    "Pay for someone else's coffee or meal anonymously.",
    "Support a small local business instead of a big chain.",
    "Offer to help a neighbor with groceries or chores.",
    "Teach someone a skill you know — even if it’s small.",
    "Send a message to a friend you’ve lost touch with.",
    "Hold the door open without expecting anything back.",
    "Buy food or water for a delivery person or worker.",
    "Read a book that challenges your mindset.",
    "Practice 10 minutes of silence or mindfulness.",
    "Share your umbrella with someone caught in the rain.",
    "Cook an extra meal and give it to someone hungry.",
    "Let someone go ahead of you in a queue.",
    "Write down your goals and take one small step.",
    "Give away something you value to someone who needs it more.",
    "Teach a child something they won’t learn in school.",
    "Support someone else’s dream with words or action.",
    "Give a genuine apology if you’ve hurt someone.",
    "Listen to someone without interrupting or judging.",
    "Say 'thank you' more often — and mean it.", "Give someone a book that changed your life.",
    "Leave coins in a vending machine for the next person.",
    "Call your grandparents and ask about their childhood.",
    "Say 'I'm proud of you' to someone who needs to hear it.",
    "Clean up after someone without mentioning it.",
    "Support a friend’s small business by sharing their post.",
    "Make a care package for someone going through a tough time.",
    "Learn how to say 'thank you' in another language.",
    "Encourage someone who’s doubting themselves.",
    "Reconnect with someone you've had a falling out with.",
    "Send flowers anonymously to someone’s workplace.",
    "Offer your seat to someone without hesitation.",
    "Share your favorite recipe with a friend.",
    "Say 'I appreciate you' to someone today.",
    "Check on your quietest friend.",
    "Leave a book or toy at a public bench for someone to find.",
    "Share a memory that made you smile with the person in it.",
    "Fix something that's broken in your home or someone else’s.",
    "Organize a surprise lunch for a coworker or classmate.",
    "Buy someone’s groceries if they’re struggling.",
    "Offer to babysit so a parent can rest.",
    "Say something kind to yourself in the mirror.",
    "Recommend a life-changing podcast or book to a friend.",
    "Paint a small rock with a positive message and leave it outside.",
    "Give blood if you're eligible.",
    "Share your Wi-Fi with a neighbor who needs it.",
    "Bring snacks for your coworkers or classmates.",
    "Let someone merge in traffic without frustration.",
    "Write a positive review for a business you love.",
    "Talk to someone who looks lonely.",
    "Celebrate someone else’s win like it’s your own.",
    "Spend a day offline to reconnect with the world around you.",
    "Buy from a street vendor or independent artist.",
    "Leave an extra big tip for a hardworking server.",
    "Text a friend just to remind them they matter.",
    "Offer to teach elderly neighbors how to use tech.",
    "Draw something and leave it for a stranger.",
    "Help someone struggling to carry something.",
    "Bring a cold drink to someone working in the heat.",
    "Take someone out who hasn’t been out in a while.",
    "Help someone study or practice for a job interview.",
    "Water someone else's plants when they’re away.",
    "Encourage a child who looks discouraged.",
    "Share your umbrella with someone unexpected.",
    "Start a 'blessings jar' with daily entries.",
    "Stand up for someone who's being treated unfairly.",
    "Surprise your sibling or cousin with a call or gift.",
    "Sponsor a child’s education or meal if you can.",
    "Let someone borrow something valuable to you.",
    "Fix a meal for someone going through a hard time.",
    "Give your spot in line to someone in a hurry.",
    "Celebrate your progress, not just your success.",
    "Invite someone who’s often left out.",
    "Help a student with homework or college prep.",
    "Make a playlist for someone who needs cheering up.",
    "Ask a cashier or delivery worker how their day is going.",
    "Support a friend’s art, music, or writing.",
    "Help someone set up their resume or LinkedIn.",
    "Mow an elderly neighbor’s lawn or shovel snow.",
    "Offer to drive someone to an appointment.",
    "Bake something and give it away.",
    "Let someone vent without offering advice.",
    "Encourage someone to pursue what they love.",
    "Share food with someone who forgot lunch.",
    "Let someone keep the change on purpose.",
    "Start a habit that improves your mental health.",
    "Be patient with someone who is learning.",
    "Create something just to make someone smile.",
    "Tell someone they’ve made a difference in your life.",
    "Give credit to someone who inspired you.",
    "Help a stranger find their way if they look lost.",
    "Tell someone what you admire about them.",
    "Give space to someone who’s overwhelmed or grieving.",
    "Offer to translate for someone struggling with language."
];


// size is 20
const futurePredictions = [
    "You will become a crorepati sooner than you think.",
    "You will travel to places you've only dreamed of.",
    "You will build the life you always wanted.",
    "You will find love that truly values you.",
    "You will inspire thousands with your story.",
    "You will own your dream home.",
    "You will reach a level of peace you never imagined.",
    "You will be the reason someone believes in magic again.",
    "You will get that dream job or promotion.",
    "You will overcome every obstacle in your path.",
    "You will reconnect with your true self and shine.",
    "You will receive unexpected money or abundance.",
    "You will become healthier, stronger, and happier.",
    "You will finally feel seen, heard, and appreciated.",
    "You will turn your passion into profit.",
    "You will become the first millionaire in your family.",
    "You will heal from what once broke you.",
    "You will be surrounded by people who truly care.",
    "You will have a breakthrough that changes everything.",
    "You will wake up one day and realize — you made it."
];

const form = document.getElementById('astroForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submitted');

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const day = Number(document.getElementById('day').value);
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);

    console.log(firstName, lastName, day, month, year);

    // Generate random indexes
    const num2 = Math.floor(Math.random() * victimCardCompliments.length);
    const num3 = Math.floor(Math.random() * positiveLifeRecommendations.length);
    const num4 = Math.floor(Math.random() * futurePredictions.length);

    // Zodiac calculation
    function getZodiacSign(day, month) {
        const signs = [
            "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
            "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
        ];
        const cutoffs = [20, 19, 20, 20, 21, 21, 23, 23, 23, 23, 22, 22];
        return (day < cutoffs[month - 1]) ? signs[(month + 10) % 12] : signs[month - 1];
    }

    const zodiac = getZodiacSign(day, month);

    // Final message
    const result = document.getElementById('result');
    const message = `
        Hello ${firstName} ${lastName},\n
        Your zodiac sign is: ${zodiac}.\n
        ${victimCardCompliments[num2]}\n
        My recommendations for you: ${positiveLifeRecommendations[num3]}\n
        Your Future Predicition: ${futurePredictions[num4]}
    `;
    result.innerText = message;
});
const reset = document.getElementById('reset')
reset.onclick = () => location.reload();

