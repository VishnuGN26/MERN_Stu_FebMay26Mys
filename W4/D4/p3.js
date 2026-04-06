const out = document.getElementById("out");
const detectBtn = document.getElementById("detectBtn");

detectBtn.addEventListener("click",function(){
    const locale = document.getElementById("locale").value;
    const amount = 123456.78;
    const now = new Date();
    const data = { 
        locale,
        number: new Intl.NumberFormat(locale).format(amount),usd: new Intl.NumberFormat(locale,{style: "currency",currency:"USD"})
        .format(amount),
        usd: new Intl.NumberFormat(locale,{style: "currency",currency:"USD"})
        .format(amount),
        dateTime: new Intl.DateTimeFormat(locale,{dateStyle:"full",timeStyle:"short"}).format(now)
    };
 console.log(data);
 out.textContent = JSON.stringify(data,null,2);
});