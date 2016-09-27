//create firebase reference

var dbRef = new Firebase("https://contacts-12834.firebaseio.com/");
var noteRef = dbRef.child('notes')

noteRef.on("child_added", function(snap){
	console.log("child added",snap.key(),snap.val());
	$('#notes').append(noteHTMLFromObject(snap.val()));
});

//Save Note
$('.addNode').on("click",function(event){
	event.preventDefault();
	if($('#title').val() != '' || $('#content').val() != '' ){
		noteRef.push({
			title: $('#title').val(),
			content: $('#content').val()
		});
		noteForm.reset();
	}else{
		alert('Please Enter Both Title and Content');
	}
});

// Display Note
function noteHTMLFromObject(note){
	console.log(note);
	var html = '';
	html += '<li class="list-group-item note">';
		html += '<div><pre>';
			html += '<p class="lead">'+note.title+'</p>';
			html += '<p>'+note.content.replace(/\n/g, "<br/>");+'</p>';
	    html += '</pre></div>';
	html += '</li>';
	
	return html;
}
