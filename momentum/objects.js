const playerName = "junhee";
const playerPoints = 199;
const playerHandsome =true;
const playerFat = "little";

// player[0] == name
// player[1] == points
// 이런식으로 작성할 수는 있겠지만 좋지 않다.
// const player = ["junhee", 199, true, "little"];

//[Prototype] object 타입으로 정리된 내용입니다.
const player = {
    name:"junhee",
    points:199,
    handsome:true,
    fat:"litte",
};
console.log(player);
console.log(player.name);
// 같은 내용이 나옴
console.log(player["name"]);

// contstant는 값을 변경 할수 없다고 했지만, (const)
// 아래의 예시는 object 안의 내용을 변경한것이다.
// player 이라는 값을 변경 한것이 아니다.
player.fat = false;
player.points = 155;
console.log(player);

// 역시 추가 또한 가능하다. lastName 이라는 데이터 재산은 없었지만  
// 이렇게 추가가 된다.
player.lastName = "potato";
console.log(player) ;

// object에서 내용을 받을 수도 있고 추가할수도 있다.
player.points = player.points + 155;
console.log(player.points);