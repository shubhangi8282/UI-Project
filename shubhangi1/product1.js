$(function(){

    var $products = $('#products');
    var $id = $('#id');
    var $name = $('#name');
    var $price = $('#price');

    $.ajax({

        type: 'GET',
        url: 'http://localhost:8080/productwebservice/webresources/product/Products',
        success: function(product) {
        console.log(product);
           $.each(product.product, function(i,product){
                $products.append ('<li> id: ' + product.id +', name: '+ product.name + ', price: ' +product.price +'  </li>');
            });
        },
        error: function(){
            alert('Please try again');
        }
    });


$('#add-product').on('click',function()
   {       
        producti()
    });    
function producti()

{
    

    var url = "http://localhost:8080/productwebservice/webresources/product/insert";

    var producti = {};

    producti.id = $('#id').val();

    producti.name = $('#name').val();

    producti.price = $('#price').val();

    if(producti){

        $.ajax({

            url: url,

            contentType:"application/json; charset=utf-8",

            dataType: "json",

            data: JSON.stringify(producti),

            type: "POST",

            success: function(result){

                //getProduct();

               

                alert("Product added");

            },

            error: function(msg){

                alert(msg);

            }

        });

    }

}

$('#update-product').on('click',function()
{       
     update()
 });
function update()

{

   
    var url = "http://localhost:8080/productwebservice/webresources/product/update";

    var producti = {};

    producti.id = $('#editid').val();

    producti.name = $('#editname').val();

    if(producti){

        $.ajax({

            url: url,

            contentType:"application/json; charset=utf-8",

            dataType: "json",

            data: JSON.stringify(producti),

            type: "PUT",

            success: function(result){

                //getProduct();

               

                alert("product updated");

            },

            error: function(msg){

                alert(msg);

            }

        });

    }

}
  
    $('#delete').on('click',function()
   {       
        deleteproduct()
    });
    function  deleteproduct(){
        var qid =  document.getElementById("deleteproduct").value;
        console.log(qid);
        $.ajax({
                type: 'DELETE',
                url : 'http://localhost:8080/productwebservice/webresources/product/delete/'+qid,
                success: alert("product deleted \n"+qid)
            });
        }
        
        });