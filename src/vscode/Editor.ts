import vscode from 'vscode'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Editor {
  static get editor() {
    return vscode.window.activeTextEditor
  }

  static async writeToEditor(text: string) {
    const editor = this.editor
    if (!editor) {
      return false
    }
    return await editor.edit((textEditor) => {
      if (editor.selection) {
        textEditor.replace(editor.selection, text)
      } else {
        textEditor.insert(editor.document.positionAt(0), text)
      }
    })
  }
}
