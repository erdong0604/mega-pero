// packages/@ed/utils/esbuild.config.js
const esbuild = require('esbuild');
console.log(11);
esbuild.build({
  entryPoints: ['lib/index.ts'],
  bundle: true,
  format: 'cjs',
  outdir: 'dist',
  tsconfig: 'tsconfig.json', // 指定 TypeScript 配置文件
  define: {
    'process.env.NODE_ENV': '"production"', // 为代码中的 process.env.NODE_ENV 设置值
  },
}).catch((e) => {
  console.log(e);
});
