$('#zipcode').on('keypress', function (ev) {
  var keyCode = window.event ? ev.keyCode : ev.which;
  //codes for 0-9
  if (keyCode < 48 || keyCode > 57) {
    //codes for backspace, delete, enter
    if (keyCode != 0 && keyCode != 8 && keyCode != 13 && !ev.ctrlKey) {
      ev.preventDefault();
    }
  }
});


jQuery('[data-toggle="tooltip"]').mouseenter(function () {
  var that = $(this)
  that.tooltip('show');
  setTimeout(function () {
    that.tooltip('hide');
  }, 1000);
})

jQuery('[data-toggle="tooltip"]').mouseleave(function () {
  $(this).tooltip('hide');
})


/*
var minLength = 5;
var maxLength = 10;

$('#phone_number').on('keydown keyup change', function(){
var char = $(this).val();
var charLength = $(this).val().length;
if(charLength < minLength){
   jQuery('#error').css('display', 'block');
  document.getElementById("error").textContent = 'Phone number length is short, minimum '+minLength+' required.';
  
  
}else if(charLength > maxLength){
   jQuery('#error').css('display', 'block');
    document.getElementById("error").textContent = 'Phone number Length is not valid, maximum '+maxLength+' allowed.';
  $(this).val(char.substring(0, maxLength));
  
}
});
*/

var states = new Array("Australia", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");
var options = '';

for (var i = 0; i < states.length; i++) {
  options += '<option value="' + states[i] + '">' + states[i] + '</option>';
}
var cartArray = []



$("#country").html(options);


var lightColorArray = [
  { code: '#a9c0cb' },
  { code: '#A1D7C9' },
  { code: '#c6e3f7' },
  { code: '#92cbf1' },
  { code: '#74bbfb' },
  { code: '#87cefa' },
  { code: '#aec9eb' },
  { code: '#efc5b5' },
  { code: '#dedbcc' },
  { code: '#d3b683' },
  { code: '#A1D7C9' },
  { code: '#c6e3f7' },
  { code: '#92cbf1' },
  { code: '#74bbfb' },
  { code: '#87cefa' },
  { code: '#aec9eb' },
  { code: '#efc5b5' },
  { code: '#dedbcc' },
  { code: '#d3b683' },
  { code: '#A1D7C9' },
  { code: '#c6e3f7' },
  { code: '#92cbf1' },
  { code: '#74bbfb' },
  { code: '#87cefa' }
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

  let size = getProperties().sizeJS;

  jQuery(".number_sliderJS").removeClass("active");
  jQuery(`.number_sliderJS[title='${index}']`).addClass("active");

  if (size == index) {
    return false;
  }

  jQuery(".svg_wrapper").attr('size', index);

  patternAssign(index);
}

function SetPattren(index = '') {
  jQuery(".svg_wrapper").attr('pattern', index);
  jQuery(".pattren_sliderJS").removeClass("active")
  jQuery(`.pattren_sliderJS[id='${index}']`).addClass("active")
}


function SetColor(i) {
  jQuery(".svg_wrapper").attr(`color`, i);
  jQuery(`.color_sliderJS`).removeClass('active');
  jQuery(`.color_sliderJS[index='${i}']`).addClass('active');
}

var picked_color;
function ColorJs(code, code2, i) {
  picked_color = { code, code2, i };
  SetColor(i);
}



function pathClick(cls) {
  if (!picked_color) {
    alert("Please select a color")
    return
  }

  if (!cls) {
    alert("No Pettern")
    return
  }


  if (cls != 'svg_class_') {
    // jQuery(`.svg_wrapper .svg_inner svg.${cls} path`).attr('style', `fill:${style};`);
    if (picked_color.code2) {
      jQuery(`.svg_wrapper .svg_inner svg.${cls} g:nth-child(even) path`).attr('style', `fill:${picked_color?.code2};`);
      jQuery(`.svg_wrapper .svg_inner svg.${cls} g:nth-child(odd) path`).attr('style', `fill:${picked_color?.code};`);
    } else {
      jQuery(`.svg_wrapper .svg_inner svg.${cls} path`).attr('style', `fill:${picked_color?.code};`);
    }

    jQuery(`.svg_wrapper .svg_inner svg.${cls}`).attr('color', `${picked_color.i}`);
    jQuery(`.addtocartBtn`).removeAttr('disabled');
  }

}



function getProperties() {
  let sizeJS = jQuery(".svg_wrapper").attr('size');
  let color = jQuery(".svg_wrapper").attr('color');
  let patternName = jQuery(".svg_wrapper").attr('pattern');
  return { sizeJS, patternName, color }
}


function getData() {
  let sizeJS = getProperties().sizeJS;
  SizeJs(sizeJS);

  jQuery(".sub_pattern_nav .slick-track .slick-slide:first-child .pattren_sliderJS").click();
  jQuery(".vertical__color_crousel .slick-track .slick-slide:first-child .color_sliderJS").click();
}

loadSize();
function loadSize(p = []) {
  let sizes = [6, 8, 10, 12, 14, 16];
  if (p.length > 0) {
    sizes = p;
  }
  jQuery(".verticle_size_slider").html('');


  sizes.map(item => {
    let htmls = `<div class="number_slider">
            <span class="number_sliderJS" onClick="SizeJs(${item})" title="${item}">${item}</span>
          </div>`

    jQuery(".verticle_size_slider").append(htmls);
  })

}



function loadSVGCell(svgIndex, col) {
  let hiddenPatternHTML = jQuery(`#hiddenPattren > *:nth-child(${col})`).html();
  let height = jQuery(`#hiddenPattren > *:nth-child(${col})`).attr('height');
  let width = jQuery(`#hiddenPattren > *:nth-child(${col})`).attr('width');
  let version = jQuery(`#hiddenPattren > *:nth-child(${col})`).attr('version');
  let xmlns = jQuery(`#hiddenPattren > *:nth-child(${col})`).attr('xmlns');

  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('height', height);
  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('width', width);
  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('version', version);
  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('xmlns', xmlns);
  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).html(hiddenPatternHTML);
  jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex}) path`).attr('onclick', `pathClick('')`);

  loaderDiv('hide')
}

// load svg Cell
function loadSvg(roperows = 0) {
  let cell1 = -199;
  let cell2 = -166;
  let cell3 = -324;
  let cell4 = -171;
  let cell5 = -324;
  let cell6 = -157;
  let cellspace = 304;

  for (let j = 1; j <= roperows; j++) {
    for (let i = 5; i >= 0; i--) {

      let svgIndex = (j * 6) - i;
      let col = 6 - i;


      jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('id', svgIndex);

      if (col == 1) {
        let y = cell1;
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('y', y);
        jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex})`).attr('x', 14);
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

