import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import license from 'rollup-plugin-license';
export default {
    input: ['src/index.js'] ,
    output: {
        dir: 'dist',
        format: 'esm'
    },
    plugins: [
        resolve(),
        commonjs(),
        license({
            thirdParty: {
              allow: {
                  test: 'MIT',
                  failOnViolation: true,
                  failOnUnlicensed: true
              }
            },
          })
    ]
};