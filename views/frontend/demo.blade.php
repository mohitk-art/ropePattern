@extends('frontend_layouts.app')
@section('content')

<script>
    localStorage.clear();
</script>

<style>

#previewImg{
 display:none;   
}
    .Shippingprice{
        margin-left:auto;
    }
    
    .toast{
        min-width:300px;
        color:#fff;
    }
    
    .toast .close{
        color:#fff;
    }
    
    .toast-header{
        background-color:transparent;
        color:#fff;
    }
    
    .toast-header > span{
        width:100%;
        text-align:center;
    }
    
     .toast-header > .close{
        display:none;
    }
    
    .instruction_tab{
        text-align:left;
        margin-top: 15px;
        margin-right:8px;
        margin-bottom:0;
    }
    
    
    .instruction_tab ul{
        padding-left:18px;
        margin-bottom:0;
    }
    
</style>


<div class="ropeDetailTable d-none">
    	@foreach($ropedetails as $key => $ropedetail)
    	<div size="{{$ropedetail->size}}" length="{{$ropedetail->length}}" weight="{{$ropedetail->weight}}" price="{{$ropedetail->price}}"></div>
    	@endforeach
</div>


<div class="d-none hiddenRopes">
        <!--Start main pattern tabs-->
        <?php  $tabindex = 1; ?>
        @isset($rope)
		@foreach($rope as $key => $get_rope)
                    
        
                
                
            
            
                        <!--Pattern {{$tabindex}}-->
                      @foreach($get_rope['template'] as $key => $child_pattern)
                             
                		<?php
        			        $template_pattern = $child_pattern['template_pattern'];
        				?>
	    
                   
                            <div  class="child_{{$tabindex}}_{{$child_pattern['id']}}">
                    					 <?php
                    			
                    					 $sample_template_name=$get_rope['sample_template_name'];
                    		            $templatename=file_get_contents('upload/templates/'.$sample_template_name);
                    	                 echo $template = str_replace('data', $child_pattern['template_text'], $templatename);
                    						
                    					?>
                    					
                    		    </div>
                    		    
                    		    <h1 class="rope_title">{{$child_pattern['title']??''}}</h1>
                    		    
                    		    <div class="rope_sizeJS">{{$child_pattern['size']??''}}</div>
                    		    <img src="{{asset('upload/images/'.$child_pattern['image']) }}" class="tamplateImageJS" />
                    		    
                    		</div>
                          
                          @endforeach
      
    
    <?php  $tabindex++; ?>
    @endforeach
    @endisset
    
    <!--end mian pattern tabs-->
    </div>





 <section class="main_wrapper">

    <div class="container">
      <div class="row">
        <div class="col-md-7 mb-3">
    
    <div class="row_box_wrapper text-center">
        
        <div class="position-relative">
            
        
            <div class="text-center mb-3 logo_wrapper">
               <a href="http://www.custombraid.com"><img src="{{asset('/frontend/assets/img/customlogo.png')}}" class="logo_img" /></a> 
            </div>
         
        
        <div class="d-flex">
        <!--Size Slider-->
        <div class="vSliderWrapper">
          <h6>Size</h6>
          <div class="vertical__long_crousel verticle_slider verticle_size_slider mx-auto">
            <!--  	@foreach($ropedetails as $key => $ropedetail)-->
            <!--<div class="number_slider">-->
            <!--  <span class="number_sliderJS" onClick="SizeJs({{$ropedetail->size}})" title="{{$ropedetail->size}}">{{$ropedetail->size}}</span>-->
            <!--</div>-->
            <!--@endforeach-->
            
            
            <!--<div class="number_slider">-->
            <!--  <span class="number_sliderJS" onClick="SizeJs(6)" title="6">6</span>-->
            <!--</div>-->
            
          </div>
        </div>
        
        
        <div class="vSliderWrapper sub_pattern_nav sub_pattern_crousel">
              <h6>Pattern</h6>
              <div class="vertical__pattren_crousel verticle_slider">
                <!--<div class="pattren_slider">-->
                <!--  <img src="./assets/img/ropep1.png" class="pattren_sliderJS" title="child_2_190"-->
                <!--    onClick="loadIndex('child_2_190')" />-->
                <!--</div>-->
              </div>
        </div>
        
        
    
        
        
        <!--Color Slider-->
         <div class="vSliderWrapper">
          <h6 class="text-center">Colour</h6>
          <div class="vertical__long_crousel vertical__color_crousel verticle_slider">
         
          @foreach($colors as $key => $color)
            <div class="color_slider">
              <span style="background-color: {{$color->code}};" data-toggle="tooltip" data-placement="left"  onclick="ColorJs('{{$color->code}}')" class="color_sliderJS" code="{{$color->code}}" number="{{$color->number}}"  title="{{$color->	company_color_name}}"></span>
            </div>
            
            @endforeach
            
          </div>
          
        </div>
        </div>
        
        
        <div class="alert alert-primary instruction_tab">
          <h5>Instructions</h5>
          <ul>
              <li>Pick Size</li>
              <li>Pick Pattern</li>
              <li>Pick Colour</li>
              <li>Tap rope to Insert</li>
          </ul>
        </div>
        
        <div class="text-left">
        
        <button class="btn btn-primary mobile_btn addtocartBtn" type="button" id="addtocartBtn" onclick="addToCart()">Add To Cart</button>
        </div>
        
        </div>
        <div class="w-100 text-left">
        <div class="svg_wrapper d-none" size="6" color="#fff" length="100" id="svg_wrapper">
          <svg viewBox="0 0 1471.5 7590" class="main_svg">
                <svg class="svg_inner"></svg>
              </svg>
        </div>
        
        
        <button class="btn btn-primary desk_btn mx-2 addtocartBtn" type="button" id="addtocartBtn" onclick="addToCart()">Add To Cart</button>
        
    
        </div>
    
        
    </div>
    
    
    </div>

        <div class="col-md-5 right_bg right_sidebar">
                    <div class="error" id="error" style="display:none;color:red"></div>

               @if (session('success'))
                <!--<div class="alert alert-success mb-3">-->
                <!--    {{ session('success') }}-->
                <!--</div>-->
        
                 @endif
                 
                 
            <form action="{{ route("checkout") }}" method="POST" id="checkoutForm">
            @csrf 
          <div class="mb-3 d-none">
            <section class="qty_input mr-2">
              <i class="fa fa-minus qty_minus"></i>
              <input type="text" readonly id="qty_value" value="1" />
              <i class="fa fa-plus qty_plus"></i>
            </section>
          </div>
          
          
          <div class="form-row">
              
            
              <div class="col-md-12">
                 <h5>Contact information</h5>
            
                <div class="form-row mb-3 contactInfoForm">
                <div class="col-6 mb-2">
                    <input type="text" name="first_name" placeholder="Name" id="full_name" class="form-control"  id="full_name" required />
                  </div>
                  
                  <div class="col-6 mb-2">
                    <input type="number" name="phone_number" placeholder="Phone" id="phone_number" class="form-control" required />
                  </div>
                  
                  
                  <div class="col-6 mb-2">
                        <input type="email" class="form-control" placeholder="Email" id="email" name="email" required />
                  </div>
                  
                  <div class="col-6">
                      <div class="mt-1">
                      <label class="mr-2"><input type="radio" class="pickupbtnJS" value="pickup" name="ispickup"  onchange="pickupchange()" checked />
                      Pick up</label>
                      
                <label class="mr-2"><input type="radio" class="pickupbtnJS"  onchange="deliverychange()"  id="ispickup1" value="delivery" name="ispickup" />
                      Delivery</label>
                      </div>
                  </div>
                  
                    <div class="col-md-12">

                <div class="form-row d-none" id="shippingBody">
                
                <!--<div class="col-6 mb-2">-->
                <!--      <input type="text" placeholder="Street"  name="street" id="street" class="form-control" />-->
                <!--</div>-->
                
                  <div class="col-6 mb-2">
                    <input type="text" placeholder="Street" name="address" id="address" class="form-control" />
                  </div>
                
                <div class="col-6 mb-2">
                      <input type="text" placeholder="Suburb"  name="suburb" id="suburb" class="form-control" />
                </div>
                
                
                <div class="col-4">
                      <input type="text" placeholder="State"  name="state" id="state" class="form-control" />
                </div>
                
                 <div class="col-4">
                
                    <input type="text" placeholder="Post Code"  name="zipcode" id="zipcode" class="form-control" onchange="ziocodechange()" />
                 </div>
                 
                 
                 <div class="col-4">
                    <select id="country"  name="country" placeholder="Country" class="form-control countryDropdownJS" onchange="countrychange(this)" required>
                       
                    </select>
                  </div>
           
                  <textarea id="cart_items" name="cart_items[]" class="form-control d-none"></textarea>

                     <input type="hidden" id="cart_items1" name="cart_items1" class="form-control" >
                   @foreach($ranges as $key => $range)
                     <input type="hidden" id="00to20" name="00to20" class="form-control" value="{{  (isset($range) ? $range->{'00to20'} : '') }}" required>
                     <input type="hidden" id="20to30" name="20to30" class="form-control" value="{{  (isset($range) ? $range->{'20to30'} : '') }}" required>
                     <input type="hidden" id="40to50" name="40to50" class="form-control" value="{{  (isset($range) ? $range->{'40to50'} : '') }}" required>
                     <input type="hidden" id="40to50" name="40to50" class="form-control" value="{{  (isset($range) ? $range->{'40to50'} : '') }}" required>
                     <input type="hidden" id="60to70" name="60to70" class="form-control" value="{{  (isset($range) ? $range->{'60to70'} : '') }}" required>
                      <input type="hidden" id="70to80" name="70to80" class="form-control" value="{{  (isset($range) ? $range{'70to80'} : '') }}" required>
                       <input type="hidden" id="80to-90" name="80to90" class="form-control" value="{{  (isset($range) ? $range->{'80to90'} : '') }}" required>
                    <input type="hidden" id="90to100" name="90to100" class="form-control" value="{{  (isset($range) ? $range->{'90to100'} : '') }}" required>
                    <input type="hidden" id="100to120" name="100to120" class="form-control" value="{{  (isset($range) ? $range->{'100to120'} : '') }}" required>
                    <input type="hidden" id="120to140" name="120to140" class="form-control" value="{{  (isset($range) ? $range->{'120to140'} : '') }}" required>
                    <input type="hidden" id="140to160" name="140to160" class="form-control" value="{{  (isset($range) ? $range->{'140to160'} : '') }}" required>
                    
                     <input type="hidden" id="160to200" name="160to200" class="form-control" value="{{  (isset($range) ? $range->{'160to200'} : '') }}" required>
                     <input type="hidden" id="200to400" name="200to400" class="form-control" value="{{  (isset($range) ? $range->{'200to400'} : '') }}" required>
                     	@endforeach
                     	  <input type="hidden" id="gst_value" name="gst_value" class="form-control" value="{{  (isset($gst) ? $gst[0]->gst_value : 0) }}" required>
                     	    <input type="hidden" id="total_value1" name="total_value1" class="form-control" value="" required>
                     	       <input type="hidden" id="shipping_cost1" name="shipping_cost1" class="form-control" value="0.00" required>
                     	             	  <input type="hidden" id="gst_value1" name="gst_value1" class="form-control" value="0" required>
                     	             	    <input type="hidden" id="final_total1" name="final_total1" class="form-control" value="0" required>
                     	       
                     	    
                </div>
              </div>
                  
                  
                  
                  
                  </div>
              </div>

              
            </div>



          <div class="cart_bar">
            <h4 class="mb-0">Cart (<span id="cartLength"></span>)</h4>

            <hr />
            <div class="card_item_row">
              <div class="card_row" id="cart_row"></div>

            </div>
           
            <div class="price_item">
              <b>Subtotal</b>
              <span id="total_price"></span>
            </div>

            <div class="price_item">
              <b>Freight </b>
              <span id ="shipping_cost">$0.00</span>
            </div>
            
            <div class="gst price_item">
              <b>GST</b>
              <span id="gst"></span>
            </div>

            <hr class="mb-2" />
            
            <div class="price_item total_item">
              <b>Total</b>
              <span class="final_total"></span>
            </div>

            <!-- <button class="btn btn-primary w-100" id="checkoutbtn" disabled>Checkout</button> -->
            
            <!--<button type="submit" class="d-none btn btn-primary" id="checkoutbtnsubmit">Place Order</button>-->
            
                <button type="submit" class="btn btn-primary checkoutbtn" id="checkoutbtn">Place Order</button>
           

          </div>
          
         </form>
        </div>
        
      </div>
    </div>


  </section>
    

