jQuery(`.rope_box`).append(`<object data="https://rope.netlify.app/assets/svg/rope.svg" width="100%" height="auto" class="ropeBG"></object>`);


// Rope input to span start

function loadData() {
    jQuery(".rope_box_wrapper .rope_row span").remove();

    for (let j = 1; j <= 17; j++) {
        for (let i = 1; i <= 6; i++) {
            let id = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr('id');
            let value = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("value");
            let title = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("title");
            let cls = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("class");
            jQuery(`.rope_box_wrapper .rope_row:nth-child(${j})`).append(`<span id="${id ? id : ''}" value="${value ? value : ''}" class="${cls ? cls : ''}" ></span>`);
        }
    }

    loadSvg()
}

// loadData();
// Rope inout to span end


// Rope SVG Start

function loadSvg() {
    for (let i = 1; i <= 6; i++) {
        let hiddenPatternHTML = jQuery(`#hiddenPattren > *:nth-child(${i})`).html();
        jQuery(`.rope_box_wrapper .rope_row span:nth-of-type(${i})`).append(hiddenPatternHTML);
    }
}


// Rope SVG End