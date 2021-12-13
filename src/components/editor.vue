<!--
 * @文件描述: 源代码版本的
 * @公司: 广电信通
 * @作者: 赵婷婷
 * 1. 包重复问题 SourceEditing源码展示
 * 2. 字数统计
 * 3. 纯文本粘贴
 * 4. 行间距
 * 5. 一键排版
 * 4. 格式刷
 * @Date: 2021-11-11 10:26:39
 * @LastEditors: 赵婷婷
 * @LastEditTime: 2021-12-13 16:51:23
-->
<template>
  <div class="editor-wrapper">
    <p>ckeditor5编辑器</p>

    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
      placeholder="请输入内容..."
      @ready="onReady"
    ></ckeditor>
    <div id="word-count" class="word-num"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue2';
Vue.use(CKEditor);

import { Default_Data } from '../libs/constant';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
// Import translations for the German language.
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';

// plugins
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
// import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
// import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
// import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';

import Block from '../plugins/block';
import Broadcast from '../plugins/broadcast';
import Introduction from '../plugins/introduction';
import Paralanguage from '../plugins/paralanguage';

export default {
  name: 'lighting-editor',
  data() {
    let that = this;
    return {
      editor: ClassicEditor,
      editorContent: null,
      editorData: Default_Data,
      editorConfig: {
        placeholder: '请输入...',
        // mode: 'source',
        // enterMode: CKEDITOR.ENTER_BR, // CKEDITOR.ENTER_BR | CKEDITOR.ENTER_DIV
        extraPlugins: [],
        plugins: [
          Alignment,
          // Autoformat,
          Autosave,
          AutoImage,
          // Autosave,
          BlockQuote,
          Bold,
          CKFinderUploadAdapter,
          CloudServices,
          Essentials,
          FindAndReplace,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          GeneralHtmlSupport,
          Heading,
          Highlight,
          // HorizontalLine,
          Image,
          ImageCaption,
          ImageInsert,
          ImageResize,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          Indent,
          Italic,
          Link,
          List,
          MediaEmbed,
          Paragraph,
          PasteFromOffice,
          RemoveFormat,
          // SourceEditing,
          Strikethrough,
          Subscript,
          Superscript,
          Table,
          TableToolbar,
          TextTransformation,
          Underline,
          WordCount,
          Block,
          Broadcast,
          Introduction,
          Paralanguage,
        ],
        toolbar: {
          items: [
            // 'sourceEditing',
            'undo',
            'redo',
            '|',
            'heading',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'fontColor',
            'fontBackgroundColor',
            'highlight',
            'fontFamily',
            'fontSize',
            'removeFormat',
            'findAndReplace',
            '|',
            'superscript',
            'subscript',
            'blockQuote',
            // 'horizontalLine',
            'bulletedList',
            'numberedList',
            // '-',
            // '|',
            'alignment:left',
            'alignment:right',
            'alignment:center',
            'alignment:justify',
            '|',
            'outdent',
            'indent',
            // 'autoformat',
            '|',
            'imageUpload',
            'imageInsert',
            'mediaEmbed',
            'link',
            'insertTable',
            '|',
            'paralanguage',
            'introduction',
            'broadcast',
            'block',
          ],
          shouldNotGroupWhenFull: true,
        },
        language: 'zh-cn',
        heading: {
          options: [
            { model: 'paragraph', title: '正文', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: '标题1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: '标题2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: '标题3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: '标题4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: '标题5', class: 'ck-heading_heading5' },
          ],
        },
        fontFamily: {
          options: [
            // 'default',
            '宋体,SimSun',
            '微软雅黑,Microsoft YaHei',
            '楷体,楷体_GB2312, SimKai',
            '黑体, SimHei',
            '隶书, SimLi',
            'andale mono',
            'arial, helvetica,sans-serif',
            'arial black,avant garde',
            'comic sans ms',
            'impact,chicago',
            'times new roman',
          ],
        },
        fontSize: {
          options: ['default', 10, 11, 12, 14, 16, 18, 20, 24, 36],
          supportAllValues: true,
        },
        image: {
          toolbar: [
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
          ],
        },
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
        },
        autosave: {
          waitingTime: 20 * 1000,
          save(editor) {
            return that.saveData(editor.getData());
          },
        },
      },
    };
  },
  mounted() {},
  methods: {
    saveData(data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('自动保存', !!data);

          resolve();
        }, 500);
      });
    },
    onReady(editor) {
      this.editorContent = editor;
      // 字数
      console.log('editor.plugins', editor.plugins);
      const wordCountPlugin = editor.plugins.get('WordCount');
      const wordCountWrapper = document.getElementById('word-count');
      wordCountWrapper.appendChild(wordCountPlugin.wordCountContainer);

      document.getElementsByClassName('ck-word-count__words')[0].innerText = '';
    },
  },
};
</script>
<style lang="scss" scoped>
.editor-wrapper {
  margin: 0 auto;
  width: 800px;
  .ck-editor {
    height: 400px;
  }
  .word-num {
    padding: 5px 0;
    text-align: right;
  }
}
</style>
