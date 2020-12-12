const loadingLogo = document.querySelectorAll("#loadingLogo path");

for (let i = 0; i < loadingLogo.length; i++) {
    console.log(`Letter ${i} is ${loadingLogo[i].getTotalLength()}`);
}