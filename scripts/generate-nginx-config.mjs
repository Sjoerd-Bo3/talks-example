import fs from 'node:fs'
import path from 'node:path'

// Function to generate Nginx location blocks
function generateLocationBlocks(basePath) {
  const locations = []
  const yearFolders = fs.readdirSync(basePath, { withFileTypes: true })

  yearFolders.forEach((yearDirent) => {
    if (yearDirent.isDirectory() && yearDirent.name.match(/^\d{4}$/)) {
      const yearPath = path.join(basePath, yearDirent.name)
      const talkFolders = fs.readdirSync(yearPath, { withFileTypes: true })

      talkFolders.forEach((talkDirent) => {
        if (talkDirent.isDirectory()) {
          const locationPath = `/${yearDirent.name}/${talkDirent.name}`
          const aliasPath = path.join('/usr/share/nginx/html', yearDirent.name, talkDirent.name)

          locations.push(`
    location ${locationPath} {
        alias ${aliasPath};
        try_files $uri $uri/ ${locationPath}/index.html;
        index index.html;
    }`)
        }
      })
    }
  })

  return locations.join('\n')
}

// Main Nginx configuration
const nginxConfig = `
server {
    listen 80;
    server_name localhost;

    # Root location for the main application
    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }

    # Auto-generated location blocks
${generateLocationBlocks(path.join(path.dirname(new URL(import.meta.url).pathname), '../dist'))}
}
`

// Write the configuration file
// eslint-disable-next-line node/prefer-global/process
const outputPath = path.join(process.cwd(), 'nginx.conf')
fs.writeFileSync(outputPath, nginxConfig.trim(), 'utf8')
console.log(`Nginx configuration file generated successfully at ${outputPath}`)