function loadSvgStep1() {
  jQuery(`.svg_wrapper .svg_inner`).html('');

  for (let j = 25; j >= 0; j--) {
    for (let i = 5; i >= 0; i--) {
      jQuery(`.svg_wrapper .svg_inner`).append('<svg></svg>');
    }
  }
  loadSvg(26);
}

loadSvgStep1()


patternAssign(6);
function patternAssign(size = '') {
  loadPattern(size);
  jQuery('.vertical__pattren_crousel').removeClass('slick-initialized slick-slider slick-vertical');
  jQuery('.vertical__pattren_crousel').slick({
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });


  jQuery(".svg_wrapper").attr('pattern', '');
  jQuery(`.addtocartBtn`).attr('disabled', true);

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
  <img src="${img}" class="pattren_sliderJS" size="${size}" data-toggle="tooltip" data-placement="right" id="${cls}" title="${title}"
    onClick="loadIndex('${cls}')" />
</div>`;


      if (ropesize == 6 || ropesize == 8) {
        if (size == 6) {
          jQuery(`.sub_pattern_crousel .vertical__pattren_crousel`).append(htmlcode)
        }
      }

      else {
        if (size == 10) {
          jQuery(`.sub_pattern_crousel .vertical__pattren_crousel`).append(htmlcode)
        }
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



  jQuery('[data-toggle="tooltip"]').tooltip()

  jQuery('[data-toggle="tooltip"]').mouseenter(function () {
    var that = $(this)
    that.tooltip('show');
    setTimeout(function () {
      that.tooltip('hide');
    }, 1000);
  })

  jQuery('[data-toggle="tooltip"]').mouseleave(function () {
    $(this).tooltip('hide');
  })

}


function loadIndex(mainclass = '') {
  SetPattren(mainclass)

  mainclass = mainclass ? `.${mainclass}` : '';

  let j = 0;

  $(`${mainclass} #rope_box_wrapper > .rope_row`).each(function (e) {

    j++;
    for (let i = 5; i >= 0; i--) {

      let svgIndex = (j * 6) - i;
      let col = 6 - i;
      var cls1 = '';

      cls1 = jQuery(`${mainclass} .rope_box_wrapper .rope_row:nth-child(${j}) > input:nth-child(${col})`).attr("class") || '';

      jQuery(`.svg_wrapper .svg_inner svg:nth-child(${svgIndex})`).attr('class', `svg_class_${cls1}`);
      jQuery(`.svg_wrapper .svg_inner svg:nth-child(${svgIndex})`).attr('pattern', `${cls1}`);
      jQuery(`.svg_wrapper .svg_inner > *:nth-child(${svgIndex}) path`).attr('onclick', `pathClick('svg_class_${cls1}')`);
    }

  });

  defaultColorClass();
}





