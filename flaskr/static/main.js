$(function() {
  console.log('ready!'); // sanity check
});

$('.entry').on('click', function() {
  let entry = this;
  let post_id = $(this).find('h2').attr('id');
  $.ajax({
    type:'GET',
    url: '/delete' + '/' + post_id,
    context: entry,
    success:function(result) {
      if(result.status === 1) {
        $(this).remove();
        console.log(result);
      }
    }
  });
});
