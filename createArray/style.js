
function search() {
    let classname = jQuery(`#classname`).val();
    console.log("df", classname);

    let arrayList = [];
    let index = 0;
    jQuery(classname).each(function (e) {

        let flag = jQuery(`${classname}:nth-child(${index}) .iti__flag`).attr('class');
        let countryname = jQuery(`${classname}:nth-child(${index}) .iti__country-name`).html();
        let code = jQuery(`${classname}:nth-child(${index}) .iti__dial-code`).html();




        // console.log('html', this);

        if (flag) {
            // let atpos = flag.indexOf("iti__flag iti__");
            let domain = flag.split("iti__flag iti__")[1];
            arrayList.push({ flag: domain, countryname, code });
        }

        index++;
    });

    jQuery("#arraylist").html(`[${arrayList.map(item => {
        return `{
            flag:'${item.flag}',
            country: '${item.countryname}',
            code: '${item.code}'
    }`
    })}]`);
    console.log("array", arrayList);
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