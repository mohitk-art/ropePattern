var lightColorArray = [
  { code: '#a9c0cb', name: "Echo Blue" },
  { code: '#A1D7C9', name: "Sinbad" },
  { code: '#c6e3f7', name: "Pale Cornflower Blue" },
  { code: '#92cbf1', name: "Sky Blue" },
  { code: '#74bbfb', name: "Maya Blue" },
  { code: '#87cefa', name: "Light Sky Blue" },
  { code: '#aec9eb', name: "Tropical Blue" },
  { code: '#efc5b5', name: "Desert Sand" },
  { code: '#dedbcc', name: "Green White" },
  { code: '#d3b683', name: "Calico" }
]


var ropeDetails = []
getRopeDetails();
function getRopeDetails() {
  jQuery(`.ropeDetailTable > div`).each(function (e) {
    let size = jQuery(this).attr('size');
    let length = jQuery(this).attr('length');
    let weight = jQuery(this).attr('weight');
    let price = jQuery(this).attr('price');

    ropeDetails.push({ size, length, weight, price })
  })

  console.log("rope details", ropeDetails);
}

function loaderDiv(p) {
  if (p == 'show') {
    jQuery('#loaderdiv').addClass("d-flex")
  }
  else {
    jQuery('#loaderdiv').removeClass("d-flex")
  }
}

function SizeJs(index) {
  jQuery(".svg_wrapper").attr('size', index);
  jQuery(".number_sliderJS").removeClass("active");
  jQuery(`.number_sliderJS[title='${index}']`).addClass("active");
}

