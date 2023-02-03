const quotes = [
    {
        quote: "내가 알아서 할게",
        author: "이지영",
    },
    {
        quote: "자기인생 자기가 알아서",
        author: "이지영",
    },
    {
        quote: "하루하루 열심히 한다는 건 적금과도 같다",
        author: "최원태",
    },
    {
        quote: "난 귀한 존재야",
        author: "김성민",
    },
    {
        quote: "운동이 힘들어야지 정신차리지",
        author: "최재훈",
    },
    {
        quote: "끝날 때까지 끝난 게 아니다",
        author: "베이브 루스",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;