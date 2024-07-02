<a name="sql-transactions-starter"></a>

<div align="center">
  <a href="https://github.com/PrimeAcademy/sql-transactions-starter">
    <img src="https://avatars.githubusercontent.com/u/9360728?s=200&v=4" alt="Logo" width="80" height="80">
  </a>
  <h3>SQL Transactions Starter</h3>
  <p>
    <a href="https://github.com/PrimeAcademy/sql-transactions-starter/issues">Report Bug</a>
    ·
    <a href="https://github.com/PrimeAcademy/sql-transactions-starter/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-this-repo">About This Repo</a>
    </li>
    <li>
      <a href="#github-setup">GitHub Setup</a>
    </li>
    <li><a href="#local-setup">Local Setup</a></li>
    <li><a href="#instructions">Instructions</a></li>
  </ul>
</details>

## About This Repo

💵 We will be building a Bank Transactions application which is server-side only with [PostgreSQL](https://www.postgresql.org/) and a [Relational Database](https://www.oracle.com/database/what-is-a-relational-database/)!

[PostgreSQL](https://www.postgresql.org/) is an open-source [Relational Database](https://www.oracle.com/database/what-is-a-relational-database/) Management System that is highly extensible and standards-compliant. It offers advanced features like reliable transactions, complex SQL queries, foreign keys, triggers, updatable views, and multi-version concurrency control.

[🔝 back to top](#sql-transactions-starter)

## GitHub Setup

- [ ] **Create Repo from Use Template**:
  
  - Click [HERE](https://github.com/new?template_name=sql-transactions-starter&template_owner=prime-digital-academy) or the `Use Template` button in this repo to create a new repo.
  - Ensure `Include all branches` is left unchecked.
  - Specify your username and repo name appropriately.
  - Provide a description for the repo (optional).
  - Set the repo as `Public`.
  - Click `Create repository`.

[🔝 back to top](#sql-transactions-starter)

## Local Setup

- [ ] **Clone your Repo**:

  - Click the `<> Code` button in this repo and choose `SSH`.
  - Copy the URL. It should look something like: `git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git`.
  - In your terminal, navigate to the directory where you want to clone this repo.
  - Execute `git clone git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git`, replacing the placeholders with actual values.

- [ ] **Create Database in PostgreSQL (using Postico)**:

  - Create a database named `sql-transactions-starter-db` in Postico with the values in your `pool.js` file.
  - Copy and paste the content from your `database.sql` into your PostgreSQL database.
  - Run the queries in the new database to populate your tables with data.

- [ ] **Install Node Dependencies**:

  - In the terminal, navigate to the folder you cloned this repo and run the following:

    ```shell
    npm install
    ```

[🔝 back to top](#sql-transactions-starter)

## Instructions

- [ ] **Start the application**:

  - In the terminal, run the following to start the server:
  
    ```shell
    npm run server
    ```

There is no user interface (UI) for this starter repo, so there is no need to use your web browser.

> **NOTE:** The key combination `ctrl-c` will stop your server/client from running. Whichever current Node.js process is running in that terminal will stop on macOS.

Follow along with your instructor to create a splendid Bank Transactions application! Happy Priming!

[🔝 back to top](#sql-transactions-starter)
