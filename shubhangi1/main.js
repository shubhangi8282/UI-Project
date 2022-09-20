$(function(){

    var $products = $('#products');
    var $id = $('#id');
    var $name = $('#name');
    var $price = $('#price');

    var productTemplate =$('#product-template').html();

    /*function addProduct(product) {
        $products.append('<li>name: '+ newProduct.name +', price: '+newProduct.price + '</li>');
    }*/

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/productwebservice/webresources/product/Products',
        success: function(products) {
        console.log(products);
           $.each(products.product, function(i, product){
                $products.append ('<li> id: '+ product.id +', name: ' + product.name +', price: '+ product.price + '</li>');
            });
        },
        error: function(){
            alert('error loading products');
        }
    });

    function saveProduct()

{

    $('#fashion').empty();

   

    var url = "http://localhost:8080/productwebservice/webresources/product/insert";

    var objectProduct = {};

    objectProduct.id = $('#id').val();

    objectProduct.type = $('#name').val();

    objectProduct.price = $('#price').val();

    if(objectProduct){

        $.ajax({

            url: url,

            contentType:"application/json; charset=utf-8",

            dataType: "json",

            data: JSON.stringify(objectProduct),

            // headers: {

            //     "Access-Control-Allow-Origin": "*",

            //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"

            //   },

            type: "POST",

            success: function(result){

                //getProduct();
                alert("Hi mate, product has been inserted");
            },

            error: function(msg){

                alert(msg);

            }

        });



    }

}



    // $('#add-product').on('click',function() {

    //     var product = {
    //         id : $id.val(),
    //         name: $name.val(),
    //         price: $price.val(),
    //     };

    //     $.ajax({
    //         //contentType: "application/json; charset=utf-8",
    //         type: 'POST',
    //         url: 'http://localhost:8080/productwebservice/webresources/product/insert',
    //         data: product,
    //         success: function(newProduct) {
    //             $products.append('<li>id: '+ newProduct.id +', name: '+ newProduct.name +', price: '+newProduct.price + '</li>');
    //             //$products.append('<li>id: '+ newProduct.id +', price: '+newProduct.price + '</li>');
    //         },
    //         error: function() {
    //             alert('error saving product');
    //         }
    //     });
    // });

    $('#delete').on('click',function()

    {
        deleteProduct()
    });

    function  deleteProduct(){

        var pid =  document.getElementById("deleteproduct").value;
    
        console.log(pid);
    
        $.ajax({
    
                type: 'DELETE',
    
                url : 'http://localhost:8080/productwebservice/webresources/product/delete/'+pid,
    
                success: alert("product deleted"+pid)
    
            });
    
        }
    
});