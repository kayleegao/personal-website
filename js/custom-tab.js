$(document).ready(function() {
    console.log("document ready");
  
    const labels = document.querySelectorAll(".accordion-item__label");
    const tabs = document.querySelectorAll(".accordion-tab");
  
    function toggleShow() {
      const target = this;
      const item = target.classList.contains("accordion-tab")
        ? target
        : target.parentElement;
      const group = item.dataset.actabGroup;
      const id = item.dataset.actabId;
  
      tabs.forEach(function(tab) {
        if (tab.dataset.actabGroup === group) {
          if (tab.dataset.actabId === id) {
            tab.classList.add("accordion-active");
          } else {
            tab.classList.remove("accordion-active");
          }
        }
      });
  
      labels.forEach(function(label) {
        const tabItem = label.parentElement;
  
        if (tabItem.dataset.actabGroup === group) {
          if (tabItem.dataset.actabId === id) {
            tabItem.classList.add("accordion-active");
          } else {
            tabItem.classList.remove("accordion-active");
          }
        }
      });
    }
  
    labels.forEach(function(label) {
      label.addEventListener("click", toggleShow);
    });
  
    tabs.forEach(function(tab) {
      tab.addEventListener("click", toggleShow);
    });
  
  });



  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();



try {
  fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
    return true;
  }).catch(function(e) {
    var carbonScript = document.createElement("script");
    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
    carbonScript.id = "_carbonads_js";
    document.getElementById("carbon-block").appendChild(carbonScript);
  });
} catch (error) {
  console.log(error);
}