<div class="position-fixed" style="z-index: 999999; left: 50%; top: 85px;transform:translateX(-50%)">
  <div id="liveToast" class="toast hide bg-warning" role="alert" aria-live="assertive" aria-atomic="true" data-delay="3000">
    <div class="toast-header">
      <!--<img src="..." class="rounded mr-2" alt="...">-->
      <span class="mr-auto">The rope is not fully coloured</span>
      <!--<small>11 mins ago</small>-->
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!--<div class="toast-body">-->
    <!--  All the rope is not fully coloured-->
    <!--</div>-->
  </div>
  
  
 
                  
             @if (session('success'))
  
                 <div id="placeOrder" class="toast fade show bg-success" role="alert" aria-live="assertive" aria-atomic="true" data-delay="3000">
                    <div class="toast-header">
                      <!--<img src="..." class="rounded mr-2" alt="...">-->
                      <span class="mr-auto">Order Placed Successfully</span>
                      <!--<small>11 mins ago</small>-->
                      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <!--<div class="toast-body">-->
                    <!--  All the rope is not fully coloured-->
                    <!--</div>-->
                  </div>
        
                
                @endif
  
  
  <div id="cartToast" class="toast hide bg-warning" role="alert" aria-live="assertive" aria-atomic="true" data-delay="3000">
    <div class="toast-header">
      <!--<img src="..." class="rounded mr-2" alt="...">-->
      <span class="mr-auto">Please add Rope on Cart</span>
      <!--<small>11 mins ago</small>-->
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!--<div class="toast-body">-->
    <!--  All the rope is not fully coloured-->
    <!--</div>-->
  </div>
</div>
        
        
	
  
@endsection
@section('scripts')

<script>

jQuery(".pattren_sliderJS:not(.active)").click(function(){
  jQuery('.addtocartBtn').removeAttr('disabled')
});


jQuery(".toast .close").click(function(){
  $('.toast').toast('hide')
});


$('[data-toggle="tooltip"]').mouseenter(function(){
    var that = $(this)
    that.tooltip('show');
    setTimeout(function(){
        that.tooltip('hide');
    }, 1500);
});

$('[data-toggle="tooltip"]').click(function(){
    var that = $(this)
    that.tooltip('show');
    setTimeout(function(){
        that.tooltip('hide');
    }, 1500);
});



setTimeout(function(){
        $('#placeOrder').toast('hide')
    }, 6000);
</script>
@endsection 