import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 使用绝对路径
const dirPath = path.join(__dirname, 'exampleDir');
const filePath = path.join(dirPath, 'example.txt');

// 读取文件内容
async function readFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return data;
  } catch (err) {
    console.error('Error reading file:', err);
    return null;
  }
}

// 写入文件内容
async function writeFile(filePath, content) {
  try {
    // 确保目录存在
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
    await fs.promises.writeFile(filePath, content, 'utf-8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

// 删除文件
async function deleteFile(filePath) {
  try {
    await fs.promises.unlink(filePath);
    console.log('File deleted successfully');
  } catch (err) {
    console.error('Error deleting file:', err);
  }
}

// 创建目录
async function createDirectory(dirPath) {
  try {
    await fs.promises.mkdir(dirPath, { recursive: true });
    console.log('Directory created successfully');
  } catch (err) {
    console.error('Error creating directory:', err);
  }
}

// 读取目录内容
async function readDirectory(dirPath) {
  try {
    const files = await fs.promises.readdir(dirPath);
    console.log('Directory contents:', files);
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

// 示例操作流程
async function demo() {
  try {
    // 创建目录
    await createDirectory(dirPath);
    console.log('Directory created at:', dirPath);

    // 写入文件
    await writeFile(filePath, 'Hello, Node.js!');
    console.log('File created at:', filePath);

    // 读取文件
    const fileContent = await readFile(filePath);
    console.log('File content:', fileContent);

    // 读取目录内容
    await readDirectory(dirPath);

    /**
     *
     * // 删除文件
      await deleteFile(filePath);
      
      // 最后删除目录（可选）
      await fs.promises.rmdir(dirPath);
      console.log('Directory cleaned up');
    */
  } catch (error) {
    console.error('Error in demo:', error);
  }
}

// 立即执行演示
demo().catch(console.error);
