## 数据库知识点

### 一点小知识以MySQL为例

#### 1. sql语句

> 数据库和语言关系不大，咱就是复习复习

1.1 增加数据

```sql
insert into table_name (column1, column2, column3, ...)
values (value1, value2, value3, ...);
```

1.2 删除数据

```sql
delete from table_name
where some_column = some_value;
```

1.3 修改数据

```sql
update table_name
set some_column = some_value
where some_column = some_value;
```

1.4 查询数据

```sql
select column1, column2, ...
from table_name
where some_column = some_value;
```


文档：https://www.runoob.com/sql/sql-tutorial.html

### 在nodejs中使用mysql
mysql也有nodejs的库，可以直接使用

```javascript
import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});
```

可以看看基础使用，但是 medium 上的文章有时候会被墙
https://anujdarji100737.medium.com/building-a-mysql-database-connection-with-node-js-and-express-b6b333f6e713


然后```sql```语法看看这个
https://www.runoob.com/sql/sql-tutorial.html
