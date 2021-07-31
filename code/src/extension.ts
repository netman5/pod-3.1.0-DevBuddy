import * as vscode from 'vscode';
import * as path from 'path';
import * as view from './components/view/index';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "code" is now active!');

  let disposable = vscode.commands.registerCommand('code.start', () => {
    const panel = vscode.window.createWebviewPanel(
      'catCoding',
      'Github View',
      vscode.ViewColumn.One,
      {}
    );
    const onDiskPath = vscode.Uri.file(
      path.join(context.extensionPath, 'src/components/css', 'index.css')
    );

    const cssURI = panel.webview.asWebviewUri(onDiskPath);

    panel.webview.html = view.getWebviewContent(cssURI.path);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