function defaultColorClass() {

  let svgclassinex = 0;
  let list = [];

  $(`.svg_wrapper .svg_inner svg`).each(function (e) {
    var value = $(this).attr("class");

    if (list.indexOf(value) === -1) {
      // console.log("index", svgclassinex, "class", value)
      jQuery(`.svg_wrapper .svg_inner svg.${value} path`).attr('style', `fill:${lightColorArray[svgclassinex].code}`);
      jQuery(`.svg_wrapper .svg_inner svg.${value}`).attr('color', ``);
      list.push(value);
      svgclassinex++
    }
    jQuery(`.svg_wrapper .svg_inner svg.svg_class_ path`).attr('style', `fill:#fff`);
    jQuery(`.svg_wrapper .svg_inner svg.svg_class_ path`).attr('color', ``);
  });

}




var selectedColors = [];
function getColors() {
  let list = []
  let isError = '';
  selectedColors = [];
  $(`.svg_wrapper .svg_inner svg`).each(function (e) {
    var value = $(this).attr("pattern");


    if (value == '') {
      $('#liveToast').toast('show')
      isError = 'undefined'
    }

    if (list.indexOf(value) === -1) {
      if (value) {
        list.push(value);

        let color = jQuery(`.svg_wrapper .svg_inner svg[pattern='${value}']`).attr('color') || '';

        selectedColors.push({ pattern: value, color: color })
      }
    }
  });

  console.log("selected color", selectedColors)


  return isError;

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
cartArray = cartArr;

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

  if (getColors() == 'undefined') {
    return
  }


  $.ajax({
    url: cartArrayPush(),
    success: function () {
      jQuery('.cart_svg svg path').removeAttr('onclick')
    }
  })




}
// var cartArray=[];

function cartArrayPush() {
  jQuery('.addtocartBtn').attr('disabled', true)
  //   console.log('fdfd', getColors())
  let title = jQuery(".svg_wrapper").attr(`pattern`);
  let size = jQuery(".svg_wrapper").attr(`size`);
  let qty = jQuery("#qty_value").val();
  let lengths = getLengths(size);
  let price = lengths[0].price
  let length1 = lengths[0].length
  let weight = lengths[0].weight
  let img = jQuery(`.${title} .tamplateImageJS`).attr("src");
  let fillimage = 'nolink';
  let svghtml = jQuery(".svg_wrapper").html();
  let titlename = jQuery(`.${title} .rope_title`).html();

  cartArray.push({
    title: titlename,
    length1,
    lengths,
    weight,
    comment: '',
    img,
    fillimage,
    size,
    qty,
    svghtml,
    color: selectedColors,
    price: price
  })

  jQuery("#qty_value").val(1);

  // cartArray.reverse();
  // console.log("cartarray", cartArray)
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
    fetchArray();
  }



  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cartArray));
}



