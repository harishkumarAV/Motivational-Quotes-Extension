document.getElementById('new-quote').addEventListener('click', getQuote);

function getQuote() {
    const quotes = [
        "If you don't like the road you're walking, start paving another one.",
        "The best way to get started is to quit talking and begin doing.",
        "The biggest adventure you can take is to live the life of your dreams.",
        "Do your thing and don't care if they like it.",
        "Nothing is impossible, the word itself says I'm possible.",
        "Believe you can and you're halfway there.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Don't watch the clock; do what it does. Keep going.",
        "Keep your face always toward the sunshine—and shadows will fall behind you.",
        "You are never too old to set another goal or to dream a new dream.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "It always seems impossible until it's done.",
        "Act as if what you do makes a difference. It does.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Don't be afraid to give up the good to go for the great.",
        "I find that the harder I work, the more luck I seem to have.",
        "Success is not in what you have, but who you are.",
        "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "You don't have to be great to start, but you have to start to be great.",
        "Your limitation—it's only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Success doesn't just find you. You have to go out and get it.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Dream bigger. Do bigger.",
        "Don't stop when you're tired. Stop when you're done.",
        "Wake up with determination. Go to bed with satisfaction.",
        "Do something today that your future self will thank you for.",
        "Little things make big days.",
        "It's going to be hard, but hard does not mean impossible.",
        "Don't wait for opportunity. Create it.",
        "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
        "The key to success is to focus on goals, not obstacles.",
        "Dream it. Believe it. Build it.",
        "The only way to achieve the impossible is to believe it is possible.",
        "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "Do what you can with all you have, wherever you are.",
        "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "Go as far as you can see; when you get there, you'll be able to see further.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "The only place where success comes before work is in the dictionary.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Believe in the power of yet.",
        "Perseverance is not a long race; it's many short races one after the other.",
        "Success is the sum of small efforts, repeated day-in and day-out.",
        "The only person you are destined to become is the person you decide to be."
    ];
    

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quote').textContent = quote;
}

// Fetch a quote when the popup is opened
getQuote();
