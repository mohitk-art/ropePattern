<html>

<head>
    <meta http-equiv="Content-Type" content="svg/xml" />

    <!--<link rel="stylesheet" href="./emailTemplatestyle.css" />-->
</head>

<body class="bgColor" style="font-family: Arial, Helvetica, sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 22px;
width: 600px;margin: auto;
">
    <div class="container" style="
    padding: 5px;
    background-color:#fff;border-radius: 10px;border:1px solid #000">
        <div class="text-center mb-3" style="text-align: center;margin-bottom: 10px;">
            <img src="http://ropedesigner.custombraid.net/public/frontend/assets/img/customlogo.png"
                style="max-width: 150px;" class="logo" />
        </div>

        <p style="margin-top:0;margin-bottom:10px"> Hello {{$first_name}}, <br />
            Thank you for the order. We will confirm acceptance shortly.

            <br />
            Regards, Custom Braid
            
        
        </p> 

        <div style="font-weight: 600;font-size:12px;">CONTACT INFORMATION</div>

        <table style="width: 100%;font-size:10px;line-height: 15px;text-align: left;">
            <tr>
                
                
                <th style="width: 40px;">Name</th>
                <td>{{$first_name}} {{$last_name}} </td>
                
                <th style="width: 75px;">Phone</th>
                 <td>{{$phone_number}}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{{$email}}</td>
                <th>Pickup/Delivery</th>
                <td>{{$ispickup}}</td>
                
            </tr>
            <tr>
              
                <th>{{isset($address)? 'Street' : ''}}</th>
                <td>{{$address}}</td>
          
                <th>{{isset($suburb)? 'Suburb' : ''}} </th>
                <td>{{$suburb}}</td>
            </tr>
            
            <tr>  
                <th>{{isset($state)? 'State' : ''}}</th>
                <td>{{$state}}</td>

                <th>{{isset($zipcode)? 'Post Code' : ''}}</th>
                <td>{{$zipcode}}</td>
            </tr>
            
            <tr>
                <th>Country</th>
                <td>{{$country}}</td>
            </tr>
            
        </table>
        

        <div class="card" style="background-color: #dedede;">
            <?php
     $i=0;
            	foreach(json_decode($cart_items) as $key => $cart_item)
            	{
               
                    $color=array();
                	foreach($cart_item->color as $key => $colors)
                	{
                	    $color[]=$colors->value;
                	}
                	
                	
                	
                	
                /*	$img =  $cart_item->fillimage;
                	$svghtml = $cart_item->svghtml;
            
                   
                     $img = str_replace('data:image/png;base64,', '', $img);
                     $img = str_replace(' ', '+', $img);
                     $data = base64_decode($img);
                    
                     $newFileName = $i.'_'.time().'.png';
                     $file = 'images/'.$newFileName;
                    
                     $success = file_put_contents($file, $data);
                  $success ? $file : 'Unable to save the file.';	*/
                	
                  
                    ?>
            <span class="d-inline-block" style="width: 50%;margin-top: 15px;display:inline-block;float:left;">
                <table style="width:100%;font-size:12px;line-height: 22px;font-weight: 500;">
                    <tr>
                        <td style="width: 85px;vertical-align: top;">
                           <img src="{{asset($images[$i]) }}" style="width:100%" />
                        </td>

                        <td style="font-weight: inherit;vertical-align: top;font-size: 10px;
    line-height: 15px;
    font-weight: 600;">
                            <b><?php  echo $cart_item->title; ?></b>
                            <div>Price: <?php  echo '$'.$cart_item->price; ?></div>
                            <div>Size: <?php  echo $cart_item->size; ?></div>
                            <div>Weight: <?php  echo $cart_item->weight.'kg'; ?></div>
                            
                            <div style="font-size: 10px;
    line-height: 15px;font-weight: 600;">Colours: <?php  echo implode(" ,",$color); ?> </div>
                         
                            <div>Length: <?php echo $cart_item->length1; ?></div>
                            
                          
                            <div style="min-height: 60px;
                            border-radius: 3px;
                            padding: 6px;
                            margin-top: 10px;
                            background-color: #fff;
                            border: 1px solid #dedede;"><?php echo $cart_item->comment; ?></div>
                            
                          
                        </td>
                    </tr>
                </table>
            </span>
       
	      <?php  
	      
            	    
            	    $i++;
            	}
	       
            		
         ?>
            <table style="clear: both;"></table>
        </div>


        <table class="priceItems"
            style="width: 298px;font-size: 12px;line-height: 22px;margin-top: 10px;text-align: left;">
            <tr>
   
                <th>Subtotal</th>
                <td style="text-align: right;">${{$total_value1}}</td>
            </tr>
            <tr>
                <th>Freight</th>
                <td style="text-align: right;">${{$shipping_cost1}}</td>
            </tr>
            <tr>
                <th>GST</th>
                <td style="text-align: right;">${{$gst_value1}}</td>
            </tr>
            <tr>
                <th>TOTAL</th>
                <td style="text-align: right;">${{$final_total1}}</td>
            </tr>
           
          
        </table>
    </div>

</body>

</html>