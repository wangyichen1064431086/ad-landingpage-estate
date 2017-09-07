class Submit {
  constructor(elem) {
    if(elem instanceof HTMLElement) {
      this.elem = elem;
    } else {
      this.elem = document.getElementById(elem);
    }

    this.clickFunc = this.clickFunc.bind(this);

    this.elem.addEventListener("click",clickFunc,false);

  }

  clickFunc(event) {
    event.preventDefault();
    const dataCode = document.getElementById("submit").getAttribute("data-code");
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    

    if(name.length===0) {
				return alert("请输入姓名！");
    }
      
    if(mobile.length===0) {
      return alert("请输入手机号！");
    } else if(!/^1[0-9]{10}$/.test(mobile)) {
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

  }
}