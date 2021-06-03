jQuery(`.rope_box`).append(`<object data="https://rope.netlify.app/assets/svg/rope.svg" width="100%" height="auto" class="ropeBG"></object>`);


// Rope input to span start
 loadData();
function loadData(mainclass = '') {
    
    jQuery(".rope_box_wrapper .rope_row span").remove();
    // jQuery(".rope_box_wrapper .rope_row").attr('mainclass', mainclass);

    
    for (let j = 1; j <= 17; j++) {
        for (let i = 1; i <= 6; i++) {
            
            var cls = '';
            
            // jQuery(`.rope_box_wrapper .rope_row span`).append('<span></span>');
            
            if(mainclass != ''){
                let id = jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr('id');
                let value = jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("value");
                let title = jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("title");
                cls = jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("class");
                let style = jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("style");
                
                
                jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j})`).append(`<span id="${id ? id : ''}" value="${value ? value : ''}" class="${cls ? cls : ''}" style="${style}"></span>`);
            
            }
            
            else{
                 let id = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr('id');
                let value = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("value");
                let title = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("title");
                cls = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${i})`).attr("class");
                jQuery(`.rope_box_wrapper .rope_row:nth-child(${j})`).append(`<span id="${id ? id : ''}" value="${value ? value : ''}" class="${cls ? cls : ''}" ></span>`);
            }
            
             loadSvgData(j,i, mainclass);
            
             jQuery(`.rope_box_wrapper .rope_row:nth-of-type(${j}) span:nth-of-type(${i}) path`).attr('onclick',`pathClick('${cls}')`);
            
        }
    }

}


// Rope inout to span end


// Rope SVG Start
loadSvg();
function loadSvg() {
    let hiddenSvgHTML = jQuery('#hiddenFullRope').html();
    jQuery('.svg_wrapper').append(hiddenSvgHTML);
    ropeSvgId();
}

loadIndex()
function loadIndex(mainclass = '') {
      for (let j = 1; j <= 19; j++) {
        for (let i = 5; i >= 0; i--) {

          let svgIndex = (j * 6) - i;
          let col = 6 - i;
          
          var cls1 = '';
          
          
          if(mainclass != ''){
            cls1 = jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${col})`).attr("class");
            jQuery(`.svg_inner svg:nth-child(${svgIndex})`).attr('style', '');
          }
          
          else{
              cls1 = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${col})`).attr("class"); 
          }
          
        //   console.log("svgIndex", svgIndex, "col", col, "row", j)
          
          
          
          
          jQuery(`.svg_inner svg:nth-child(${svgIndex})`).attr('class', cls1);
          jQuery(`.svg_inner svg:nth-child(${svgIndex}) path`).attr('onclick',`pathClick('${cls1}')`);

        }
      }
    }

    



function loadSvgData(row, col, cls = ''){
    let hiddenPatternHTML = jQuery(`#hiddenPattren > *:nth-child(${col})`).html();
    
    if(cls == ''){
        jQuery(`.rope_box_wrapper .rope_row:nth-of-type(${row}) span:nth-of-type(${col})`).append(hiddenPatternHTML);  
    }
    else{
        jQuery(`.${cls} .rope_box_wrapper .rope_row:nth-of-type(${row}) span:nth-of-type(${col})`).append(hiddenPatternHTML);
    }
}


    function ropeSvgId() {
      for (let i = 1; i <= 114; i++) {
        jQuery(`.svg_inner svg:nth-child(${i}) path`).attr('id', `svg${i}`);
        jQuery(`.svg_inner svg:nth-child(${i}) path`).attr('title', `svg${i}`);
      }
    }


// Rope SVG End


