

// Registriert ein Click Event auf das Element selbst, oder ein Kind davon
swapinode().addEventListener('click', function(e) {

    let sel = '.EXAMPLE_CLASS'; sel = ( e.target.matches(sel) ? e.target : e.target.closest(sel) );  // sel or null

    if( sel !== null ) {

        console.log(sel.dataset.example);
    }
});


