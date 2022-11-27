//the solution - usding a custom sort letters
function letterSort(lang, letters) {
    letters.sort(new Intl.Collator(lang).compare);
    return letters;
  }


//the solution - using a custom sort numbers
function sortedNum(numbers) {
    numbers.sort( (a, b)=>{
        log( 'sorting', a, b);
        if( a > b) return 1;
        else if(b > a) return -1;
        else return 0;
    })
}