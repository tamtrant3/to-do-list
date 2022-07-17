// Enter Items
$("#todoCommit").on("click", function() {
    var todoItem = $("#todoInput").val();
    $("#todoList").append(`<div class='todo'><p>${todoItem}</p><div class='x'>x</div></div>`);
})

//TOGGLE DONE/UNDONE
$(document).on("click", ".todo", function(){
    $(this).toggleClass('done')
})

//DELETE ITEMS
$(document).on("click", ".x", function() {
    $(this).parent().remove()
})