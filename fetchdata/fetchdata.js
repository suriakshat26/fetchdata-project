function fetch(){
  $('.messages').empty();
  let id=$('.inp').val();
  $.ajax({
    url:`https://dummyjson.com/products/${id}`,
    type:"GET",
    dataType:"JSON",
    data:JSON.stringify({ }),
    success:function(data){
      $('.messages').append("<li>Id : "+JSON.stringify(data.id)+"</li>"+"<li>Name : "+JSON.stringify(data.title)+"</li>"+"</li>"+"<li>Price : "+JSON.stringify(data.price)+"</li>")
    }

  });

}