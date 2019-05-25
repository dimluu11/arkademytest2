// NO 1
let biodata = (name,address,hobbies,is_married,school,skills) => {
    let data ={name,address,hobbies,is_married,school,skills}
    return JSON.stringify(data)
}

let name = 'dimas luthfi'
let address = 'jl. peta selatan no.7, kalideres, jakarta barat'
let hobbies = 'main game'
let is_married = false
let school = {
    highSchool: 'sma alhusna tangerang',
    university:'universitas trisakti'
}
let skills = [
    {name:'coding',score:50},
    {name:'makan',score:51},
    {name:'tidur',score:52},
    {name:'main game',score:53}
]

console.log(
    biodata(name,address,hobbies,is_married,school,skills)
);



// NO 2
var getDates = function(startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  };
  
  var dates = getDates(new Date(2019,10,02), new Date(2019,10,06));                                                                                                           
  dates.forEach(function(date) {
    console.log(date);
  });



// NO 3
// NO 3 PART 1
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count('programmer'));
// NO 3 PART 2
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count('hmm..'));



// No 4
// Saya gak tau jawabannya, dari saya ikut kloter 3 gak ngerti sama soal membuat function itu

// No 5
let myStr = 'Purwakarta';

myStr = myStr
  .replace('a', 'o')
  .replace('a', 'e')
  .replace('a', 'o');

console.log(myStr);


// No 6
// Saya juga gak ngerti cara buat SQL cuma tau cara buat tampilannya aja pake bootsrap