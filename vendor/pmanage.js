function renderTotals(tasks) {
    $("#totals #total").text(tasks.content.length);
    $("#totals #completed").text(tasks.filterBy('status',true).length);
    $("#totals #opened").text(tasks.filterBy('status',false).length);
}

function showAdd() {
    $('html,body').animate({
            scrollTop: $("#addForm").offset().top},
        'fast');
}

function init() {
    $('span.task-name').on('click', function(){
        $(this).hide().next('input').val($(this).text().trim()).show();
        $(this).siblings('button').show();
    });
}
