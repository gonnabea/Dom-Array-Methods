const addUserBtn = document.getElementById("addUserBtn"),
doubleBtn = document.getElementById("doubleBtn"),
millionaresBtn = document.getElementById("millionaresBtn"),
descendingBtn = document.getElementById("descendingBtn"),
totalBtn = document.getElementById("totalBtn"),
personArea = document.getElementById("personArea");


function handleAdd(){
    const div = document.createElement("div");
    const span = document.createElement("span");
    const span2 = document.createElement("span");
    const firstNames = "김이박최정강조윤장임한신오서권황송안유흥전고문손";
    const lastNames = ["민준","서준","예준","도윤","시우","주원","하준","지호","지후",
"준서","준우","현우","지훈","도현"];
    const randomNum = Math.floor(Math.random()*24);
    const randomNum2 = Math.floor(Math.random()*13);
    const randomWealth = `${Math.floor(Math.random()*100000000)}원`;
    const firstName = firstNames.split("")[randomNum];
    const lastName = lastNames[randomNum2];
    const fullName = firstName+lastName;
    span.innerHTML = fullName;
    div.appendChild(span);
    personArea.appendChild(div);
    span.className = "username";
    span2.innerHTML = randomWealth;
    span2.className = "wealth";
    div.appendChild(span2);
    div.className = "person_info";
}

function handleDouble(){
    const wealth = document.getElementsByClassName("wealth");
    for(let i=0 ; i<wealth.length ; i++){
        wealth[i].innerHTML = `${parseInt(wealth[i].innerHTML)*2}원`;
    }
}

function handleFilter(){
    const wealth = document.getElementsByClassName("wealth");
    for(let i=0 ; i<wealth.length ; i++){
        if(parseInt(wealth[i].innerHTML) < 100000000){
            console.log(wealth[i].parentNode)
            wealth[i].parentNode.style.display = "none";
        };
    }
}

function handleDescend(){
    const wealth = document.getElementsByClassName("wealth");
    const username = document.getElementsByClassName("username");
    let sortable = [];
    for(let i=0 ; i<wealth.length ; i++){
        sortable.push(`${username[i].innerHTML}+${parseInt(wealth[i].innerHTML)}`);
    }
    for(let i=0 ; i<wealth.length ; i++){
        wealth[i].innerHTML = `${sortable.sort(function(a,b){
            return parseInt(a.split("+")[1])-parseInt(b.split("+")[1]);
        }).reverse()[i].split("+")[1]}원`
        username[i].innerHTML = sortable[i].split("+")[0]
    }
}

function handleTotal(){
    const wealth = document.getElementsByClassName("wealth");
    const total = document.getElementById("total");
    let totalValue = 0;
    for(let i=0 ; i<wealth.length ; i++){
        totalValue+= parseInt(wealth[i].innerHTML);
    }
    total.innerHTML = `합산: ${totalValue}원`;
}

function init(){
    addUserBtn.addEventListener("click", handleAdd);
    doubleBtn.addEventListener("click", handleDouble);
    millionaresBtn.addEventListener("click", handleFilter);
    descendingBtn.addEventListener("click", handleDescend);
    totalBtn.addEventListener("click", handleTotal);
}

init();