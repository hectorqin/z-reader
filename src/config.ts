import * as path from 'path';

export enum Commands {
  openReaderWebView = 'z-reader-plus.local.openReaderWebView',
  localRefresh = 'z-reader-plus.command.refresh',
  openLocalDirectory = 'z-reader-plus.command.openLocalDirectory',
  searchOnline = 'z-reader-plus.command.searchOnline',
  editTemplateHtml = 'z-reader-plus.editTemplateHtml',
  editTemplateCss = 'ez-reader-plus.ditTemplateCss',
  goProgress = 'z-reader-plus.goProgress',
  progressUpdate = 'z-reader-plus.progress:update',
  setOnlineSite = 'z-reader-plus.command.setOnlineSite',
  setEncoding = 'z-reader-plus.command.setEncoding',
  setChapterOrder = 'z-reader-plus.command.setChapterOrder',
  collectRefresh = 'z-reader-plus.command.collectList',
  editCollectList = 'z-reader-plus.command.editCollectList',
  collectBook = 'z-reader-plus.command.collectBook',
  clearCollect = 'z-reader-plus.command.clearCollect',
  cancelCollect = 'z-reader-plus.command.cancelCollect',
}

export enum WebViewMessage {
  editStyle = 'editStyle',
  editHtml = 'editHtml',
  goProgress = 'goProgress',
  progressUpdate = 'progress:update'
}

export const TemplatePath = {
  templateCss: path.join('static', 'template', 'default', 'style.css'),
  templateHtml: path.join('static', 'template', 'default', 'index.html')
};

export const TREEVIEW_ID = 'z-reader-plus-menu';
