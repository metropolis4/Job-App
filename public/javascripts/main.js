$(function(){
    $('.delete-applicant').on('click', function(){
        var id = $(this).siblings('h3').attr('data-id');
        $.post('/delete', {id:id}, function(data){
        });
    });
});