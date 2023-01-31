let BlockedSites = ["youtube.com","facebook.com", "instagram.com"];

let CurrrentUrl = window.location.href;

for(let i of BlockedSites){
    if(CurrrentUrl.includes(i)){
        window.location.href = "https://google.com";
    }
}