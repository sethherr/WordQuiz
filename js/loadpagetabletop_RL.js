// Page information that we will build on
var context = {
  "body": []
};


// Here's the Tabletop feed
// First we'll initialize Tabletop with our spreadsheet
var jqueryNoConflict = jQuery;
jqueryNoConflict(document).ready(function(){
//  example spreadsheet
//  initializeTabletopObject('0As3JvOeYDO50dHJITmhNWXRUc3FYMFI4emZhWTU0SlE');
//  RL's spreadsheet
  initializeTabletopObject('0AsUVhYnfatt3dFkzZms0VUZybUNtRXUyNXFsbktIZEE');
// initializeTabletopObject('https://docs.google.com/spreadsheets/d/1Lo9bqH5MVCrIsEWaeh_gv3E3zBrq2hRR4pdNeYVEly4/pubhtml');

});

// Pull data from Google spreadsheet
// And push to our pullDataFromTabletop function
function initializeTabletopObject(dataSpreadsheet){
  Tabletop.init({
    key: dataSpreadsheet,
    callback: pullDataFromTabletop,
    debug: false
  });
}


// This function gets our data from our spreadsheet
function pullDataFromTabletop(tabletopData, tabletop) {
  // console.log(tabletop.key);
  dataTabletop = tabletopData;
  // Go through our Google spreadsheet
  // Stored in tabletopData variable
  // tabletopData = Worksheet
  for (num in tabletopData) {
    context["body"].push(tabletopData[num]);
  }
  // If you want to see what context looks like:
   console.log(context);


  // Load templates
  loadTemplates();
};


