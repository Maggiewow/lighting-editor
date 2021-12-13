function customUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new UploadAdapter(loader);
  };
}

let vue = {};
class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          // vue.$oss.uploadToOss(file).then(res => {
          //   resolve({default: res.url, ...res})
          // }).catch(error => {
          //   reject(error)
          // })
        })
    );
  }
  abort() {
    console.log('ckeditor: abort to insert image!');
  }
}
