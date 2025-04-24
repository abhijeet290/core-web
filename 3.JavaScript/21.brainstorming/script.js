// Generate basic insights based on DOB

// BAsed on month 12
const zodiacSigns = [
  "Aries", // March 21 – April 19
  "Taurus", // April 20 – May 20
  "Gemini", // May 21 – June 20
  "Cancer", // June 21 – July 22
  "Leo", // July 23 – August 22
  "Virgo", // August 23 – September 22
  "Libra", // September 23 – October 22
  "Scorpio", // October 23 – November 21
  "Sagittarius", // November 22 – December 21
  "Capricorn", // December 22 – January 19
  "Aquarius", // January 20 – February 18
  "Pisces", // February 19 – March 20
];

// Based on date size:31
const compliments = [
  "You have a brilliant mind that never fails to impress with its clarity and creativity.",
  "Your smile has the power to brighten even the darkest of days.",
  "You radiate kindness and warmth that makes everyone feel welcome and valued.",
  "Your ability to stay calm and composed in stressful situations is truly admirable.",
  "You’re not just intelligent, but wise beyond your years—your insights are always thoughtful.",
  "You have a natural ability to lead with compassion and integrity.",
  "Your sense of humor is a gift—your laughter is absolutely contagious!",
  "You’re incredibly thoughtful, always paying attention to the little things that make people feel special.",
  "Your resilience in tough times is an inspiration to everyone who knows you.",
  "You bring a sense of peace and balance to those around you.",
  "You’re a great listener, and people feel heard and understood when they talk to you.",
  "You have the rare talent of making complex things seem simple and understandable.",
  "You exude confidence without arrogance—a truly admirable quality.",
  "You are a constant source of positivity, lifting others up with your presence.",
  "Your dedication and work ethic show how much you care about doing things right.",
  "You have such a genuine heart—it shows in everything you do.",
  "You handle challenges with such grace and strength, it’s truly inspiring.",
  "Your creativity knows no bounds—your ideas are always fresh and exciting.",
  "You’re a wonderful friend, always reliable, supportive, and caring.",
  "You’re beautifully unique, and the world is better with you in it.",
  "Your determination to achieve your goals is deeply motivating.",
  "You have a natural charm that makes people gravitate toward you.",
  "You always find a way to bring light into other people’s lives.",
  "You are courageous, never backing down when it comes to standing up for what's right.",
  "You have a soulful presence that touches others more than you realize.",
  "Your curiosity and hunger for knowledge are truly admirable.",
  "You bring out the best in people just by being yourself.",
  "You are emotionally intelligent, always aware and respectful of others' feelings.",
  "You are humble, despite how much you’ve accomplished and how far you've come.",
  "You’re a rare blend of intelligence, empathy, and strength.",
  "You make the world around you better just by being in it.",
];

// size 20
const victimCardCompliments = [
  "You always do good to others but don’t get the same in return.",
  "Your heart is so pure, yet people often take you for granted.",
  "You give your all in relationships, but not everyone matches your effort.",
  "You’re always there for others, even when no one’s there for you.",
  "You help people heal while quietly carrying your own pain.",
  "You forgive easily, even when others don’t deserve your kindness.",
  "You put everyone else first, and sometimes forget to care for yourself.",
  "Your kindness is often mistaken for weakness, but it’s your greatest strength.",
  "You’ve silently endured so much, yet you still show up with a smile.",
  "You understand people deeply, but feel like no one truly understands you.",
  "You always believe in others, even when they stop believing in you.",
  "You stand strong for everyone, but no one sees the battles you fight alone.",
  "You bring peace to others, while you quietly hide your own storms.",
  "You listen to everyone’s problems, but have no one to share your own with.",
  "You love deeply, even after being hurt again and again.",
  "You never ask for anything in return, even when you give so much.",
  "You’re a light in others’ lives, even when you’re surrounded by darkness.",
  "You show loyalty when others only show convenience.",
  "You always try to fix broken things, even when people don’t try to fix you.",
  "You stay strong for everyone, even when you feel like falling apart inside.",
];

//   recommendation size 30

