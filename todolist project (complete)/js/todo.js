$("ul").on('click',"li",function(){
  $(this).toggleClass("completed");
});
$("ul").on("click","span",function()
{
   $(this).parent().fadeOut(500,function(){
       $(this).remove();
   })
})

$("input[type='text'").on('keypress',(function(event){
    if(event.which===13)
    {
        var addNew=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+addNew+" </li>")
    }
   
}))
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
})