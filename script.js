var quotes = [
    "“we cannot solve problems with the kind of thinking we employed when we came up with them.”  — Albert Einstein",
    "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi",
    "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain",
    "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt",
    "“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale",
    "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson",
    "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren",
    "“He who conquers himself is the mightiest warrior.” — Confucius",
    "“Try not to become a man of success, but rather become a man of value.” - Albert Einstein",
    "“One man with courage makes a majority.” - Andrew Jackson",
    "“One secret of success in life is for a man to be ready for his opportunity when it comes.” - Benjamin Disraeli",
    "“A man who has committed a mistake and doesn't correct it is committing another mistake.” - Confucius Kongzi",
   "“The successful man will profit from his mistakes and try again in a different way.” - Dale Carnegie",
   "“A successful man is one who can lay a firm foundation with the bricks others have thrown at him.” - David Brinkley",
   "“He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.” - Epictetus"
];

function generateQuote(){
    var randomIndex = Math.floor(Math.random() * quotes.length);

    var randomQuote = quotes[randomIndex];

    var quoteElement = document.getElementById('quote');

    quoteElement.textContent = randomQuote;
}

var generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', generateQuote);