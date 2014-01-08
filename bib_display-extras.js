function enableGETASCAN() {

		var get_a_scan_url = "";
		var genre = "";
		
		get_a_scan_url = "https://lib-pclcz020.austin.utexas.edu/illiad/IXA/illiad.dll/OpenURL?genre=article";
		
		if (book_title) { 
			get_a_scan_url = get_a_scan_url + "&" + "title=" + encodeURIComponent(book_title);
		}

		if (imprint) { 
			get_a_scan_url = get_a_scan_url + "&" + "notes=" + encodeURIComponent(imprint);
		}

		if (isbn) { 
			get_a_scan_url = get_a_scan_url + "&" + "isbn=" + isbn;
		}

		if (issn) { 
			get_a_scan_url = get_a_scan_url + "&" + "issn=" + issn;
		}

		if (oclc) { 
			get_a_scan_url = get_a_scan_url + "&" + "espnumber=" + oclc;
		}
		
		document.getElementById("get_a_scan").innerHTML="<a href=\"" + get_a_scan_url + "\"><img src=\"/screens/get-a-scan.png\" border=\"0\"></a>";
	
}



function toggleSMS() {
	var ele = document.getElementById("smscontent");
	var text = document.getElementById("displayTextSMS");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "+ Send via Text Message";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "- Send via Text Message";
	}
}

function disableSMS() {
	var ele = document.getElementById("smscontent");
	var text = document.getElementById("displayTextSMS");
	ele.style.display = "none";
	text.innerHTML = "Send via Text Message";
	text.href = "javascript:donothing()";
	document.getElementById("displayTextSMS").setAttribute("class", "myButtonDisabled");
}

function toggleG() {
	var ele = document.getElementById("viewerCanvas");
	var text = document.getElementById("displayTextG");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "+ View via GoogleBooks";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "- View via GoogleBooks";
	}
}

function disableG() {
	var ele = document.getElementById("viewerCanvas");
	var text = document.getElementById("displayTextG");
	ele.style.display = "none";
	text.innerHTML = "View via GoogleBooks";
	text.href = "javascript:donothing()";
	document.getElementById("displayTextG").setAttribute("class", "myButtonDisabled");
}

function toggleLT() {
	var ele = document.getElementById("ltfl_widgets");
	var text = document.getElementById("displayTextLT");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "+ Recommended Books &amp; Tags";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "- Recommended Books &amp; Tags";
	}
}

function disableLT() {
	var ele = document.getElementById("ltfl_widgets");
	var text = document.getElementById("displayTextLT");
	ele.style.display = "none";
	text.innerHTML = "Recommended Books &amp; Tags";
	text.href = "javascript:donothing()";
	document.getElementById("displayTextLT").setAttribute("class", "myButtonDisabled");
}


function toggleLHR() {
	var ele = document.getElementById("lhr");
	var text = document.getElementById("displayTextLHR");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "+ Longhorn Reviews";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "- Longhorn Reviews";
	}
}

function donothing() {
	
}


// =========== Grab Author, imprint, book title, and oclc from bib_detail =========== 

try {
  var author = '';										// This is all borrowed from the sms text code -- title of book will go here
  var debug = 0;										// enable this to show alerts
  var f = document.getElementById('bib_detail');

  try {													// we use try/catch blocks to hide errors
    var tr = document.getElementsByTagName('TR');		// we have to iterate through every TR b/c we can't get to the book title otherwise
    for(i = 0; i < tr.length; i++) {					// for every TR in the document
      var x=tr[i].getElementsByTagName('TD');			// get all of the Columns
      if (x.length == 2 && x[0].innerHTML == "Author") {  // if the row has 2 columns and the first one has the text of Title
        author = x[1].innerHTML.replace(/<\/?.*?>/g, ""); // strip out all of the HTML so we just have text
	    if (debug > 0) alert('found author:' + author);		// just a debug notice
      }
    }
 } catch (e) {}
 } catch (e) {}

 try {
  var book_title = ''; // This is all borrowed from the sms text code -- title of book will go here
  var debug = 0;	// enable this to show alerts
  var f = document.getElementById('bib_detail');
  try { // we use try/catch blocks to hide errors
    var tr = document.getElementsByTagName('TR'); // we have to iterate through every TR b/c we can't get to the book title otherwise
    for(i = 0; i < tr.length; i++) {// for every TR in the document
      var x=tr[i].getElementsByTagName('TD'); // get all of the Columns
      if (x.length == 2 && x[0].innerHTML == "Title") {  // if the row has 2 columns and the first one has the text of Title
        book_title = x[1].innerHTML.replace(/<\/?.*?>/g, ""); // strip out all of the HTML so we just have text
	    if (debug > 0) alert('found book title:' + book_title);	// just a debug notice
      }
    }
 } catch (e) {}
 } catch (e) {}

