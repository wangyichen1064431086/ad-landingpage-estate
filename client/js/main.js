$("#submit").on("click", function(event) {
  event.preventDefault();
  const dataCode=$(this).attr("data-code");
  const name=$.trim($("#name").val());
  const phone=$.trim($("#phone").val());

  if(name.length===0){
    return alert("请输入姓名！");
  }
  if(phone.length===0){
    return alert("请输入手机号！");
  }else if(!/^1[0-9]{10}$/.test(phone)){
    return alert("请输入正确的手机号！");
  }

  const postData = {
    head: {
      transactiontype: "20008"
    },
    body: {
      ielement: {
        cid: dataCode,
        mod1: name,
        mod2: phone
      }
    }
  }

  $.ajax({
    url:"/eaclient/apijson.php",
    type:"post",
    processData:false,
    data:JSON.stringify(postData),
    dataType:"json"
  }).done(function(a) {//参见 http://api.jquery.com/deferred.done/，a为返回的数据，相当于xhr.responseText
            alert("提交成功！");
            $("#submit").attr("disabled", true); 
  }).fail(function(e, a) {
    alert("提交失败，请重新提交！")
  }).always(function() {
    console.log("complete");
  });
});