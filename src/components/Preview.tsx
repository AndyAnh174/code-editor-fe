interface PreviewProps {
  html: string
  css: string
  js: string
}

export function Preview({ html, css, js }: PreviewProps) {
  const generateOutput = () => {
    return `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `
  }

  return (
    <iframe
      className="w-full h-full bg-white"
      srcDoc={generateOutput()}
      title="output"
      sandbox="allow-scripts"
    />
  )
} 