fetchArray();
var totalPrice = 0;
function fetchArray() {
  // console.log("fetch", cartArray, 'svgimg',svgImages);

  localStorage.removeItem("cart");
  jQuery("#cart_items").val(JSON.stringify(cartArray));
  jQuery("#cart_items1").val(JSON.stringify(cartArray));
  localStorage.setItem("cart", JSON.stringify(cartArray));

  jQuery("#cartLength").html(cartArray.length);



  if ($("#zipcode").val() != '') {
    ziocodechange();
  }

  $("#cart_row .cart_item").remove();

  if (cartArray.length <= 0) {
    jQuery(".checkoutbtn").attr(`disabled`, true);
  }
  else {
    jQuery(".checkoutbtn").removeAttr("disabled")
  }

  totalPrice = 0;
  cartArray.map((item, i) => {
    $("#cart_row").append(`<div class="cart_item">
  <section class="d-flex w-100">
    <!-- <img src="${item.img}" class="cart_img mr-2" /> -->
    <div class="cart_svg" id="cartsvg${i}">
    ${item.svghtml}
   
    </div>
    
    <div class="cart_item_conetnt">
      <h5>${item.title}</h5>

      <span class="cart_size">Size: ${item.size}mm</span>
      <span class="cart_weight">Weight: ${item.weight}kg</span>
      <div class="colors_div">Colours:
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


  jQuery("#total_value1").val(totalPrice.toFixed(2));

  jQuery("#total_price").html(`$${totalPrice.toFixed(2)}`);

  jQuery('.final_total').html('$' + totalPrice.toFixed(2));
  jQuery('#final_total1').val(totalPrice.toFixed(2));

  if (totalPrice == 0) {
    document.getElementById("shipping_cost").textContent = '$0.00';
    document.getElementById("gst").textContent = '$0.00';
    jQuery('.final_total').html('$0.00');
    jQuery('#final_total1').val(0);

  }

  if ($("#country option:selected").text() == 'Australia') {

    if (document.getElementById('ispickup1').checked) {

      var gst = document.getElementById("gst_value").value;
      var shipping_cost1 = document.getElementById("shipping_cost1").value
      var totalPrice1 = parseFloat(totalPrice) + parseFloat(shipping_cost1)
      final_total = (parseFloat(totalPrice1) * parseFloat(gst) / 100);
      final_total1 = totalPrice1 + final_total
      document.getElementById("gst").textContent = '$' + final_total.toFixed(2)
      document.getElementById("gst_value1").value = final_total.toFixed(2)
      jQuery('.final_total').html('$' + final_total1.toFixed(2));
      jQuery('#final_total1').val(final_total1.toFixed(2));
      document.getElementById("shipping_cost").textContent = '$' + parseFloat(shipping_cost1).toFixed(2)
    }
    else {

      var gst = document.getElementById("gst_value").value;
      var shipping_cost1 = document.getElementById("shipping_cost1").value
      var totalPrice1 = parseFloat(totalPrice)
      final_total = (parseFloat(totalPrice1) * parseFloat(gst) / 100);
      final_total1 = totalPrice1 + final_total
      document.getElementById("gst").textContent = '$' + final_total.toFixed(2)
      document.getElementById("gst_value1").value = final_total.toFixed(2)
      jQuery('.final_total').html('$' + final_total1.toFixed(2));
      jQuery('#final_total1').val(final_total1.toFixed(2));
      document.getElementById("shipping_cost").textContent = '$0.00';
    }

    if (totalPrice == 0) {
      document.getElementById("shipping_cost").textContent = '$0.00';
      document.getElementById("gst").textContent = '$0.00';
      jQuery('.final_total').html('$0.00');
      jQuery('#final_total1').val(0);

    }



  }
  else {
    if (totalPrice == 0) {
      document.getElementById("shipping_cost").textContent = '$0.00';
      document.getElementById("gst").textContent = '$0.00';
      jQuery('.final_total').html('$0.00');
      jQuery('#final_total1').val(0);

    }
    else {
      if (document.getElementById('ispickup1').checked) {

        var shipping_cost1 = document.getElementById("shipping_cost1").value
        document.getElementById("shipping_cost").textContent = '$' + parseFloat(shipping_cost1).toFixed(2);

        var totalPrice1 = parseFloat(totalPrice) + parseFloat(shipping_cost1)
        jQuery('.final_total').html('$' + totalPrice1.toFixed(2));
        jQuery('#final_total1').val(totalPrice1.toFixed(2));
      }
      else {

        var gst = document.getElementById("gst_value").value;
        final_total = (parseFloat(totalPrice) * parseFloat(gst) / 100);
        final_total1 = totalPrice + final_total;

        document.getElementById("gst").textContent = '$' + final_total.toFixed(2)
        document.getElementById("gst_value1").value = final_total.toFixed(2)
        jQuery('.final_total').html('$' + final_total1.toFixed(2));
        jQuery('#final_total1').val(final_total1.toFixed(2));
        document.getElementById("shipping_cost").textContent = '$0.00';

      }
    }

  }





}


function removeArray(i) {
  if (window.confirm("Do you want to remove this item")) {
    jQuery(`.addtocartBtn`).removeAttr('disabled');
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


jQuery(".pickupbtnJS").click(function () {
  pickupFunction();
})

pickupFunction();
function pickupFunction() {
  let value = jQuery(".pickupbtnJS:checked").val();
  console.log("vaa", value)

  if (value == 'pickup') {
    jQuery('#shippingBody').addClass('d-none');
    // jQuery(`#shippingItem`).addClass('d-none');
    jQuery('#address').attr('required', false);
    jQuery('#zipcode').attr('required', false);
    jQuery('#suburb').attr('required', false);
    jQuery('#street').attr('required', false);
    jQuery('#state').attr('required', false);


  }
  else {
    jQuery('#shippingBody').removeClass('d-none');
    // jQuery(`#shippingItem`).removeClass('d-none');
    jQuery('#address').attr('required', true);
    jQuery('#zipcode').attr('required', true);
    jQuery('#suburb').attr('required', true);
    jQuery('#street').attr('required', true);
    jQuery('#state').attr('required', true);
  }
}

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



jQuery("#checkoutbtn").click(function () {
  checkoutClick();
})



function checkoutClick() {
  $.ajax({
    url: checkoutStep1(),
    success: function () {
      // checkoutStep2();
    }
  })

}


function checkoutStep1() {
  if (cartArray.length == 0) {
    $('#cartToast').toast('show')
    jQuery(".checkoutbtn").attr('disabled', true)
    return
  }

  jQuery(".checkoutbtnsubmit").click()

  $("#checkoutForm").submit(function (event) {
    //   loaderDiv('show')

    //   event.preventDefault();
  });
}





function ziocodechange() {


  var zipcode = document.getElementById("zipcode").value;



  if (zipcode != '') {
    jQuery('#error').css('display', 'none');


    var zip_code_value = 0;
    var weight_value = 0;
    var zipcode = document.getElementById("zipcode").value;
    var price = 0;
    var final_price = 0;
    var get_first_character = zipcode.slice(0, 1);
    var sub_value = 0;
    var total_val = 0;
    var sub_value1 = 0;
    var weight1 = 0;
    var weight = 0;
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
      weight1 = item.weight;

      price = parseInt(item.price);
      final_price = final_price + price;


      weight = parseInt(weight1) + parseInt(weight);


    })


    if (weight >= 1 && weight <= 19.9) {
      weight_value = document.getElementById("00to20").value;
    }
    else if (weight >= 20 && weight <= 29.9) {
      weight_value = document.getElementById("20to30").value;
    }
    else if (weight >= 30 && weight <= 39.9) {
      weight_value = document.getElementById("30to40").value;
    }
    else if (weight >= 40 && weight <= 49.9) {
      weight_value = document.getElementById("40to50").value;
    }
    else if (weight >= 50 && weight <= 59.9) {
      weight_value = document.getElementById("50to60").value;
    }
    else if (weight >= 60 && weight <= 69.9) {
      weight_value = document.getElementById("60to70").value;
    }

    else if (weight >= 70 && weight <= 79.9) {
      weight_value = document.getElementById("70to80").value;
    }
    else if (weight >= 80 && weight <= 89.9) {
      weight_value = document.getElementById("80to90").value;
    }
    else if (weight >= 90 && weight <= 99.9) {
      weight_value = document.getElementById("90to100").value;
    }
    else if (weight >= 100 && weight <= 199.9) {
      weight_value = document.getElementById("100to120").value;
    }
    else if (weight >= 120 && weight <= 139.9) {
      weight_value = document.getElementById("120to140").value;
    }
    else if (weight >= 140 && weight <= 159.9) {
      weight_value = document.getElementById("140to160").value;
    }
    else if (weight >= 160 && weight <= 199.9) {
      weight_value = document.getElementById("160to200").value;
    }
    else if (weight >= 200 && weight <= 399.9) {
      weight_value = document.getElementById("200to400").value;
    }
    else {
      weight_value = 0;
    }

    if ($("#country option:selected").text() == 'Australia') {


      sub_value = zip_code_value * weight_value;

      gst_value = document.getElementById("gst_value").value

      total_price = document.getElementById("total_value1").value;
      final_total1 = parseFloat(total_price) + parseFloat(sub_value);

      final_total2 = (parseFloat(final_total1) * parseFloat(gst_value) / 100);

      final_total3 = parseFloat(final_total1) + parseFloat(final_total2)

      document.getElementById("shipping_cost").textContent = '$' + sub_value.toFixed(2);

      document.getElementById("shipping_cost1").value = sub_value.toFixed(2);

      document.getElementById("gst").textContent = '$' + final_total2.toFixed(2)
      document.getElementById("gst_value1").value = final_total2.toFixed(2)

      jQuery('.final_total').html('$' + final_total3.toFixed(2));
      jQuery('#final_total1').val(final_total3.toFixed(2));
      if (parseInt(total_price) == 0) {

        document.getElementById("shipping_cost").textContent = '$0.00';
        document.getElementById("gst").textContent = '$0.00';
        jQuery('.final_total').html('$0.00');
        jQuery('#final_total1').val(0);

      }
    }
    else {

      var gst = 0;
      sub_value = zip_code_value * weight_value;
      total_price = document.getElementById("total_value1").value;
      final_total1 = parseFloat(total_price) + parseFloat(sub_value);
      final_total2 = 0;

      final_total3 = parseFloat(final_total1) + parseFloat(final_total2)


      document.getElementById("shipping_cost").textContent = '$' + sub_value.toFixed(2);

      document.getElementById("shipping_cost1").value = sub_value.toFixed(2);
      document.getElementById("gst_value1").textContent = '$0.00';
      document.getElementById("gst").textContent = '$0.00';

      jQuery('.final_total').html('$' + final_total3.toFixed(2));
      jQuery('#final_total1').val(final_total3.toFixed(2));
      if (parseInt(total_price) == 0) {

        document.getElementById("shipping_cost").textContent = '$0.00';
        document.getElementById("gst").textContent = '$0.00';
        jQuery('.final_total').html('$0.00');
        jQuery('#final_total1').val(0);

      }

    }




  }
  else {
    if ($("#country option:selected").text() == 'Australia') {

      if (document.getElementById("shipping_cost")) {
        document.getElementById("shipping_cost").textContent = '$0.00';
        document.getElementById("shipping_cost1").value = 0.00;

        totalPrice = document.getElementById("total_value1").value;


        var gst = document.getElementById("gst_value").value;
        var shipping_cost1 = document.getElementById("shipping_cost1").value

        var totalPrice1 = parseFloat(totalPrice) + parseFloat(shipping_cost1)
        final_total = (parseFloat(totalPrice1) * parseFloat(gst) / 100);
        final_total1 = totalPrice1 + final_total

        document.getElementById("gst").textContent = '$' + final_total.toFixed(2)
        document.getElementById("gst_value1").value = final_total.toFixed(2)
        jQuery('.final_total').html('$' + final_total1.toFixed(2));
        jQuery('#final_total1').val(final_total1.toFixed(2));
      }
    }
    else {
      var gst = 0;
      sub_value = zip_code_value * weight_value;
      total_price = document.getElementById("total_value1").value;
      final_total1 = parseFloat(total_price) + parseFloat(sub_value);
      final_total2 = 0;

      final_total3 = parseFloat(final_total1) + parseFloat(final_total2)


      document.getElementById("shipping_cost").textContent = '$' + sub_value.toFixed(2);

      document.getElementById("shipping_cost1").value = sub_value.toFixed(2);
      document.getElementById("gst_value1").textContent = '$0.00';
      document.getElementById("gst").textContent = '$0.00';

      jQuery('.final_total').html('$' + final_total3.toFixed(2));
      jQuery('#final_total1').val(final_total3.toFixed(2));
      if (parseInt(total_price) == 0) {

        document.getElementById("shipping_cost").textContent = '$0.00';
        document.getElementById("gst").textContent = '$0.00';
        jQuery('.final_total').html('$0.00');
        jQuery('#final_total1').val(0);

      }
    }



  }




  //   document.getElementById("final_total").textContent = '$' + final_total1;
  jQuery(".checkoutbtn").removeAttr(`disabled`);
  //   document.getElementById('checkoutbtn').disabled = false;

}

