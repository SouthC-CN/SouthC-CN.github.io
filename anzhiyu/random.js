var posts=["2025/04/26/Re-从零开始了解东方Project/","2025/04/26/如何去除软件中的广告？/","2025/04/25/欢迎进入我的网站！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };