var posts=["2025/04/26/一个步骤使你在hexo-d后不再打开网页/","2025/04/26/Re-从零开始了解东方Project/","2025/04/26/如何修改海量广告的软件？/","2025/04/25/欢迎进入我的网站！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };