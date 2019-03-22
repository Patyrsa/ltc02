function beersong (count) {

if (count > 1) {

var word = "bottles";

    console.log(count + " " + word + " of beer on the wall." + count + " " + word + " of beer,");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    beersong(count);
  }
else {     
        var word = "bottle";
        console.log(count + " " + word + " of beer on the wall.");
        console.log("No more " + word + " of beer on the wall.");        
      }
}
beersong(99);