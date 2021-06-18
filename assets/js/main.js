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
  picked_color = getProperties().colorName;
  jQuery(`.svg_wrapper .svg_inner svg.${cls}`).attr('style', `fill:${picked_color}`);
  jQuery(`.svg_wrapper .svg_inner svg.${cls}`).attr('color', `${picked_color}`);
  jQuery(`.svg_wrapper .svg_inner svg.svg_class_`).attr('style', `fill:#fff`);
  jQuery(`.svg_wrapper .svg_inner svg.svg_class_`).attr('color', `#fff`);
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
  parentPattern('parent_pattern2');
  SetColor(colorName);
}

ropeSvgId();
function ropeSvgId() {
  for (let i = 1; i <= 150; i++) {
    jQuery(`.svg_wrapper .svg_inner svg:nth-child(${i})`).attr('id', `svg${i}`);
    jQuery(`.svg_wrapper .svg_inner svg:nth-child(${i})`).attr('title', `svg${i}`);
  }
}




// load svg Cell
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
// load svg Cell



loadIndex();

function loadIndex(mainclass = '') {

  jQuery(`.svg_wrapper .svg_inner svg`).removeAttr('onclick');
  jQuery(`.svg_wrapper .svg_inner svg`).removeAttr('class');
  jQuery(`.svg_wrapper .svg_inner svg`).removeAttr('style');

  SetPattren(mainclass)

  for (let j = 1; j <= 26; j++) {
    for (let i = 5; i >= 0; i--) {

      let svgIndex = (j * 6) - i;
      let col = 6 - i;

      var cls1 = '';

      // console.log("index", svgIndex, "col", col, "row", j)


      if (mainclass != '') {
        cls1 = jQuery(`.${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${col})`).attr("class") || '';
      }

      else {
        cls1 = jQuery(`.rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${col})`).attr("class") || '';
      }

      jQuery(`.svg_wrapper .svg_inner svg:nth-child(${svgIndex})`).attr('class', `svg_class_${cls1}`);
      jQuery(`.svg_wrapper .svg_inner svg:nth-child(${svgIndex})`).attr('pattern', `${cls1}`);
      jQuery(`.svg_wrapper .svg_inner svg:nth-child(${svgIndex}) path`).attr('onclick', `pathClick('svg_class_${cls1}')`);

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
      // console.log("index", svgclassinex, "class", value)
      jQuery(`.svg_wrapper .svg_inner svg.${value}`).attr('style', `fill:${lightColorArray[svgclassinex]}`);
      jQuery(`.svg_wrapper .svg_inner svg.${value}`).attr('color', `${lightColorArray[svgclassinex]}`);
      list.push(value);
      svgclassinex++
    }
    jQuery(`.svg_wrapper .svg_inner svg.svg_class_`).attr('style', `fill:#fff`);
    jQuery(`.svg_wrapper .svg_inner svg.svg_class_`).attr('color', `#fff`);
  });

}



var selectedColors = [];
function getColors() {
  let list = []
  selectedColors = [];
  $(`.svg_wrapper .svg_inner svg`).each(function (e) {
    var value = $(this).attr("pattern");

    if (list.indexOf(value) === -1) {
      // console.log("index", svgclassinex, "class", value)
      if (value) {
        list.push(value);
        let colorcode = jQuery(`.svg_wrapper .svg_inner svg[pattern='${value}']`).attr('color');
        selectedColors.push({ name: value, value: colorcode })
      }
    }
  });
  console.log("selecrf color", selectedColors)
}




// Checkout Page Start
jQuery(".qty_plus").click(function () {
  let value = parseInt(jQuery("#qty_value").val())

  if (value >= 10) {
    return
  }
  jQuery("#qty_value").val(value + 1)
})

jQuery(".qty_minus").click(function () {
  let value = parseInt(jQuery("#qty_value").val())

  if (value <= 1) {
    return
  }
  jQuery("#qty_value").val(value - 1)
})



let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
var cartArray = cartArr;

function addToCart() {
  getColors();
  let title = jQuery(".svg_wrapper").attr(`pattern`);
  let size = jQuery(".svg_wrapper").attr(`size`);
  let qty = jQuery("#qty_value").val();
  let price = jQuery(`.${title} .priceDivJS[size='${size}']`).val();
  let img = jQuery(`.${title} .tamplateImageJS`).attr("src");
  let svghtml = jQuery(".svg_wrapper").html();

  cartArray.push({
    title,
    img,
    size,
    qty,
    svghtml,
    color: selectedColors,
    price: price
  })

  jQuery("#qty_value").val(1);

  console.log("cartarray", cartArray)
  fetchArray();
}

fetchArray();

function fetchArray() {

  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cartArray));

  $("#cart_row .cart_item").remove();

  if (cartArray.length <= 0) {
    jQuery("#checkoutbtn").attr(`disabled`, true);
  }
  else {
    jQuery("#checkoutbtn").removeAttr("disabled")
  }

  var totalPrice = 0;
  cartArray.map((item, i) => {
    $("#cart_row").append(`<div class="cart_item">
    <div class="d-flex">
      <!-- <img src="${item.img}" class="cart_img mr-2" /> -->
      <div class="cart_svg">
      ${item.svghtml}
      <span class="qty">${item.qty}</span>
      </div>
      <span class="d-inline-block">
        <h5>${item.title}</h5>

        <span class="cart_size">Size: ${item.size}mm - 200m</span>
        <div class="colors_div">
        ${item.color.map((itm) => {
      return `<span>Color ${itm.name}: ${itm.value}</span>`
    })}
        </div>
      </span>

    </div>

    <span class="card_price">$${item.price * item.qty}</span>

    <a class="remove_btn" onclick="removeArray(${i})">Remove</a>
  </div>`);

    totalPrice = (item.price * item.qty) + totalPrice
  })



  jQuery("#total_price").html(`$${totalPrice}`);

}


function removeArray(i) {
  if (window.confirm("Do you want to delete this row")) {
    cartArray = cartArray.filter((item, j) => i !== j);
    fetchArray();
  }
}



var checkoutVariable = 1;
function checkoutStep(step) {
  checkoutVariable = step;
  jQuery(`.checkout_breadcrumb .breadcrumb-item`).removeClass('active');
  jQuery(`.checkout_breadcrumb .breadcrumb-item:nth-child(${step + 1})`).addClass('active');

  jQuery(`.checkoutStepForm`).addClass('d-none');
  jQuery(`#checkoutStep${step}`).removeClass('d-none');
}

function contactChange() {
  checkoutStep(1);
  document.getElementById("contactfield").focus();
}

function shipChange() {
  checkoutStep(1);
  document.getElementById("firstnameField").focus();
}

function methodChange() {
  checkoutStep(2);
  document.getElementById("methodField").focus();
}



jQuery(".addresstypeJS").click(function () {
  let value = jQuery(".addresstypeJS:checked").val();

  console.log("vaa", value)

  if (value == 'shipping') {
    jQuery(`#billingBody`).addClass('d-none');
  }
  else {
    jQuery(`#billingBody`).removeClass('d-none');
  }

})

// Checkout Page End



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


