import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'summernote';

  ngOnInit() {
    $('#summernote').summernote({
      fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Merriweather' , 'test'],
      fontNamesIgnoreCheck: ['Merriweather', 'test'],
      codemirror: {
        theme: 'monokai'
      },
      // toolbar: [
      //   ['fontname', ['fontname']], // 字体系列
      //   ['style', ['bold', 'italic', 'underline', 'clear']], // 字体粗体、字体斜体、字体下划线、字体格式清除
      //   ['font', ['strikethrough', 'superscript', 'subscript']], // 字体划线、字体上标、字体下标
      //   ['fontsize', ['fontsize']], // 字体大小
      //   ['color', ['color']], // 字体颜色
      //   ['style', ['style']], // 样式
      //   ['para', ['ul', 'ol', 'paragraph']], // 无序列表、有序列表、段落对齐方式
      //   ['height', ['height']], // 行高
      //   ['table', ['table']], // 插入表格
      //   ['hr', ['hr']], // 插入水平线
      //   ['link', ['link']], // 插入链接
      //   ['picture', ['picture']], // 插入图片
      //   ['video' , ['video']], // 插入视频
      //   ['fullscreen', ['fullscreen']], // 全屏
      //   ['codeview', ['codeview']], // 查看html代码
      //   ['undo', ['undo']], // 撤销
      //   ['redo', ['redo']], // 取消撤销
      //   ['help', ['help']], // 帮助
      // ],
      height: 300,                 // set editor height
      minHeight: null,             // set minimum height of editor
      maxHeight: null,             // set maximum height of editor
      // focus: true                  // set focus to editable area after initializing summernote
    // cleaner: {
    //       action: 'both',
    //       notStyle: 'position:absolute;top:0;left:0;right:0', // Position of Notification
    //       icon: '<i class="note-icon">[Your Button]</i>',
    //       keepHtml: false, // Remove all Html formats
    //       keepOnlyTags: ['<p>', '<br>', '<ul>', '<li>', '<b>', '<strong>', '<i>', '<a>'],
    //       keepClasses: false, // Remove Classes
    //       badTags: ['style', 'script', 'applet', 'embed', 'noframes', 'noscript', 'html'], // Remove full tags with contents
    //       badAttributes: ['style', 'start'], // Remove attributes from remaining tags
    //       limitChars: false, // 0/false|# 0/false disables option
    //       limitDisplay: 'both', // text|html|both
    //       limitStop: false // true/false
    // }
    });
  }
}
