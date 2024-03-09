if (window.matchMedia) {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(prefersDarkMode);  
if (prefersDarkMode) {
    console.log('Dark mode is enabled.');
    var ColourArray = ['#1c1b22', '#3b3948', '#1f1f1f', '#181818', '#1c1b22', '#15202b', '#313338', '#36393f'];
    var getBGcolour = ColourArray[Math.floor(Math.random() * ColourArray.length)];
    document.body.style.backgroundColor = getBGcolour;
    } else {
    console.log('Dark mode is not enabled.');
    var ColourArray = ['#80bad9', '#ede9af', '#f2afdf', '#cdeb83', '#8bc3b1', '#f9d999', '#eeb550', '#CB99C9', '#F49AC2', '#779ECB', '#AEC6CF', '#DEA5A4', '#ab907a', '#FF6961', '#c8a99f','#bec89f', '#99C7FF', '#ffbdbd'];
    var getBGcolour = ColourArray[Math.floor(Math.random() * ColourArray.length)];
    document.body.style.backgroundColor = getBGcolour;
    }
    } else {
    console.log('matchMedia not supported, unable to determine dark mode.');
    }