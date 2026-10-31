// server/src/data/dataAnalystData.js

const dataAnalystTopics = [
  // 1. SQL Track
  {
    topic: "SQL Basics & Filtering (SELECT, WHERE, LIKE, ORDER BY)",
    track: "sql",
    category: "SQL",
    difficulty: "Easy",
    status: "pending",
    link: "https://leetcode.com/studyplan/top-sql-50/",
    notes: "Basic queries and filtering syntax."
  },
  {
    topic: "SQL Joins (INNER, LEFT, RIGHT, FULL OUTER, CROSS)",
    track: "sql",
    category: "SQL",
    difficulty: "Medium",
    status: "pending",
    link: "https://leetcode.com/studyplan/top-sql-50/",
    notes: "Master join operations and NULL handling."
  },
  {
    topic: "Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)",
    track: "sql",
    category: "SQL",
    difficulty: "Hard",
    status: "pending",
    link: "https://leetcode.com/studyplan/top-sql-50/",
    notes: "Crucial for Data Analyst product interviews."
  },
  {
    topic: "CTEs (Common Table Expressions) & Subqueries",
    track: "sql",
    category: "SQL",
    difficulty: "Medium",
    status: "pending",
    link: "https://leetcode.com/studyplan/top-sql-50/",
    notes: "Write clean and reusable query blocks."
  },

  // 2. Python & Pandas Track
  {
    topic: "Python Data Structures (Lists, Dictionaries, Sets, Tuples)",
    track: "python",
    category: "Python",
    difficulty: "Easy",
    status: "pending",
    link: "https://www.kaggle.com/learn/python",
    notes: "Core syntax required for data manipulation."
  },
  {
    topic: "NumPy Arrays & Vectorized Mathematical Operations",
    track: "python",
    category: "Python",
    difficulty: "Easy",
    status: "pending",
    link: "https://numpy.org/doc/stable/user/quickstart.html",
    notes: "Fast indexing, broadcasting, and matrix math."
  },
  {
    topic: "Pandas Data Cleaning (Handling Missing Values & Outliers)",
    track: "python",
    category: "Python",
    difficulty: "Medium",
    status: "pending",
    link: "https://www.kaggle.com/learn/pandas",
    notes: "fillna, dropna, IQR methods for outlier detection."
  },
  {
    topic: "Data Aggregations with Pandas (groupby, merge, pivot_table)",
    track: "python",
    category: "Python",
    difficulty: "Medium",
    status: "pending",
    link: "https://www.kaggle.com/learn/pandas",
    notes: "Business metrics computation using aggregations."
  },

  // 3. Power BI / Tableau Track
  {
    topic: "Data Modeling: Star Schema vs Snowflake Schema",
    track: "bi",
    category: "PowerBI",
    difficulty: "Medium",
    status: "pending",
    link: "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema",
    notes: "Fact tables and Dimension tables design."
  },
  {
    topic: "Basic to Advanced DAX (CALCULATE, FILTER, RELATED)",
    track: "bi",
    category: "PowerBI",
    difficulty: "Hard",
    status: "pending",
    link: "https://dax.guide/",
    notes: "Evaluation context and row context mastery."
  },
  {
    topic: "Executive Business Dashboard Design & KPI Cards",
    track: "bi",
    category: "Tableau",
    difficulty: "Medium",
    status: "pending",
    link: "https://www.tableau.com/learn/training",
    notes: "Color hierarchy, interactive filters, drill-through."
  },

  // 4. Statistics & EDA Track
  {
    topic: "Descriptive Statistics: Mean, Median, Variance, Skewness",
    track: "stats",
    category: "Statistics",
    difficulty: "Easy",
    status: "pending",
    link: "https://www.khanacademy.org/math/statistics-probability",
    notes: "Summary statistics and distribution checks."
  },
  {
    topic: "Hypothesis Testing & P-Value Interpretation",
    track: "stats",
    category: "Statistics",
    difficulty: "Hard",
    status: "pending",
    link: "https://www.khanacademy.org/math/statistics-probability",
    notes: "Null hypothesis, alternate hypothesis, Type I/II errors."
  },
  {
    topic: "A/B Testing Framework for Product Analytics",
    track: "stats",
    category: "Analytics",
    difficulty: "Hard",
    status: "pending",
    link: "https://hbr.org/2017/06/a-refresher-on-ab-testing",
    notes: "Sample size calculation, statistical significance, conversion lifts."
  }
];

module.exports = dataAnalystTopics;