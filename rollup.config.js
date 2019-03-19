import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'app.js',
  output: {
    file: 'public/bundle.js',
    name: 'App',
    format: 'iife',
  },
  plugins: [
    resolve(),
    serve({
      open: true,
      contentBase: 'public',
      port: 5000,
    }),
    livereload(),
    svelte({
      css: stylesheet => {
        stylesheet.write('public/bundle.css')
      },
    }),
  ],
}
