var editor = new FroalaEditor('textarea.froala-editor', {
  toolbarButtons: {
    moreText: {
      buttons: [
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'fontFamily',
        'fontSize',
        'textColor',
        'backgroundColor',
        'inlineClass',
        'inlineStyle',
        'clearFormatting',
      ],
    },
    moreParagraph: {
      buttons: [
        'alignLeft',
        'alignCenter',
        'alignRight',
        'formatOLSimple',
        'alignRight',
        'alignJustify',
        'formatOL',
        'formatUL',
        'paragraphFormat',
        'paragraphStyle',
        'lineHeight',
        'outdent',
        'indent',
        'quote',
      ],
    },
    moreRich: {
      buttons: [
        'insertLink',
        'insertTable', 
        'specialCharacters', 
        'embedly'
      ],
    },
    moreMisc: {
      buttons: [
        'undo',
        'redo',
        'fullscreen',
        'spellChecker',
        'selectAll',
        'help',
      ],
    },
  },

  // htmlAllowedTags:[
  //           'a', 'abbr',
  //           'address', 'area',
  //           'article','aside',
  //           'audio', 'b', 'base', 
  //           'bdi','bdo', 'blockquote', 
  //           'br','button','canvas', 
  //           'caption','cite', 'code', 
  //           'col', 'colgroup','datalist', 'dd', 
  //           'del', 'details','dfn', 'dialog',
  //           'div', 'dl','dt', 'em', 
  //           'embed', 'fieldset','figcaption', 'figure',
  //           'footer', 'form','h1', 'h2', 'h3',
  //           'h4', 'h5', 'h6','header', 'hgroup',
  //           'hr', 'i', 'iframe','img', 'input', 'ins',
  //           'kbd', 'keygen', 'label','legend', 'li', 'link',
  //           'main', 'map', 'mark','menu', 'menuitem', 
  //           'meter', 'nav', 'noscript','object', 'ol', 'optgroup',
  //           'option', 'output', 'p','param', 'pre', 'progress',
  //           'queue', 'rp', 'rt', 'ruby','s', 'samp', 'script', 
  //           'style', 'section', 'select','small', 'source', 'span',
  //           'strike', 'strong', 'sub','summary', 'sup', 'table',
  //           'tbody', 'td', 'textarea','tfoot', 'th', 'thead', 'time',
  //           'title', 'tr', 'track', 'u','ul', 'var', 'video', 'wbr']
});

// $(function () {
//   var config = {
//     enter: $.FroalaEditor.ENTER_BR,
//   };
//   $('textarea.froala-editor').froalaEditor(config);
// });
// $(document).ready(function () {
//   var editor = new FroalaEditor('textarea#rich-editor');

//   // Wait for the editor to be initialized
//   editor.events.on('initialized', function () {
//     removeHTMLTags(editor);
//   });

//   function removeHTMLTags(editor) {
//     // Get the content of the editor.
//     var content = editor.html.get();

//     // Remove all HTML tags from the content.
//     content = content.replace(/<[^>]+>/g, '');

//     // Set the content of the editor to the new content.
//     editor.html.set(content);
//   }
// });
