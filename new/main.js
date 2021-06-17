// Rope 25 js

function loadSvg() {
    let cell1 = -181;
    let cell2 = -145;
    let cell3 = -303;
    let cell4 = -145;
    let cell5 = -301.6;
    let cell6 = -126;
    let cellspace = 318.4;

    for (let j = 1; j <= 26; j++) {
        for (let i = 5; i >= 0; i--) {

            let svgIndex = (j * 6) - i;
            let col = 6 - i;


            jQuery(`.svg_inner`).append('<svg></svg>');

            if (col == 1) {
                let y = cell1;
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('x', 18);
                cell1 = cell1 + cellspace;
            }

            if (col == 2) {
                let y = cell2;
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('x', 40);
                cell2 = cell2 + cellspace;
            }

            if (col == 3) {
                let y = cell3;
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('x', 232);
                cell3 = cell3 + cellspace;
            }

            if (col == 4) {
                let y = cell4;
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('x', 557);
                cell4 = cell4 + cellspace;
            }

            if (col == 5) {
                let y = cell5;
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('x', 932);
                cell5 = cell5 + cellspace;
            }

            if (col == 6) {
                let y = cell6;
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
                jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('x', 1254);
                cell6 = cell6 + cellspace;
            }


            loadSVGCell(svgIndex, col);
        }
    }
}

function loadSVGCell(svgIndex, col) {
    let hiddenPatternHTML = jQuery(`#hiddenPattren > *:nth-child(${col})`).html();
    let height = jQuery(`#hiddenPattren > *:nth-child(${col})`).attr('height');
    let width = jQuery(`#hiddenPattren > *:nth-child(${col})`).attr('width');
    let version = jQuery(`#hiddenPattren > *:nth-child(${col})`).attr('version');
    let viewBox = jQuery(`#hiddenPattren > *:nth-child(${col})`).attr('viewBox');
    let preserveAspectRatio = jQuery(`#hiddenPattren > *:nth-child(${col})`).attr('preserveAspectRatio');
    let xmlns = jQuery(`#hiddenPattren > *:nth-child(${col})`).attr('xmlns');

    jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('height', height);
    jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('width', width);
    jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('version', version);
    jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('viewBox', viewBox);
    jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('preserveAspectRatio', preserveAspectRatio);
    jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('xmlns', xmlns);
    jQuery(`.svg_inner > *:nth-child(${svgIndex})`).html(hiddenPatternHTML);

    // console.log("index", svgIndex, "col", col)
}

loadSvg()