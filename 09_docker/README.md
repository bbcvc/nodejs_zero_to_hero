# Docker 入门指南

## 1. Docker 简介
Docker 是一个开源的容器化平台，它可以让开发者打包应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 或 Windows 机器上。

### 主要概念
- **镜像（Image）**：Docker 镜像是一个只读的模板，用于创建容器
- **容器（Container）**：容器是镜像的运行实例
- **仓库（Repository）**：用于存储和分发 Docker 镜像

## 2. 基本命令
```bash
# 查看 Docker 版本
docker version

# 查看本地镜像列表
docker images

# 搜索镜像
docker search mysql

# 拉取镜像
docker pull mysql:latest

# 查看运行中的容器
docker ps

# 查看所有容器（包括已停止的）
docker ps -a

# 停止容器
docker stop <container_id>

# 启动容器
docker start <container_id>

# 删除容器
docker rm <container_id>

# 删除镜像
docker rmi <image_id>
```

## 3. MySQL 容器部署示例

### 3.1 拉取 MySQL 镜像
```bash
docker pull mysql:8.0
```

### 3.2 创建并运行 MySQL 容器
```bash
docker run -d \
    --name mysql-demo \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=your_password \
    -e MYSQL_DATABASE=test_db \
    -v mysql_data:/var/lib/mysql \
    mysql:8.0
```

参数说明：
- `-d`: 后台运行容器
- `--name`: 指定容器名称
- `-p`: 端口映射，格式为 `主机端口:容器端口`
- `-e`: 设置环境变量
- `-v`: 数据卷挂载，用于数据持久化

### 3.3 验证 MySQL 容器
```bash
# 查看容器运行状态
docker ps

# 进入容器
docker exec -it mysql-demo mysql -uroot -p

# 在容器内执行 MySQL 命令
mysql> SHOW DATABASES;
mysql> USE test_db;
mysql> CREATE TABLE users (id INT, name VARCHAR(50));
mysql> EXIT;
```

### 3.4 常见问题处理
- 如果端口被占用，可以修改主机映射端口
- 如果需要自定义 MySQL 配置，可以通过挂载配置文件实现：
```bash
docker run -d \
    --name mysql-demo \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=your_password \
    -v mysql_data:/var/lib/mysql \
    -v /path/to/my.cnf:/etc/mysql/my.cnf \
    mysql:8.0
```

## 4. 使用 Docker Compose（推荐）
对于需要多个容器协同工作的场景，推荐使用 Docker Compose。以下是一个 MySQL 服务的 docker-compose.yml 示例：

```yaml
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    container_name: mysql-demo
    environment:
      MYSQL_ROOT_PASSWORD: your_password
      MYSQL_DATABASE: test_db
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    restart: always

volumes:
  mysql_data:
```

使用以下命令启动服务：
```bash
docker-compose up -d
```

## 5. 最佳实践
- 总是使用具体的版本标签，避免使用 latest
- 合理使用数据卷实现数据持久化
- 注意容器的资源限制
- 定期备份重要数据
- 使用 Docker Compose 管理多容器应用
