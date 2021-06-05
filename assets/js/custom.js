// jQuery(`.rope_box`).append(`<object data="https://rope.netlify.app/assets/svg/rope.svg" width="100%" height="auto" class="ropeBG"></object>`);




// Rope SVG Start
loadSvg();
function loadSvg() {
  let hiddenSvgHTML = jQuery('#hiddenFullRope').html();
  jQuery('.svg_wrapper').append(hiddenSvgHTML);
  ropeSvgId();
  loadIndex();
}


function ropeSvgId() {
  for (let i = 1; i <= 114; i++) {
    jQuery(`.svg_inner svg:nth-child(${i})`).attr('id', `svg${i}`);
  }
}


function loadIndex(mainclass = '') {

  jQuery(`.svg_inner svg`).removeAttr('onclick');
  jQuery(`.svg_inner svg`).removeAttr('class');
  jQuery(`.svg_inner svg`).removeAttr('style');

  for (let j = 1; j <= 19; j++) {
    for (let i = 5; i >= 0; i--) {

      let svgIndex = (j * 6) - i;
      let col = 6 - i;

      var cls1 = '';


      if (mainclass != '') {
        cls1 = jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${col})`).attr("class") || '';

      }

      else {
        cls1 = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${col})`).attr("class") || '';
      }

      //   console.log("svgIndex", svgIndex, "col", col, "row", j)




      jQuery(`.svg_inner svg:nth-child(${svgIndex})`).attr('class', cls1);
      jQuery(`.svg_inner svg:nth-child(${svgIndex}) path`).attr('onclick', `pathClick('${cls1}')`);

    }
  }

  defaultColorClass(mainclass);

}


function defaultColorClass(mainclass) {

  // alert(mainclass)

  for (let i = 1; i <= 10; i++) {
    jQuery(`.${mainclass} ~ .svg_wrapper .svg_inner svg.${i}`).attr('style', `fill:${lightColorArray[i]}`);
  }

}




//  loadData();
function loadData(mainclass = '') {

  jQuery(".rope_box_wrapper .rope_row span").remove();
  // jQuery(".rope_box_wrapper .rope_row").attr('mainclass', mainclass);


  for (let j = 1; j <= 17; j++) {
    for (let i = 1; i <= 6; i++) {

      var cls = '';

      // jQuery(`.rope_box_wrapper .rope_row span`).append('<span></span>');

      if (mainclass != '') {
        let id = jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr('id');

        cls = jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("class");
        let style = jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("style");


        jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j})`).append(`<span id="${id}" class="${cls ? cls : ''}" style="${style}"></span>`);

      }

      else {
        let id = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr('id');
        let value = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("value");
        let title = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("title");
        cls = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("class");
        jQuery(`.rope_box_wrapper .rope_row:nth-child(${j})`).append(`<span id="${id ? id : ''}" value="${value ? value : ''}" class="${cls ? cls : ''}" ></span>`);
      }

      loadSvgData(j, i, mainclass);

      jQuery(`.rope_box_wrapper .rope_row:nth-of-type(${j}) span:nth-of-type(${i}) path`).attr('onclick', `pathClick('${cls}')`);

    }
  }


}



function loadSvgData(row, col, cls = '') {
  let hiddenPatternHTML = jQuery(`#hiddenPattren > *:nth-child(${col})`).html();

  if (cls == '') {
    jQuery(`.rope_box_wrapper .rope_row:nth-of-type(${row}) span:nth-of-type(${col})`).append(hiddenPatternHTML);
  }
  else {
    jQuery(`.${cls} .rope_box_wrapper .rope_row:nth-of-type(${row}) span:nth-of-type(${col})`).append(hiddenPatternHTML);
  }
}




// Rope SVG End

