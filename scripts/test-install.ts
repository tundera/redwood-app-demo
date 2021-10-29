import 'universal-dotenv/register'

import execa from 'execa'

const build = async () => {
  const child = execa('yarn', ['install'], {
    stdio: 'inherit',
  })

  child.on('exit', (code, signal) => {
    if (code !== 0) {
      console.error(`build failed with code ${code}`)
      process.exit(code)
    }

    if (signal === 'SIGINT') {
      console.error('build interrupted')
      process.exit(1)
    }
  })
}

export default async ({ args }) => {
  // Your script here...
  await build()

  console.log(':: Executing script with args ::')
  console.log(args)
}
