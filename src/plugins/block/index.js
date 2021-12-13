/*
 * @文件描述:
 * @公司: 广电信通
 * @作者: 赵婷婷
 * @Date: 2021-11-18 16:47:53
 * @LastEditors: 赵婷婷
 * @LastEditTime: 2021-11-19 15:22:52
 */
import blockedit from './blockedit';
import blockui from './blockui';
// 插件类，创建插件必须基于这个类扩展
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
// 实例化一个类，然后导出
export default class Block extends Plugin {
  static get requires() {
    return [blockedit, blockui];
  }
}
