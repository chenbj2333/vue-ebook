# vue-ebook

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### web字体
1 存放在public/fonts中
2 存放在src/assets/fonts中

### 自适应 使用rem

### vuex远程调试工具vue-devtools
github中查找使用方法

### nginx
开启 nginx
关闭 nginx -s stop
重新加载 nginx -s reload
访问地址：nginx.conf中http模块对应的server地址
- 自己创建一个server
```
http {
  server {
    listen       9000;
    server_name  resource;
    root F:/nginx-1.14.2/resource;
    autoindex on;
    location / {
        add_header Access-Control-Allow-Origin *;
    }
    add_header Cache-Control "no-cache, must-revalidate";
  }
}
```
