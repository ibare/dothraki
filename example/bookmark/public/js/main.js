window.onload = function() {

  $.ajax({
      url: '/api/bookmarks'
    }).done(function(data) {
      var bookmarks = $('#bookmarks');

      for(var i=0; i<data.bookmarks.length; i++) {
        bookmarks.append($('<li>'+data.bookmarks[i].title+' - '+moment(data.bookmarks[i].timestamp).fromNow()+'</li>'));
      }
    }).fail(function(err) {
      console.error('앗! 뭔가 문제가?', err.statusText);
    });

};
