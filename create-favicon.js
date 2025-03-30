const fs = require('fs');
const { createCanvas } = require('canvas');

// 创建一个画布
const canvas = createCanvas(64, 64);
const ctx = canvas.getContext('2d');

// 绘制emoji
ctx.font = '50px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('🦎', 32, 32);

// 将画布保存为PNG文件
const pngBuffer = canvas.toBuffer('image/png');
fs.writeFileSync('./static/favicon.png', pngBuffer);

console.log('Favicon PNG created successfully!');