function deliverychange() {
  if (document.getElementById("zipcode").value != '') {
    ziocodechange();
  }
  else {
    if (document.getElementById('ispickup1').checked) {
      // = '';
      // jQuery(".checkoutbtn").attr(`disabled`, true);

    }
    document.getElementById("address").required = true;
    document.getElementById("suburb").required = true;
    document.getElementById("state").required = true;
    document.getElementById("zipcode").required = true;

    totalPrice = document.getElementById("total_value1").value;
    if ($("#country option:selected").text() == 'Australia') {

      var gst = document.getElementById("gst_value").value;
    }
    else {

      var gst = 0;

    }

    var shipping_cost1 = document.getElementById("shipping_cost1").value
    var totalPrice1 = parseInt(totalPrice)
    final_total = (parseFloat(totalPrice1) * parseFloat(gst) / 100);
    final_total1 = totalPrice1 + final_total
    document.getElementById("gst").textContent = '$' + final_total.toFixed(2)
    document.getElementById("gst_value1").value = final_total.toFixed(2)
    jQuery('.final_total').html('$' + final_total1.toFixed(2));
    jQuery('#final_total1').val(final_total1.toFixed(2));

  }
}

function pickupchange() {
  totalPrice = document.getElementById("total_value1").value;

  var gst = document.getElementById("gst_value").value;

  var totalPrice1 = parseFloat(totalPrice)
  final_total = (parseFloat(totalPrice1) * parseFloat(gst) / 100);
  final_total1 = totalPrice1 + final_total
  document.getElementById("shipping_cost").textContent = '$0.00';

  document.getElementById("gst").textContent = '$' + final_total.toFixed(2)
  document.getElementById("gst_value1").value = final_total.toFixed(2)
  jQuery('.final_total').html('$' + final_total1.toFixed(2));
  jQuery('#final_total1').val(final_total1.toFixed(2));

}