try {
  var oclc = '';										// This is all borrowed from the sms text code -- oclc will go here
  var debug = 0;										// enable this to show alerts
  var f = document.getElementById('bib_detail');

  try {													// we use try/catch blocks to hide errors 
    var tr = document.getElementsByTagName('TR');		// we have to iterate through every TR b/c we can't get to the oclc nums otherwise
    for(i = 0; i < tr.length; i++) {					// for every TR in the document
      var x=tr[i].getElementsByTagName('TD');			// get all of the Columns
      if (x.length == 2 && x[0].innerHTML == "OCLC number") {  // if the row has 2 columns and the first one has the text of Title
        oclc = x[1].innerHTML.replace(/ /ig,""); // strip out all of the HTML so we just have text
		oclc_stripped = x[1].innerHTML.replace(/\W/ig,"");
	    if (debug > 0) alert('found oclc:' + oclc);		// just a debug notice
      }
    }
 } catch (e) {}
 } catch (e) {}

try {
  var isbn = '';										// This is all borrowed from the sms text code -- oclc will go here
  var debug = 0;										// enable this to show alerts
  var f = document.getElementById('bib_detail');

  try {													// we use try/catch blocks to hide errors 
    var tr = document.getElementsByTagName('TR');		// we have to iterate through every TR b/c we can't get to the oclc nums otherwise
    for(i = 0; i < tr.length; i++) {					// for every TR in the document
      var x=tr[i].getElementsByTagName('TD');			// get all of the Columns
      if (x.length == 2 && x[0].innerHTML == "ISBN") {  // if the row has 2 columns and the first one has the text of Title
        isbn = x[1].innerHTML.replace(/ /ig,""); // strip out all of the HTML so we just have text
		isbn_stripped = x[1].innerHTML.replace(/\W/ig,"");
	    if (debug > 0) alert('found isbn:' + isbn);		// just a debug notice
      }
    }
 } catch (e) {}
 } catch (e) {}
  
try {
  var issn = '';										// This is all borrowed from the sms text code -- oclc will go here
  var debug = 0;										// enable this to show alerts
  var f = document.getElementById('bib_detail');

  try {													// we use try/catch blocks to hide errors 
    var tr = document.getElementsByTagName('TR');		// we have to iterate through every TR b/c we can't get to the oclc nums otherwise
    for(i = 0; i < tr.length; i++) {					// for every TR in the document
      var x=tr[i].getElementsByTagName('TD');			// get all of the Columns
      if (x.length == 2 && x[0].innerHTML == "ISSN") {  // if the row has 2 columns and the first one has the text of ISSN
        issn = x[1].innerHTML.replace(/ /ig,""); // strip out all of the HTML so we just have text
		issn_stripped = x[1].innerHTML.replace(/\W/ig,"");
	    if (debug > 0) alert('found ISSN:' + issn);		// just a debug notice
      }
    }
 } catch (e) {}
 } catch (e) {}


try {
  var imprint = '';										// This is all borrowed from the sms text code -- oclc will go here
  var debug = 0;										// enable this to show alerts
  var f = document.getElementById('bib_detail');

  try {													// we use try/catch blocks to hide errors 
    var tr = document.getElementsByTagName('TR');		// we have to iterate through every TR b/c we can't get to the oclc nums otherwise
    for(i = 0; i < tr.length; i++) {					// for every TR in the document
      var x=tr[i].getElementsByTagName('TD');			// get all of the Columns
      if (x.length == 2 && x[0].innerHTML == "Publication Information") {  // if the row has 2 columns and the first one has the text of Publication Information
        imprint = x[1].innerHTML.replace(/<\/?.*?>/g, ""); // strip out all of the HTML so we just have text
//		imprint_stripped = x[1].innerHTML.replace(/\W/ig,"");
	    if (debug > 0) alert('found imprint:' + imprint);		// just a debug notice
      }
    }
 } catch (e) {}
 } catch (e) {}

// =========== End variable setting =========== 
 


