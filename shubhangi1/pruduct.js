function SaveProduct() { 
    var url = 'http://localhost:8080/productwebservice/webresources/product/insert';
    var objectProduct = {};
    objectProduct.Id = $('#textProductId').val();
    objectProduct.Name = $('#textProductName').val();
    objectProduct.Price = $('#textProductPrice').val();
    objectProduct.Active = 1;
    if (objectProduct) {
        $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            data: JSON.stringify(objectProduct),
            type:"Post",
            success: function(result){
                alert(result);
            },
            error: function (msg){
                alert(msg);

            }   
        
        });

    }     
}