var posts=["2025/04/25/欢迎进入我的网站！/","2025/04/26/Re-从零开始了解东方Project/","2025/04/26/如何修改海量广告的软件？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };