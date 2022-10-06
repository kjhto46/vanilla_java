const quotes = [
    {
        quote: "그 속에 한 조각의 애처로움도 없는 시는 씌어지지 않는 편이 낫다.",
        author: "오스카 와일드",
    },
    {
        quote: "내가 시를 만든 것이 아니다. 시가 나를 만든 것이다.",
        author: "괴테",
    },
    {
        quote: "산문은 저녁과 밤을 그릴 수 있지만, 시는 새벽을 노래하는 데 필요하다.",
        author: "메레디스",
    },
    {
        quote: "시는 가장 행복하고 가장 선한 마음의, 가장 선하고 가장 행복한 순간의 기록이다.",
        author: "셸리",
    },
    {
        quote: "시는 그것 자체가 아름다운 일이며, 시를 쓴다거나 감상하는 것은 유쾌한 경험이다.",
        author: "루이스",
    },
    {
        quote: "시는 마음속의 불꽃이고 수사학(修辭學)은 눈송이다. 불길과 눈이 어떻게 하나가 될 수 있겠는가?",
        author: "칼릴 지브란",
    },
    {
        quote: "시는 번갯불의 섬광이어서, 어휘들의 배열로만 끝날 때는 단순한 작문에 불과하다.",
        author: "칼릴 지브란",
    },
    {
        quote: "시는 불가해한 것에의 탐구이다.",
        author: "스티븐스",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() *  quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;