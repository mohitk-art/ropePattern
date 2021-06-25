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
  '#a9c0cb',
  '#a1d7c9',
  '#c6e3f7',
  '#92cbf1',
  '#74bbfb',
  '#87cefa',
  '#aec9eb',
  '#efc5b5',
  '#dedbcc',
  '#d3b683'
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

  if (cls != 'svg_class_') {
    jQuery(`.svg_wrapper .svg_inner svg.${cls}`).attr('style', `fill:${picked_color}`);
    jQuery(`.svg_wrapper .svg_inner svg.${cls}`).attr('color', `${picked_color}`);
    //   jQuery(`.svg_wrapper .svg_inner svg.svg_class_`).attr('style', `fill:#fff`);
    //   jQuery(`.svg_wrapper .svg_inner svg.svg_class_`).attr('color', `#fff`);
    jQuery(`#addtocartBtn`).removeAttr('disabled');
  }

}


// Color Slider Start
// colorArray.map(item => {

//   jQuery(`.vertical__color_crousel`).append(`<div class="color_slider">
//     <span style="background-color: ${item.code};" onClick="ColorJs('${item.code}')" class="color_sliderJS"
//       title="${item.name}" code="${item.code}"></span>
//   </div>`);

// })
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
  parentPattern('parent_pattern1');
  SetColor(colorName);
}




