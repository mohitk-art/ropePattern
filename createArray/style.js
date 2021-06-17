
function search() {
    let classname = jQuery(`#classname`).val();
    console.log("df", classname);

    let arrayList = [];
    jQuery(classname).each(function (e) {
        var html = jQuery(this).html();

        arrayList.push(html);
    });

    jQuery("#arraylist").html(`[${arrayList.map(item => {
        return ` "${item}"`
    })}]`);
    console.log("dfd", arrayList);
}

function append() {
    let html = jQuery(`#appendhtml`).val();

    jQuery(`#htmlsection`).html(html);
    jQuery(`.step2`).removeClass("d-none");
    jQuery(`.step1`).addClass("d-none");
}

function back() {
    jQuery(`.step1`).removeClass("d-none");
    jQuery(`.step2`).addClass("d-none");
}