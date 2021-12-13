/*
 * @Author: your name
 * @Date: 2020-08-13 10:13:33
 * @LastEditTime: 2021-12-13 16:52:24
 * @LastEditors: 赵婷婷
 * @Description: In User Settings Edit
 * @FilePath:
 */
import LightingEditor from './editor';

LightingEditor.install = function (Vue) {
  Vue.component(LightingEditor.name, LightingEditor);
};
export default LightingEditor;
