var colorArray = [
  { code: '#828282' },
  { code: '#787276' },
  { code: '#88807d' },
  { code: '#d9dddc' },
  { code: '#d6cfc7' },
  { code: '#c7c6c1' },
  { code: '#bebdb8' },
  { code: '#beb8ac' },
  { code: '#999ea1' },
  { code: '#767b7e' }
]

var colorSliders = [
  { name: "1" },
  { name: "2" },
  { name: "3" }
]





function SizeJs(index) {
  jQuery(".newPattren").attr('size', index);
  jQuery(".number_sliderJS").removeClass("active")
  jQuery(`.number_sliderJS[title='${index}']`).addClass("active")
}


function SetPattren(index) {
  jQuery(".newPattren").attr('pattern', index);
  jQuery(".pattren_sliderJS").removeClass("active")
  jQuery(`.pattren_sliderJS[title='${index}']`).addClass("active")
}

function PattrenJs(index) {
  SetPattren(index);
  let color1 = getProperties().colorname1;
  let color2 = getProperties().colorname2;
  let color3 = getProperties().colorname3;
  SetColor(color1, 1);
  SetColor(color2, 2);
  SetColor(color3, 3);
}

function SetColor(color, slider) {
  jQuery(".newPattren").attr(`color${slider}`, color);

  jQuery(`.color_sliderJS${slider}`).removeClass('active')
  jQuery(`.color_sliderJS${slider}[code='${color}']`).addClass('active')

  let patternName = getProperties().patternName;
  // console.log("patt", patternName)
  jQuery(`.newPattern_row > *.p${patternName}-${slider}`).attr('style', `fill:${color}`);
}

function ColorJs(color, slider) {
  SetColor(color, slider);
}



// Rope html Start
// let ropeRowHTML = jQuery('#rope_img_row').html();
// for (let i = 1; i <= 16; i++) {
//   jQuery("#rope_img_row").append(ropeRowHTML);
// }
// Rope html End

// Rope SVG Start
for (let i = 1; i <= 6; i++) {
  let hiddenPatternHTML = jQuery(`#hiddenPattren > *:nth-child(${i})`).html();
  jQuery(`.newPattern_row > *:nth-child(${i})`).append(hiddenPatternHTML);
}
// Rope SVG End


// Color Slider Start
colorArray.map(item => {
  colorSliders.map((itm, i) => {
    let index = i + 1;
    jQuery(`.vertical__color_crousel${index}`).append(`<div class="color_slider">
    <span style="background-color: ${item.code};" onClick="ColorJs('${item.code}', ${index})" class="color_sliderJS${index}"
      title="${item.name}" code="${item.code}"></span>
  </div>`);
  })
})
// Color Slider End



function getProperties() {
  let sizeJS = jQuery(".newPattren").attr('size');
  let patternName = jQuery(".newPattren").attr('pattern');
  let colorname1 = jQuery(".newPattren").attr('color1');
  let colorname2 = jQuery(".newPattren").attr('color2');
  let colorname3 = jQuery(".newPattren").attr('color3');
  return { sizeJS, patternName, colorname1, colorname2, colorname3 }
}


function getData() {
  let sizeJS = getProperties().sizeJS;
  let patternJS = getProperties().patternName;
  let colorname1 = getProperties().colorname1;
  let colorname2 = getProperties().colorname2;
  let colorname3 = getProperties().colorname3;

  SizeJs(sizeJS);
  SetPattren(patternJS);
  SetColor(colorname1, 1);
  SetColor(colorname2, 2);
  SetColor(colorname3, 3);
}


jQuery('.vertical__long_crousel').slick({
  infinite: false,
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 8,
  slidesToScroll: 8
});

jQuery('.vertical__pattren_crousel').slick({
  infinite: false,
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 2,
  slidesToScroll: 2
});
getData()


