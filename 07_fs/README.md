# 文件系统

> 一个小知识点，在node中如何操作文件

## node内置的 fs 模块

Node.js 提供了 `fs` 模块来与文件系统进行交互。你可以使用 `fs` 模块来读取、写入、删除和操作文件和目录。

### 引入 fs 模块

在 Node.js 中使用 ESM 模块引入 `fs` 模块：

```javascript
import fs from 'fs';
```

### 读取文件

使用 `fs.promises.readFile` 方法读取文件内容：

```javascript
import fs from 'fs';

async function readFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFile('./example.txt');
```

### 写入文件

使用 `fs.promises.writeFile` 方法写入文件内容：

```javascript
import fs from 'fs';

async function writeFile(filePath, content) {
  try {
    await fs.promises.writeFile(filePath, content, 'utf-8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

writeFile('./example.txt', 'Hello, world!');
```

### 删除文件

使用 `fs.promises.unlink` 方法删除文件：

```javascript
import fs from 'fs';

async function deleteFile(filePath) {
  try {
    await fs.promises.unlink(filePath);
    console.log('File deleted successfully');
  } catch (err) {
    console.error('Error deleting file:', err);
  }
}

deleteFile('./example.txt');
```

### 创建目录

使用 `fs.promises.mkdir` 方法创建目录：

```javascript
import fs from 'fs';

async function createDirectory(dirPath) {
  try {
    await fs.promises.mkdir(dirPath, { recursive: true });
    console.log('Directory created successfully');
  } catch (err) {
    console.error('Error creating directory:', err);
  }
}

createDirectory('./exampleDir');
```

### 读取目录内容

使用 `fs.promises.readdir` 方法读取目录内容：

```javascript
import fs from 'fs';

async function readDirectory(dirPath) {
  try {
    const files = await fs.promises.readdir(dirPath);
    console.log('Directory contents:', files);
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

readDirectory('./exampleDir');
```

### 总结

`fs` 模块提供了丰富的文件系统操作方法，使用 `fs.promises` 可以方便地进行异步操作。在 Node.js 中使用 ESM 模块引入 `fs` 模块，可以更好地与现代 JavaScript 语法兼容。
