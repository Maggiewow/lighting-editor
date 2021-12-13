/*
 * @文件描述:
 * @公司: 广电信通
 * @作者: 赵婷婷
 * @Date: 2021-11-18 16:59:45
 * @LastEditors: 赵婷婷
 * @LastEditTime: 2021-11-19 14:30:20
 */
import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertSimpleBoxCommand extends Command {
  // 执行命令会调这个函数
  execute() {
    this.editor.model.change((writer) => {
      // 模型里面插入
      // 文档：https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_model-Model.html
      this.editor.model.insertContent(createSimpleBox(writer));
    });
  }
  // 关于这个事件和上面事件或更多，查看文档：https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_documentselection-DocumentSelection.html
  refresh() {
    const model = this.editor.model;
    const selection = model.document.selection;
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'introductionEdit'
    );

    this.isEnabled = allowedIn !== null;
  }
}

function createSimpleBox(writer) {
  const introductionEdit = writer.createElement('introductionEdit');
  const introLabel = writer.createElement('introLabel');
  writer.insertText('【导语】', writer.createPositionAt(introLabel, 0));
  writer.append(introLabel, introductionEdit);

  return introductionEdit;
}
