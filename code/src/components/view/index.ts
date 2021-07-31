export function getWebviewContent(uri: string) {
  console.log(uri);
  return (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' href='` +
    uri +
    `' /> 
        <title>Example Webview</title>
    </head>
    <body>
      <h1>Issues/PR</h1>
    </body>
    </html>`
  );
}