// load svg Cell
function loadSvg(roperows = 0) {
  let cell1 = -181;
  let cell2 = -145;
  let cell3 = -303;
  let cell4 = -145;
  let cell5 = -301.6;
  let cell6 = -126;
  let cellspace = 318.4;

  console.log("rope length", roperows)

  for (let j = 1; j <= roperows; j++) {
    for (let i = 5; i >= 0; i--) {

      let svgIndex = (j * 6) - i;
      let col = 6 - i;


      jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('id', svgIndex);

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

  let svgclass = jQuery(`.svg_inner > *:nth-child(${svgIndex})`).attr('class');
  jQuery(`.svg_inner > *:nth-child(${svgIndex}) path`).attr('onclick', `pathClick('${svgclass}')`);


  // console.log("index", svgIndex, "col", col)
}

function loadIndex(mainclass = '') {
  jQuery(".svg_wrapper").removeClass("d-none");

  SetPattren(mainclass)

  mainclass = mainclass ? `.${mainclass}` : '';

  jQuery(`.svg_inner`).html('');

  let j = 0;
  $(`${mainclass} #rope_box_wrapper > .rope_row`).each(function (e) {

    j++;

    for (let i = 5; i >= 0; i--) {

      let svgIndex = (j * 6) - i;
      let col = 6 - i;

      jQuery(`.svg_inner`).append('<svg></svg>');

      var cls1 = '';

      // console.log("index", svgIndex, "col", col, "row", j)


      cls1 = jQuery(`${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${col})`).attr("class") || '';


      jQuery(`.svg_wrapper .svg_inner svg:nth-child(${svgIndex})`).attr('class', `svg_class_${cls1}`);
      jQuery(`.svg_wrapper .svg_inner svg:nth-child(${svgIndex})`).attr('pattern', `${cls1}`);
    }

  });

  loadSvg(j);
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
  let length = jQuery(`.${title} .lengthDivJS[size='${size}']`).val();
  let weight = jQuery(`.${title} .weightDivJS[size='${size}']`).val();
  let img = jQuery(`.${title} .tamplateImageJS`).attr("src");
  let svghtml = jQuery(".svg_wrapper").html();

  let titlename = jQuery(`.${title} .rope_title`).html();

  cartArray.push({
    title: titlename,
    length,
    weight,
    comment: '',
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




function updateCart(i) {
  let value = jQuery(`.rope_text${i}`).val();
  cartArray[i].comment = value;

  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cartArray));
}


fetchArray();

function fetchArray() {

  cartArray.reverse();

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
    <section class="d-flex w-100">
      <!-- <img src="${item.img}" class="cart_img mr-2" /> -->
      <div class="cart_svg">
      ${item.svghtml}
      <span class="qty">${item.qty}</span>
      </div>
      <div class="cart_item_conetnt">
        <h5>${item.title}</h5>

        <span class="cart_size">Size: ${item.size}mm - ${item.length}m</span>
        <span class="cart_weight">Weight: ${item.weight}kg</span>
        <div class="colors_div">
        ${item.color.map((itm) => {
      return `<span>Color ${itm.name}: ${itm.value}</span>`
    })}
        </div>
        
        <textarea class="rope_textbox rope_text${i}" value="${item.comment}" onchange="updateCart(${i})">${item.comment}</textarea>
      </div>

    </section>

    <span class="card_price">$${item.price * item.qty}</span>

    <a class="remove_btn" onclick="removeArray(${i})">Remove</a>
  </div>`);

    totalPrice = (item.price * item.qty) + totalPrice
  })



  jQuery("#total_price").html(`$${totalPrice}`);

}


function removeArray(i) {
  if (window.confirm("Do you want to remove this item")) {
    jQuery(`#addtocartBtn`).removeAttr('disabled');
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



function ziocodechange() {
  jQuery('#error').css('display', 'none');

  var zip_code_value = 0;
  var weight_value = 0;
  var zipcode = document.getElementById("zipcode").value;
  var price = 0;
  var final_price = 0;
  var get_first_character = zipcode.slice(0, 1);
  var sub_value = 0;
  var total_val = 0;
  if (get_first_character == 0) {
    zip_code_value = 1.8;
  }
  else if (get_first_character == 2) {
    zip_code_value = 1.5;
  }
  else if (get_first_character == 3) {
    zip_code_value = 1.4;
  }
  else if (get_first_character == 4) {
    zip_code_value = 1.9;
  }
  else if (get_first_character == 5) {
    zip_code_value = 1.2
  }
  else if (get_first_character == 6) {
    zip_code_value = 1;
  }
  else if (get_first_character == 7) {
    zip_code_value = 2;
  }
  else {


    jQuery('#error').css('display', 'block');

    document.getElementById("error").textContent = "You entered wrong zip code  ";

    return false;
  }
  cartArray.map((item, i) => {
    console.log(item.price)
    weight = item.weight;
    price = parseInt(item.price);
    final_price = final_price + price;
    if (weight >= 0 && weight <= 20) {
      weight_value = 20;
    }
    else if (weight >= 21 && weight <= 30) {
      weight_value = 30;
    }
    /* else if(weight >= 31 &&  weight <= 40)
     {
          weight_value =40;
     } */
    else if (weight >= 31 && weight <= 50) {
      weight_value = 40;
    }
    else if (weight >= 51 && weight <= 60) {
      weight_value = 50;
    }
    else if (weight >= 61 && weight <= 70) {
      weight_value = 60;
    }

    else if (weight >= 71 && weight <= 80) {
      weight_value = 70;
    }
    else if (weight >= 81 && weight <= 90) {
      weight_value = 80;
    }
    else if (weight >= 91 && weight <= 100) {
      weight_value = 90;
    }
    else if (weight >= 101 && weight <= 120) {
      weight_value = 100;
    }
    else if (weight >= 121 && weight <= 140) {
      weight_value = 110;
    }
    else if (weight >= 141 && weight <= 160) {
      weight_value = 120;
    }
    else if (weight >= 161 && weight <= 200) {
      weight_value = 130;
    }
    else if (weight >= 201 && weight <= 400) {
      weight_value = 140;
    }
    else {
      return false;
    }

    sub_value = zip_code_value * weight_value;




    total_val = total_val + sub_value;



  })
  console.log(total_val, final_price, 'total_valtotal_val')

  document.getElementById("shipping_cost").textContent = '$' + total_val;


  var final_total1 = final_price + total_val;
  console.log(total_val, final_price, 'total_valtotal_val', final_total1)
  document.getElementById("final_total").textContent = '$' + final_total1;
  document.getElementById('placeorder').disabled = false;




}