function countrychange(country) {


  var x = (country.value || country.options[country.selectedIndex].value);  //crossbrowser solution =)


  if (x == 'Australia') {

    var gst = document.getElementById("gst_value").value;


    shipping_cost = document.getElementById("shipping_cost1").value;
    total_price = document.getElementById("total_value1").value;



    final_total2 = parseFloat(total_price) + parseFloat(shipping_cost)

    var final_total3 = (final_total2 * parseFloat(gst) / 100);

    final_total1 = final_total3 + final_total2


    document.getElementById("gst").textContent = '$' + final_total3.toFixed(2);
    document.getElementById("gst_value1").value = final_total3.toFixed(2)


    jQuery('.final_total').html('$' + final_total1.toFixed(2));
    jQuery('#final_total1').val(final_total1.toFixed(2));

    // document.getElementById("final_total").textContent = '$' + final_total1;

  }
  else {
    var gst = 0;

    document.getElementById("gst").textContent = '$' + gst.toFixed(2)
    total_price = document.getElementById("total_value1").value;
    shipping_cost = document.getElementById("shipping_cost1").value;
    final_total2 = parseFloat(total_price) + parseFloat(shipping_cost)
    document.getElementById("gst_value1").value = gst.toFixed(2)
    jQuery('.final_total').html('$' + final_total2.toFixed(2));
    jQuery('#final_total1').val(final_total2.toFixed(2));
    if (parseInt(total_price) == 0) {

      document.getElementById("shipping_cost").textContent = '$0.00';
      document.getElementById("gst").textContent = '$0.00';
      jQuery('.final_total').html('$0.00');
      jQuery('#final_total1').val(0);

    }


    // document.getElementById("final_total").textContent = '$' + final_total1;
  }


}