// =========== Embedded Google Books =========== 

      google.load("books", "0");

	  function NotFound() {
 		document.getElementById('viewerCanvas').style.display = 'none';
 		document.getElementById('google_image').style.display = 'none';
		disableG();
	  }

      function initialize() {
		var ele = document.getElementById("viewerCanvas");
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        viewer.load('OCLC:' + oclc_stripped, NotFound);
		document.getElementById("viewerCanvas");
		ele.style.display = "block";
      }

      google.setOnLoadCallback(initialize);

// =========== End Embedded Google Books =========== 

 
 
 // =========== endowment links =========== 

 try {

  var donor_note_match = ''; // This is all borrowed from the sms text code -- donor note
  var donor_note_ori = ''; // This is all borrowed from the sms text code -- donor note
  var donor_note_new = ''; // This is all borrowed from the sms text code -- donor note
  var fundmatch =0;
  var donor_url = "";
  var donor_img_url = "";
  var debug = 0;	// enable this to show alerts
  var f = document.getElementById('bib_detail');
  try { // we use try/catch blocks to hide errors
    var tr = document.getElementsByTagName('TR'); // we have to iterate through every TR b/c we can't get to the details otherwise
    for(i = 0; i < tr.length; i++) {// for every TR in the document
      var x=tr[i].getElementsByTagName('TD'); // get all of the Columns
      if (x.length == 2 && x[0].innerHTML == "Donor note") {  // if the row has 2 columns and the first one has the text of Donor note
        donor_note_match = x[1].innerHTML.replace(/<\/?.*?>/g, ""); // strip out all of the HTML so we just have text
		donor_note_ori = x[1].innerHTML;

// set the fund URLs

		var fund = /21st Century Fund for U.S. Latino Library Materials/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/MALP.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /A. E. Skinner Chemistry Library Endowment Fund/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/skinner.html";
			donor_img_url = "http://www.lib.utexas.edu/chem/skinner004.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /A. Keith Brodkin Endowment for American History/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/brodkin.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Barrow Periodical Fund/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/geology-barrow.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/barrow.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Chernoff Family Library Fund for Geophysics and Earth System Sensing/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/geology-chernoff.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/chernoff.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /David O. Nilsson Endowment and Lecture Series for Excellence in Contemporary Drama/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/nilsson_drama.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /David O. Nilsson Endowment for Mexican American and U.S. Latino Research Materials/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/nilsson.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/nilsson.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Emily Knauss Library Endowment for the Liberal Arts/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/knauss.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/knauss.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /F. L. Whitney Memorial Fund/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/geology-whitney.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/whitney.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Florence Ralston Brooke Fund for Library Books/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/brooke.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/brooke.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Frances Wasserman Endowment in Memory of Dr. Harry Wasserman/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/wasserman.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/wasserman.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Fund for Latin American and Caribbean Library Materials/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/fundforla.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /George M. Hocking Fund for the Collection of Floristic Books/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/hocking.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/flora.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Harold Billings Fund for Collection Enhancement/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/billings.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/billings.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Hilda Barnard Undergraduate Library Collection and Services Endowment/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/barnard.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/barnard.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /In honor of School of Nursing/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/subject/nursing/";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/nursing_grad-120.png";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /J. C., Jr. and Elizabeth C. Walter Fund/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/geology-walter.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/walter.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /James E. and Ruth Ann Boggs Endowment/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/boggs.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/boggs.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Jean Lang Bobo Endowed Library Fund/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/bobo.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/bobobookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Joseph Lindsey Henderson Textbook Collection/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/henderson.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Littlefield Fund for Southern History/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/littlefield.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/littlefield.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Mary Ritchie Key Fund for Linguistics Research Materials/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/key.html";

			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/key.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Minnie Lee Barrett Shepard Endowment/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/shepard.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/shepard.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Nettie Lee Benson Library Fund/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/benson.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/benson1.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Rabbi Simha B. Ben-Zakkai Memorial Endowment/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/ben-zakkai.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/ben-zakkai.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Richard Gideon Pond Ornithology Collection Enhancement Endowment/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/pond.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Robert Charles Witt and Laura Gutierrez-Witt Library Fund for Latin America/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/witt.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/witt.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Shalin Liu Taiwan Studies Endowment/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/wu.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Susan Adele Moore Endowed Book Fund/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/moore.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/sa_moore_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /The Harold W. Billings Staff Honors Endowment/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/staffhonors.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/HB_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /The Lucius N. Littauer Foundation Judaica Book Fund/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/littauer.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/littauer.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /The W. N. Patterson Book Fund/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/patterson.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/pattersonbp.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Tobin International Geological Library Fund/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/geology-tobin.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/map.gif";
			fundmatch = 1;
		}

		var fund = /Wendtlandt Fund/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/wentlandt.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Special Funds from the Marine Science Advisory Council/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/marine-science-advisory.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_msi_grundy_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Mary Anderson Abell Marine Science Library Endowment/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/marine-science-abel.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/abell.gif";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Edmund J. Fleming, Jr. Marine Science Institute Library Endowment/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/marine-science-fleming.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/fleming.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Christopher P. Carothers and Michael M. Fleming Marine Science Institute Library Endowment/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/marine-science-carothers.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/wahoo.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Ruth Grundy Library Endowment/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/endowments/grundy.html";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Taiwan Chinese Studies Resource Center/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/subject/easian/tcsrc";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";


// adopt a book

		var fund = /This book adopted/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/adoptabook";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Adopted by/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/adoptabook";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Adopted in honor of/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/adoptabook";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Adopted in memory of/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/adoptabook";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";

		var fund = /Adopted in recognition of/;
		if (fund.test(donor_note_match)) {
			donor_url = "http://www.lib.utexas.edu/development/adoptabook";
			donor_img_url = "http://www.lib.utexas.edu/sites/default/files/about/development/endowments/utlibs_gen_bookplate.jpg";
			fundmatch = 1;
		}
		var fund = "";
		
// do the replace 

		if (fundmatch) {
			donor_note_new = "<a href=\"" + donor_url + "\">" + donor_note_ori + "</a>";
			x[1].innerHTML = donor_note_new;
			
			if (donor_img_url) {
				document.getElementById("endowment").innerHTML="<a href=\"" + donor_url + "\"><img src=\"" + donor_img_url + "\" width=\"120\" border=\"0\"></a>";
			}

		}

// end fund URLs
		
	    if (debug > 0) alert('found donor note:' + donor_note_match);	// just a debug notice
	    if (debug > 0) alert('found donor note:' + donor_note_ori);	// just a debug notice
	    if (debug > 0) alert('new donor note:' + donor_note_new);	// just a debug notice

      }
    }
 } catch (e) {}
 } catch (e) {}

