# lighting-editor

闪电云编辑器

# test

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

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 经典版本

"@ckeditor/ckeditor5-build-classic": "^31.0.0",
"@ckeditor/ckeditor5-vue2": "^1.0.5",

### 从源代码使用 CKEditor

1. 配置依赖
   npm install --save @ckeditor/ckeditor5-vue2 @ckeditor/ckeditor5-dev-webpack-plugin @ckeditor/ckeditor5-dev-utils postcss-loader@3 raw-loader@0.5.1

2. 使用源代码编辑器
   所有包（不包括@ckeditor/ckeditor5-dev-\*和@ckeditor/ckeditor5-vue2）必须与基本编辑器包具有相同的版本

### 待处理

1. 包重复问题 SourceEditing 源码展示 (水平线和源码编辑依赖包报错)
2. 纯文本粘贴 ctrl+shift+v (ck4 有这个功能)
3. 行间距 line height
4. 一键排版 custom
5. 格式刷 (ck4 有这个功能) Copy Formatting https://ckeditor.com/docs/ckeditor4/latest/examples/copyformatting.html

   自动保存 @ckeditor/ckeditor5-autosave

需要自定义插件
npm install --save @ckeditor/ckeditor5-image @ckeditor/ckeditor5-core @ckeditor/ckeditor5-ui @ckeditor/ckeditor5-engine
