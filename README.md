# Bamboard API

Team Directory with Search &amp; Reporting
A RESTful API for managing employees and departments, built with Node.js, Express, TypeScript, Sequelize, and MariaDB.

---

## 🚀 Features

- CRUD operations for Employees and Departments
- Employee hierarchy queries
- Department employee listing
- Search employees by name, title, or department

---

## 🛠 Install Requirements

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MariaDB](https://mariadb.org/) (v10.2+ recommended, v10.4+ for full CTE support)
- [npm](https://www.npmjs.com/) 

---

## 🔧 Setup Instructions
<details>
<summary>To use the BamBoard-API, follow these instructions: </summary>
  
### 1️⃣. **Clone the repository**

```sh
git clone <https://github.com/BambiCPT/bamboard-api.git>
cd bamboard-api
```

### 2️⃣. **Install dependencies**

```sh
npm install
```

### 3️⃣. **Configure environment variables**

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=app_user
DB_PASSWORD=bambi
DB_NAME=bamboard
DB_PORT=3306
PORT=3000
```

Adjust values as needed for your local MariaDB setup.

### 4️⃣. **Set up the database**

- Create the database in MariaDB:

```sql
CREATE DATABASE bamboard;
```

- Create the user and grant privileges (if needed):

```sql
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'bambi';
GRANT ALL PRIVILEGES ON bamboard.* TO 'app_user'@'localhost';
FLUSH PRIVILEGES;
```

### 5️⃣. **Run migrations**

```sh
npx sequelize-cli db:migrate
```

This will create the `departments` and `employees` tables.
</details>

## Database Schema
<details>
<summary>This is an outline of the Database Schema</summary>
  
### **departments**

| Column | Type           | Constraints      |
|--------|----------------|-----------------|
| id     | INTEGER        | PRIMARY KEY     |
| name   | VARCHAR(255)   | NOT NULL        |

### **employees**

| Column       | Type           | Constraints                          |
|--------------|----------------|--------------------------------------|
| id           | INTEGER        | PRIMARY KEY                          |
| name         | VARCHAR(255)   | NOT NULL                             |
| departmentId | INTEGER        | NOT NULL, FK → departments(id), ON DELETE CASCADE |
| managerId    | INTEGER        | NULL, FK → employees(id), ON DELETE CASCADE      |
| title        | VARCHAR(255)   | NOT NULL                             |

</details>

## Running the API

```sh
npm run dev
```

The API will be available at `http://localhost:3000/`.

---

