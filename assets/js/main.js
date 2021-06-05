var colorArray = [
  { code: 'red' },
  { code: 'green' },
  { code: 'chocolate' },
  { code: 'yellow' },
  { code: '#fff' },
  { code: '#000' },
  { code: 'orange' },
  { code: 'brown' },
  { code: '#999ea1' },
  { code: '#767b7e' }
]


var lightColorArray = [
  '#828282',
  '#787276',
  '#88807d',
  '#d9dddc',
  '#d6cfc7',
  '#c7c6c1',
  '#bebdb8',
  '#beb8ac',
  '#999ea1',
  '#767b7e'
]

function SizeJs(index) {
  jQuery(".svg_wrapper").attr('size', index);
  jQuery(".number_sliderJS").removeClass("active")
  jQuery(`.number_sliderJS[title='${index}']`).addClass("active")
}


function parentPattern(id) {
  jQuery(".pattren_sliderJS1").removeClass("active")
  jQuery(`.pattren_sliderJS1[title='${id}']`).addClass("active")

  jQuery(".sub_pattern_nav").removeClass("active")
  jQuery(`#${id}`).addClass("active");

  SetPattren(id);
  // document.getElementById(id).click();
  jQuery(`#${id} .slick-prev`).click();
  jQuery(`#${id} .slick-track > *:first-child .pattren_sliderJS`).click();

}


function SetPattren(index) {
  jQuery(".svg_wrapper").attr('pattern', index);
  jQuery(".pattren_sliderJS").removeClass("active")
  jQuery(`.pattren_sliderJS[title='${index}']`).addClass("active")
}

function PattrenJs(index) {
  SetPattren(index);
}

var picked_color;
function SetColor(color) {
  picked_color = color;
  jQuery(".svg_wrapper").attr(`color`, color);
  jQuery(`.color_sliderJS`).removeClass('active');
  jQuery(`.color_sliderJS[code='${color}']`).addClass('active');
}

function ColorJs(color) {
  SetColor(color);
}

function pathClick(cls) {
  //window.alert(cls)
  picked_color = getProperties().colorName;
  jQuery(`.svg_wrapper .svg_inner svg.${cls}`).attr('style', `fill:${picked_color}`);
  jQuery(`.svg_wrapper .svg_inner svg.svg_class_`).attr('style', `fill:#fff`);
}


// Color Slider Start
colorArray.map(item => {

  jQuery(`.vertical__color_crousel`).append(`<div class="color_slider">
    <span style="background-color: ${item.code};" onClick="ColorJs('${item.code}')" class="color_sliderJS"
      title="${item.name}" code="${item.code}"></span>
  </div>`);

})
// Color Slider End




function getProperties() {
  let sizeJS = jQuery(".svg_wrapper").attr('size');
  let patternName = jQuery(".svg_wrapper").attr('pattern');
  let colorName = jQuery(".svg_wrapper").attr('color');
  return { sizeJS, patternName, colorName }
}


function getData() {
  let sizeJS = getProperties().sizeJS;
  let patternJS = getProperties().patternName;
  let colorName = getProperties().colorName;

  SizeJs(sizeJS);
  SetPattren(patternJS);
  SetColor(colorName);
}

ropeSvgId();
function ropeSvgId() {
  for (let i = 1; i <= 150; i++) {
    jQuery(`.svg_inner svg:nth-child(${i})`).attr('id', `svg${i}`);
    jQuery(`.svg_inner svg:nth-child(${i})`).attr('title', `svg${i}`);
  }
}


loadIndex()

function loadIndex(mainclass = '') {

  jQuery(`.svg_inner svg`).removeAttr('onclick');
  jQuery(`.svg_inner svg`).removeAttr('class');
  jQuery(`.svg_inner svg`).removeAttr('style');

  SetPattren(mainclass)

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

      jQuery(`.svg_inner svg:nth-child(${svgIndex})`).attr('class', `svg_class_${cls1}`);
      jQuery(`.svg_inner svg:nth-child(${svgIndex}) path`).attr('onclick', `pathClick('svg_class_${cls1}')`);

    }
  }

  defaultColorClass();

}

function defaultColorClass() {

  let svgclassinex = 0;
  let list = [];

  $(`.svg_wrapper .svg_inner svg`).each(function (e) {
    var value = $(this).attr("class");

    if (list.indexOf(value) === -1) {
      console.log("index", svgclassinex, "class", value)
      jQuery(`.svg_wrapper .svg_inner svg.${value}`).attr('style', `fill:${lightColorArray[svgclassinex]}`);
      list.push(value);
      svgclassinex++
    }
    jQuery(`.svg_wrapper .svg_inner svg.svg_class_`).attr('style', `fill:#fff`);
  });

}


loadSliders()
function loadSliders() {

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
}
getData()