const futureRecommendations = [
  "Help someone in need without expecting anything in return.",
  "Read a book that challenges your thinking and expands your knowledge.",
  "Wake up early and use that quiet time to reflect or plan your day.",
  "Volunteer at a local shelter, school, or NGO to give back to your community.",
  "Start a daily gratitude journal and write 3 things you’re grateful for.",
  "Feed a stray animal or provide water in the summer — small acts matter.",
  "Practice meditation or mindfulness to calm your mind and build focus.",
  "Call or visit your parents or grandparents and make them feel loved.",
  "Invest time in learning a new skill or language that interests you.",
  "Exercise regularly, even if it’s just a 20-minute walk daily.",
  "Be kind to someone who can’t return the favor — that’s true humanity.",
  "Save a portion of your income every month, no matter how small.",
  "Limit screen time and spend time in nature to refresh your soul.",
  "Be honest with yourself — reflect on your strengths and weaknesses.",
  "Forgive someone who hurt you — it frees *you* more than them.",
  "Compliment someone sincerely and watch how it uplifts them.",
  "Start your day by making your bed — small wins lead to big habits.",
  "Support local businesses or farmers whenever you can.",
  "Spend quality time with a child — it teaches you patience and joy.",
  "Avoid gossip and choose silence over unnecessary negativity.",
  "Plant a tree or maintain a small plant — care teaches responsibility.",
  "Write down your goals and review them weekly to stay on track.",
  "Help someone with their studies, career, or problems selflessly.",
  "Give away clothes or items you don’t use to someone who needs them.",
  "Avoid wasting food — serve yourself only what you can eat.",
  "Smile at strangers — kindness is free and contagious.",
  "Don’t postpone tasks that take less than 2 minutes — just do them.",
  "Share your knowledge with someone who is struggling to learn.",
  "Be punctual — respect for time shows discipline and character.",
  "Speak less, listen more — you’ll learn and connect deeply.",
];

// prediction size 20

const predictionsForYou = [
  "Today brings clarity to something you've been overthinking. Trust your instincts.",
  "You will receive an unexpected message that will brighten your day.",
  "A small act of kindness today will bring you big rewards in the near future.",
  "Focus on your goals — the universe is aligning opportunities in your favor.",
  "Someone from your past may reconnect with you in a meaningful way.",
  "Your energy is magnetic today; new connections could turn into long-term relationships.",
  "Financial gains are on the horizon. Stay grounded and plan wisely.",
  "You will feel deeply inspired — use this time to express your creativity.",
  "A decision you’ve been delaying will finally become clear today.",
  "You’ll notice a positive shift in your emotional well-being. Embrace it.",
  "Patience will bring you the results you’ve been waiting for. Keep going.",
  "Today is ideal for starting something new — take that leap of faith.",
  "You will find peace in unexpected places. Be open to subtle signs.",
  "The answer you've been seeking is within — trust your inner voice.",
  "An opportunity to help someone will lead to personal fulfillment.",
  "Your efforts will finally be recognized — stay consistent and humble.",
  "A change in routine will bring a fresh perspective. Be flexible.",
  "Good news related to your career or studies is coming your way.",
  "Let go of what's not serving you — something better is around the corner.",
  "Your positivity will attract great people and experiences today.",
];

const form = document.getElementById("astroForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log('submitted')
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const date = Number(document.getElementById("day").value);
  const month = Number(document.getElementById("month").value);
  const year = Number(document.getElementById("year").value);
  //   console.log(fname, lname,date,month,year);

  const result = document.getElementById("result");
  const first_message = `Hello ${fname} ${lname}`;
  const second_message = `Your zodiac sign is ${zodiacSigns[month - 1]}`;
  const third_message = `${compliments[date - 1]}`;
  let index = Math.floor(Math.random() * 20);
  const fourth_message = victimCardCompliments[index];

  index = (fname.length * lname.length * year) % 30;
  const fifth_message = futureRecommendations[index];
  // result.innerText='Hello from JS'
  index = (date * month * year) % 20;
  const sixth_message = predictionsForYou[index];
  result.innerText = `${first_message}. ${second_message} ${third_message} ${fourth_message} Our recommendation for you:${fifth_message} Your future prediction is: ${sixth_message}. `;
});