// =========== end endowment links =========== 


// =========== HRC Aeon =========== 

function CreateURL()
{
	if(!IsCatalogItemPage())
	{
		return;
	}
	var searchFields = new Object();
	searchFields['title'] = 'NotFound';
	searchFields['imprint'] = 'NotFound';
	searchFields['description'] = 'NotFound';
	searchFields['note'] = 'NotFound';
	searchFields['isbn'] = 'NotFound';
	searchFields['oclc number'] = 'NotFound';
	searchFields['call no'] = 'NotFound';
	
	
	var regExStrings = new Array();
	regExStrings['title'] = /<strong>(.*)<\/strong>/i;
	regExStrings['imprint'] = /([\s\S]*)/i;
	regExStrings['description'] = /([\s\S]*)/i;
	regExStrings['note'] = /\"(.*)\"/i;
	regExStrings['isbn'] = /([\s\S]*)/i;
	regExStrings['oclc number'] = /([\s\S]*)/i;
	regExStrings['call no'] = /<a.*>(.*)<\/a>/i;

	var bibInfoLabelCells = GetBibInfoLabelCells();
	var bibInfoDataCells = GetBibInfoDataCells();
	var currentLabel = "";
	for(var i = 0; i < bibInfoLabelCells.length; i++)
	{
		currentLabel = bibInfoLabelCells[i].innerHTML.toLowerCase();
				
		if(searchFields[currentLabel] == 'NotFound')
		{
			searchFields[currentLabel] = ParseBibInfoBlock(bibInfoDataCells[i].innerHTML, regExStrings[currentLabel]);
		}
	}
	var callNoBlock = GetCallNoHTMLBlock();
	searchFields["call no"] = ParseBibInfoBlock(callNoBlock, regExStrings["call no"]);
	
	var queryString = "";
	for(var field in searchFields)
	{
		if(searchFields[field] != 'NotFound')
		{
			queryString = queryString + "&" + field.replace(/\s/gi, '') + "=" + encodeURIComponent(searchFields[field]);
		}
	}
		if(queryString != "")
		queryString = queryString + "&" +"author=" + author;
	queryString = queryString.replace(/\'/gi, '%27');
	queryString = trim(queryString, "&");

	if(queryString != "")
	 	InjectLink("https://utexashrc.aeon.atlas-sys.com/aeon/aeon.dll/OpenURL?genre=book&" + queryString);

}

function InjectLink(url)
{
	var linkText = "<a target='AEON' href='" + url + "'>Request Item</a>";
	var bibItemsHeaderRow;
	var bibItemsEntryRow;
	
	var tableRows = document.getElementsByTagName("tr");
	for(var i = 0; i < tableRows.length; i++)
	{
		if(tableRows[i].className == "bibItemsHeader")
		{
			bibItemsHeaderRow = tableRows[i];
		}
		else if(tableRows[i].className == "bibItemsEntry")
		{
			bibItemsEntryRow = tableRows[i];
		}
	}
	
	var child = bibItemsHeaderRow.firstChild;
	while( child != bibItemsHeaderRow.lastChild)
	{
		child.width = "25%";
		child = child.nextSibling;
	}
	
	var myNewHeader = document.createElement('th');
	bibItemsHeaderRow.appendChild(myNewHeader);
	myNewHeader.width='25%';
	myNewHeader.innerHTML = '<span class="bibItemsHeader">Request Options</span>';

	
	var child = bibItemsEntryRow.firstChild;
	while( child != bibItemsEntryRow.lastChild)
	{
		child.width = "25%";
		child = child.nextSibling;
	}
	
	var myNewCell = document.createElement('td');
	bibItemsEntryRow.appendChild(myNewCell);
	myNewCell.width='25%';
	myNewCell.innerHTML = "[" + linkText + "]";

	
//	bibItemsHeaderRow.innerHTML += "<th width='19%' class='bibItemsHeader'>Request Options</th>";
//	bibItemsEntryRow.innerHTML += "<td width='19%'>" + linkText + "</td>";
}

function IsCatalogItemPage()
{
	// The easiest way to determine if it is a catalog item page is to look for the bib details table.
	var trEles = document.getElementsByTagName("tr");
	var isHarryRansomCenter = false;
	for(var i = 0; i < trEles.length; i++)
	{
		if(trEles[i].className == "bibItemsEntry")
		{
			if(trEles[i].innerHTML.match("Harry Ransom Center") == "Harry Ransom Center")
			{
				isHarryRansomCenter = true;
			}
		}
	}
	
	if(!isHarryRansomCenter)
		return false;
		
	var currentTables = document.getElementsByTagName("table");
	for(var i = 0; i < currentTables.length; i++)
	{
		if(currentTables[i].className == "bibDetail")
		{
			return true;
		}
	}
	return false;
}

function GetBibInfoLabelCells()
{
	var tdElements = document.getElementsByTagName("td");
	var labelCells = new Array();
	var counter = 0;
	for (var td in tdElements)
	{
		if(tdElements[td].className == "bibInfoLabel" )

		{
			labelCells[counter] = tdElements[td];
			counter++;
		}
	}
	return labelCells;	
}

function GetBibInfoDataCells()
{
	var tdElements = document.getElementsByTagName("td");
	var dataCells = new Array();
	var counter = 0;
	for (var td = 0; td < tdElements.length; td++)
	{
		// We are checking td-1 to make sure it does not equal "" because multiline subjects will have 2 TD elements per line, the bibInfoData TD element and an empty TD element where the label normally would have been for other entries.
		// If td-1 is empty, that means there was no label, signifying the current data cell holds a subject line, which we want to skip.
		if(tdElements[td].className == "bibInfoData" && tdElements[td-1].innerHTML != "")
		{
			dataCells[counter] = tdElements[td];
			counter++;
		}
	}
	return dataCells;
}

function GetCallNoHTMLBlock()
{
	// The call number should be in the 2nd TD element of the bibItemsEntry row.
	var trElements = document.getElementsByTagName("tr");
	for(var tr in trElements)
	{
		if(trElements[tr].className == 'bibItemsEntry')
		{
			bibItemsRow = trElements[tr];
			var tdElements = bibItemsRow.getElementsByTagName("td");
			if(tdElements.length > 2)
				return tdElements[1].innerHTML;
		}
	}
	return "";
}

function ParseBibInfoBlock(dataString, regExpression)
{
	if(regExpression.test(dataString))
	{
		
		grumble = trim(RegExp.$1);
//		grumble = RegExp.$1;
//		new RegExp(/<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/gim);
//		alert('stripped:' + grumble.replace(matchtag, ""));
//		return grumble.replace(/(<([^>]+)>)/ig, "");
		return grumble.replace(/<\/?.*?>/g, "");
//		return grumble;
	}
	else
	{
		return "";
	}
}

function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

window.onload = CreateURL();
window.onload = enableGETASCAN();
// =========== end HRC AEON =========== 