function SetPattren(index) {
  jQuery(".svg_wrapper").attr('pattern', index);
  jQuery(".pattren_sliderJS").removeClass("active")
  jQuery(`.pattren_sliderJS[id='${index}']`).addClass("active")
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
  picked_color = getProperties().color;
  if (cls != 'svg_class_') {

    let colortitle = jQuery(`.color_sliderJS[code='${picked_color}']`).attr('title');
    jQuery(`.svg_wrapper .svg_inner svg.${cls}`).attr('style', `fill:${picked_color}`);
    jQuery(`.svg_wrapper .svg_inner svg.${cls}`).attr('color', `${picked_color}`);
    jQuery(`.svg_wrapper .svg_inner svg.${cls}`).attr('colorname', `${colortitle}`);
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
  let color = jQuery(".svg_wrapper").attr('color');
  let patternName = jQuery(".svg_wrapper").attr('pattern');
  let ropeLength = jQuery(".svg_wrapper").attr('Ropelength');
  return { sizeJS, patternName, ropeLength, color }
}


function getData() {
  let sizeJS = getProperties().sizeJS;
  SizeJs(sizeJS);

  jQuery(".sub_pattern_nav .slick-track .slick-slide:first-child .pattren_sliderJS").click();
  jQuery(".vertical__color_crousel .slick-track .slick-slide:first-child .color_sliderJS").click();
}




// load svg Cell
function loadSvg(roperows = 0) {
  let cell1 = -181;
  let cell2 = -166;
  let cell3 = -324;
  let cell4 = -171;
  let cell5 = -324;
  let cell6 = -157;
  let cellspace = 304;

  console.log("rope length", roperows)

  for (let j = 1; j <= roperows; j++) {
    for (let i = 5; i >= 0; i--) {

      let svgIndex = (j * 6) - i;
      let col = 6 - i;


      jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('id', svgIndex);

      if (col == 1) {
        let y = cell1;
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('x', 23);
        cell1 = cell1 + cellspace;
      }

      if (col == 2) {
        let y = cell2;
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('x', 38);
        cell2 = cell2 + cellspace;
      }

      if (col == 3) {
        let y = cell3;
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('x', 225);
        cell3 = cell3 + cellspace;
      }

      if (col == 4) {
        let y = cell4;
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('x', 543);
        cell4 = cell4 + cellspace;
      }

      if (col == 5) {
        let y = cell5;
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('x', 910);
        cell5 = cell5 + cellspace;
      }

      if (col == 6) {
        let y = cell6;
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('x', 1231);
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

  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('height', height);
  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('width', width);
  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('version', version);
  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('viewBox', viewBox);
  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('preserveAspectRatio', preserveAspectRatio);
  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('xmlns', xmlns);

  let ishtml = jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).html();
  if (ishtml) {

  }
  else {
    jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).html(hiddenPatternHTML);
  }

  let svgclass = jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('class');
  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex}) path`).attr('onclick', `pathClick('${svgclass}')`);

  loaderDiv('hide')
  // console.log("index", svgIndex, "col", col)
}



patternAssign();
function patternAssign(size = '') {
  loadPattern(size);
  jQuery('.vertical__pattren_crousel').removeClass('slick-initialized slick-slider slick-vertical');
  jQuery('.vertical__pattren_crousel').slick({
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });

  jQuery(".sub_pattern_nav .slick-track .slick-slide:first-child .pattren_sliderJS").click();
}


function loadPattern(ropesize = '') {
  jQuery(`.sub_pattern_crousel .vertical__pattren_crousel`).html("")


  if (ropesize) {
    $(`.hiddenRopes > div`).each(function (e) {
      let cls = $(this).attr("class");
      // console.log("pa cls", cls);
      let img = jQuery(`.${cls} .tamplateImageJS`).attr("src") || '';
      let title = jQuery(`.${cls} .rope_title`).html() || '';
      let size = jQuery(`.${cls} .rope_sizeJS`).html() || '';

      let htmlcode = `<div class="pattren_slider">
    <img src="${img}" class="pattren_sliderJS" id="${cls}" title="${title}"
      onClick="loadIndex('${cls}')" />
  </div>`;

      if (size == ropesize) {
        jQuery(`.sub_pattern_crousel .vertical__pattren_crousel`).append(htmlcode)
      }



    });
  }
  else {
    $(`.hiddenRopes > div`).each(function (e) {
      let cls = $(this).attr("class");
      // console.log("pa cls", cls);
      let img = jQuery(`.${cls} .tamplateImageJS`).attr("src") || '';
      let title = jQuery(`.${cls} .rope_title`).html() || '';

      let htmlcode = `<div class="pattren_slider">
    <img src="${img}" class="pattren_sliderJS" id="${cls}" title="${title}"
      onClick="loadIndex('${cls}')" />
  </div>`;
      jQuery(`.sub_pattern_crousel .vertical__pattren_crousel`).append(htmlcode)

    });
  }


}

function loadIndex(mainclass = '') {

  let svgpattern = jQuery(".svg_wrapper").attr('pattern');
  if (svgpattern == mainclass) {
    return false;
  }


  jQuery(`#addtocartBtn`).removeAttr('disabled');

  SetPattren(mainclass);

  loaderDiv('show');
  jQuery(".svg_wrapper").removeClass("d-none");



  mainclass = mainclass ? `.${mainclass}` : '';

  //   jQuery(`.svg_wrapper .svg_inner`).html('');

  let j = 0;
  $(`${mainclass} #rope_box_wrapper > .rope_row`).each(function (e) {

    j++;

    for (let i = 5; i >= 0; i--) {

      let svgIndex = (j * 6) - i;
      let col = 6 - i;


      jQuery(`.svg_wrapper .svg_inner svg:nth-child(${svgIndex})`).attr('pattern', `${cls1}`);

      let isid = jQuery(`.svg_wrapper .svg_inner svg:nth-child(${svgIndex})`).attr('id') || '';

      if (isid) {

      } else {
        jQuery(`.svg_wrapper .svg_inner`).append('<svg></svg>');
      }


      var cls1 = '';

      // console.log("index", svgIndex, "col", col, "row", j)


      cls1 = jQuery(`${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${col})`).attr("class") || '';


      jQuery(`.svg_wrapper .svg_inner svg:nth-child(${svgIndex})`).attr('class', `svg_class_${cls1}`);
      jQuery(`.svg_wrapper .svg_inner svg:nth-child(${svgIndex})`).attr('pattern', `${cls1}`);
    }

  });


  jQuery(`.svg_wrapper`).attr('Ropelength', `${j}`);
  loadSvg(j);
  // loadSvg(1);
  defaultColorClass();
}

