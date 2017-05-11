[ 'bell', 'crash', 'highHat', 'kick', 'metronome', 'rim', 'snare', 'tom1', 'tom2' ].forEach( ( fileName, i, arr ) => {
    let audio = new Audio( `data/${ fileName }.mp3` )
    if( i== 0 ) for( let prop in audio) {console.log( prop )}
    let div = document.createElement( 'div' )
    let p = document.createElement( 'p' )
    p.style.padding = `20px`
    p.innerHTML = `<p>${fileName.toUpperCase()}</p>`
    div.appendChild( p )
    div.className = 'drum'
    div.style.width = `${ window.innerWidth }px`
    let h = ~~ ( window.innerHeight / arr.length )
    div.style.color = `#fff`
    div.style.fontFamily = `sans-serif`
    div.style.height = `${ h }px`
    div.style.top = `${ i * h - 20 }px`
    div.style.background = `#${ i }f0000`
    div.addEventListener( 'click', e => {
        e.preventDefault()
        console.log( 'click' )
        audio.currentTime = 0.01
        audio.play()
    } )
    document.body.appendChild( div )

} )