function defaultColorClass() {

  let svgclassinex = 0;
  let list = [];

  $(`.svg_wrapper .svg_inner svg`).each(function (e) {
    var value = $(this).attr("class");

    if (list.indexOf(value) === -1) {
      // console.log("index", svgclassinex, "class", value)
      jQuery(`.svg_wrapper .svg_inner svg.${value}`).attr('style', `fill:${lightColorArray[svgclassinex].code}`);
      jQuery(`.svg_wrapper .svg_inner svg.${value}`).attr('color', `${lightColorArray[svgclassinex].code}`);
      jQuery(`.svg_wrapper .svg_inner svg.${value}`).attr('colorname', `${lightColorArray[svgclassinex].name}`);
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
        let color = jQuery(`.svg_wrapper .svg_inner svg[pattern='${value}']`).attr('colorname') || 'White';
        let colorcode = jQuery(`.svg_wrapper .svg_inner svg[pattern='${value}']`).attr('color') || '#fff';
        selectedColors.push({ name: value, value: color, colorcode })
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

function getLengths(size) {
  let lengths = []
  ropeDetails.map(item => {
    if (item.size == size) {
      lengths.push({ length: item.length, weight: item.weight, price: item.price });
    }
  })
  // console.log("lengths",lengths)
  return lengths;
}


function addToCart() {
  getColors();
  let title = jQuery(".svg_wrapper").attr(`pattern`);
  let size = jQuery(".svg_wrapper").attr(`size`);
  let qty = jQuery("#qty_value").val();

  let lengths = getLengths(size);

  let price = lengths[0].price
  let length1 = lengths[0].length
  let weight = lengths[0].weight
  let img = jQuery(`.${title} .tamplateImageJS`).attr("src");
  let svghtml = jQuery(".svg_wrapper").html();

  let titlename = jQuery(`.${title} .rope_title`).html();

  cartArray.push({
    title: titlename,
    length1,
    lengths,
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

  cartArray.reverse();
  console.log("cartarray", cartArray)
  fetchArray();
}




function updateCart(i, item = 'comment') {

  if (item == 'length') {
    let value1 = jQuery(`.rope_length${i}`).val();

    cartArray[i].length1 = value1;

    cartArray[i].lengths.map(item => {
      if (item.length == value1) {
        cartArray[i].price = item.price;
        cartArray[i].weight = item.weight;
      }
    });

    fetchArray();
  }
  else {
    let value2 = jQuery(`.rope_text${i}`).val();
    cartArray[i].comment = value2;
  }



  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cartArray));
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
    <section class="d-flex w-100">
      <!-- <img src="${item.img}" class="cart_img mr-2" /> -->
      <div class="cart_svg">
      ${item.svghtml}
      <span class="qty">${item.qty}</span>
      </div>
      <div class="cart_item_conetnt">
        <h5>${item.title}</h5>

        <span class="cart_size">Size: ${item.size}mm</span>
        <span class="cart_weight">Weight: ${item.weight}kg</span>
        <div class="colors_div">Colors:
        ${item.color.map((itm) => {
      return ` ${itm.value}`
    })}
        </div>
        
        <span class="cart_length">Length: 
            <select onchange="updateCart(${i}, 'length')" class="lengthdropdown rope_length${i}" value="${item.length1}">
            
                    ${item.lengths.map(lit => {
      return `<option value="${lit.length}" ${item.length1 == lit.length ? 'selected' : ''}>${lit.length}</option>`
    })}
                    
            </select>
        </span>
        
        
        <textarea class="rope_textbox rope_text${i}" value="${item.comment}" onchange="updateCart(${i}, 'comment')">${item.comment}</textarea>
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

  //   jQuery('.vertical__pattren_crousel').slick({
  //     infinite: false,
  //     vertical: true,
  //     verticalSwiping: true,
  //     slidesToShow: 2,
  //     slidesToScroll: 2
  //   });
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
      weight_value = document.getElementById("00to20").value;
    }
    else if (weight >= 21 && weight <= 30) {
      weight_value = document.getElementById("20to30").value;
    }
    /* else if(weight >= 31 &&  weight <= 40)
     {
          weight_value =40;
     } */
    else if (weight >= 31 && weight <= 50) {
      weight_value = document.getElementById("40to50").value;
    }
    else if (weight >= 51 && weight <= 60) {
      weight_value = document.getElementById("50to60").value;
    }
    else if (weight >= 61 && weight <= 70) {
      weight_value = document.getElementById("60to70").value;
    }

    else if (weight >= 71 && weight <= 80) {
      weight_value = document.getElementById("70to80").value;
    }
    else if (weight >= 81 && weight <= 90) {
      weight_value = document.getElementById("80to90").value;
    }
    else if (weight >= 91 && weight <= 100) {
      weight_value = document.getElementById("90to100").value;
    }
    else if (weight >= 101 && weight <= 120) {
      weight_value = document.getElementById("90to120").value;
    }
    else if (weight >= 121 && weight <= 140) {
      weight_value = document.getElementById("120to140").value;
    }
    else if (weight >= 141 && weight <= 160) {
      weight_value = document.getElementById("140to160").value;
    }
    else if (weight >= 161 && weight <= 200) {
      weight_value = document.getElementById("160to200").value;
    }
    else if (weight >= 201 && weight <= 400) {
      weight_value = document.getElementById("200to400").value;
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


