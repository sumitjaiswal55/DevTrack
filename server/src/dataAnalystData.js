// server/src/data/dataAnalystData.js

const dataAnalystTopics = [
  // ==========================================
  // 1. SQL QUERY ENGINE (Top Interview LeetCode & Business Questions)
  // ==========================================
  {
    topic: "Basic Filtering & String Matching (WHERE, LIKE, ILIKE, IN)",
    track: "sql",
    category: "SQL",
    difficulty: "Easy",
    status: "pending",
    link: "https://leetcode.com/problems/recyclable-and-low-fat-products/",
    notes: "Basic Boolean conditions, pattern matching with % and _, handling empty strings."
  },
  {
    topic: "Aggregate Functions & Grouping (COUNT, SUM, AVG, GROUP BY, HAVING)",
    track: "sql",
    category: "SQL",
    difficulty: "Easy",
    status: "pending",
    link: "https://leetcode.com/problems/not-boring-movies/",
    notes: "HAVING clause vs WHERE clause difference. Group level aggregates."
  },
  {
    topic: "Complex Joins & Missing Records (INNER, LEFT, RIGHT, FULL OUTER, CROSS)",
    track: "sql",
    category: "SQL",
    difficulty: "Medium",
    status: "pending",
    link: "https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/",
    notes: "Handling NULLs using COALESCE or IFNULL during LEFT JOINs."
  },
  {
    topic: "Self Joins: Compare Records within the Same Table",
    track: "sql",
    category: "SQL",
    difficulty: "Medium",
    status: "pending",
    link: "https://leetcode.com/problems/rising-temperature/",
    notes: "DATEDIFF and date functions combined with self joins."
  },
  {
    topic: "Ranking Window Functions (ROW_NUMBER, RANK, DENSE_RANK)",
    track: "sql",
    category: "SQL",
    difficulty: "Medium",
    status: "pending",
    link: "https://leetcode.com/problems/department-highest-salary/",
    notes: "N-th highest salary patterns, dealing with duplicate ranks."
  },
  {
    topic: "Value Window Functions: LAG and LEAD for MoM Growth",
    track: "sql",
    category: "SQL",
    difficulty: "Hard",
    status: "pending",
    link: "https://leetcode.com/problems/consecutive-numbers/",
    notes: "Month-over-Month (MoM) growth calculation, consecutive streaks detection."
  },
  {
    topic: "Rolling Averages & Cumulative Sum (OVER PARTITION BY ORDER BY ROWS BETWEEN)",
    track: "sql",
    category: "SQL",
    difficulty: "Hard",
    status: "pending",
    link: "https://leetcode.com/problems/restaurant-growth/",
    notes: "7-day moving averages and running balances."
  },
  {
    topic: "Common Table Expressions (CTEs) & Recursive Queries",
    track: "sql",
    category: "SQL",
    difficulty: "Medium",
    status: "pending",
    link: "https://leetcode.com/studyplan/top-sql-50/",
    notes: "Modular readable query architecture using WITH clauses."
  },
  {
    topic: "Conditional Aggregation (CASE WHEN inside SUM/COUNT)",
    track: "sql",
    category: "SQL",
    difficulty: "Medium",
    status: "pending",
    link: "https://leetcode.com/problems/immediate-food-delivery-ii/",
    notes: "Pivoting rows into columns using conditional counting."
  },

  // ==========================================
  // 2. PYTHON & PANDAS (Data Cleaning & Wrangling)
  // ==========================================
  {
    topic: "Python Core Data Structures (Lists, Dict Comprehensions, Lambda)",
    track: "python",
    category: "Python",
    difficulty: "Easy",
    status: "pending",
    link: "https://www.kaggle.com/learn/python",
    notes: "Key-value indexing, fast list comprehensions for text parsing."
  },
  {
    topic: "NumPy Vectorization: Indexing, Broadcasting & Boolean Masking",
    track: "python",
    category: "Python",
    difficulty: "Easy",
    status: "pending",
    link: "https://numpy.org/doc/stable/user/quickstart.html",
    notes: "Vectorized conditional logic (np.where, np.select) without Python loops."
  },
  {
    topic: "Pandas Data Ingestion & Profiling (read_csv, info, describe, value_counts)",
    track: "python",
    category: "Python",
    difficulty: "Easy",
    status: "pending",
    link: "https://www.kaggle.com/learn/pandas",
    notes: "Initial dataset inspection, checking memory usage and data types."
  },
  {
    topic: "Handling Missing Values (isnull, dropna, fillna with Mean/Median/Mode)",
    track: "python",
    category: "Python",
    difficulty: "Medium",
    status: "pending",
    link: "https://www.kaggle.com/learn/data-cleaning",
    notes: "Imputation strategies and understanding MNAR vs MCAR data loss."
  },
  {
    topic: "Data Type Transformations & DateTime Parsing (pd.to_datetime, .dt accessor)",
    track: "python",
    category: "Python",
    difficulty: "Medium",
    status: "pending",
    link: "https://pandas.pydata.org/docs/reference/api/pandas.to_datetime.html",
    notes: "Extracting Month, Quarter, Day of week for cohort and trend analysis."
  },
  {
    topic: "Advanced Filtering, Querying & String Cleaning (.str functions, .query)",
    track: "python",
    category: "Python",
    difficulty: "Medium",
    status: "pending",
    link: "https://www.kaggle.com/learn/pandas",
    notes: "Text regex matching, strip, lower, and category replacement."
  },
  {
    topic: "GroupBy Aggregations & Custom Apply (.agg, .transform, .apply)",
    track: "python",
    category: "Python",
    difficulty: "Hard",
    status: "pending",
    link: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html",
    notes: "Transform vs aggregate difference: retaining shape while broadcasting metrics."
  },
  {
    topic: "Merging & Reshaping (merge, join, concat, melt, pivot_table)",
    track: "python",
    category: "Python",
    difficulty: "Hard",
    status: "pending",
    link: "https://pandas.pydata.org/docs/user_guide/reshaping.html",
    notes: "Wide-format to Long-format transformations for business reporting."
  },
  {
    topic: "Outlier Detection using IQR (Interquartile Range) & Z-Score",
    track: "python",
    category: "Python",
    difficulty: "Medium",
    status: "pending",
    link: "https://scikit-learn.org/stable/modules/outlier_detection.html",
    notes: "Boxplot statistics, trimming vs capping (Winsorization) outliers."
  },

  // ==========================================
  // 3. POWER BI & TABLEAU (Data Modeling & BI Dashboards)
  // ==========================================
  {
    topic: "Data Modeling Foundations: Star Schema vs Snowflake Schema",
    track: "bi",
    category: "PowerBI",
    difficulty: "Medium",
    status: "pending",
    link: "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema",
    notes: "Fact tables vs Dimension tables, handling Many-to-Many relationships."
  },
  {
    topic: "Calendar Table & Time Intelligence Setup (CALENDARAUTO, Date Dimension)",
    track: "bi",
    category: "PowerBI",
    difficulty: "Medium",
    status: "pending",
    link: "https://dax.guide/calendarauto/",
    notes: "Building robust non-broken Year-to-Date (YTD) and CAGR metrics."
  },
  {
    topic: "DAX Context Basics: Row Context vs Evaluation (Filter) Context",
    track: "bi",
    category: "PowerBI",
    difficulty: "Hard",
    status: "pending",
    link: "https://www.sqlbi.com/articles/row-context-and-filter-context-in-dax/",
    notes: "Calculated Columns vs Measures: Memory foot-print and performance impact."
  },
  {
    topic: "Mastering CALCULATE, FILTER, and ALL in DAX",
    track: "bi",
    category: "PowerBI",
    difficulty: "Hard",
    status: "pending",
    link: "https://dax.guide/calculate/",
    notes: "Manipulating filter context, calculating Percentage of Total Contribution."
  },
  {
    topic: "Time-Intelligence DAX: TOTALYTD, SAMEPERIODLASTYEAR, DATEADD",
    track: "bi",
    category: "PowerBI",
    difficulty: "Medium",
    status: "pending",
    link: "https://learn.microsoft.com/en-us/dax/time-intelligence-functions-dax",
    notes: "Year-over-Year (YoY) revenue comparison and churn percentages."
  },
  {
    topic: "Tableau LOD Expressions: FIXED, INCLUDE, EXCLUDE",
    track: "bi",
    category: "Tableau",
    difficulty: "Hard",
    status: "pending",
    link: "https://www.tableau.com/about/blog/2015/4/lod-expressions-39217",
    notes: "Aggregating values independent of the visualization dimensions."
  },
  {
    topic: "Executive KPI Card Deck, Hierarchy Drill-Downs & Custom Tooltips",
    track: "bi",
    category: "PowerBI",
    difficulty: "Medium",
    status: "pending",
    link: "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-kpi",
    notes: "Designing minimalist UI cards for VP/C-suite dashboards."
  },

  // ==========================================
  // 4. BUSINESS STATISTICS & EDA (Case Studies & Product Sense)
  // ==========================================
  {
    topic: "Descriptive Statistics: Mean, Median, Mode, Variance, Skewness, Kurtosis",
    track: "stats",
    category: "Statistics",
    difficulty: "Easy",
    status: "pending",
    link: "https://www.khanacademy.org/math/statistics-probability",
    notes: "When to use Median over Mean (Skewed distribution like salary/prices)."
  },
  {
    topic: "Probability Distributions: Normal, Binomial, Poisson Distributions",
    track: "stats",
    category: "Statistics",
    difficulty: "Medium",
    status: "pending",
    link: "https://www.khanacademy.org/math/statistics-probability",
    notes: "68-95-99.7 Empirical Rule, Central Limit Theorem (CLT) intuition."
  },
  {
    topic: "Correlation vs Causation & Pearson / Spearman Correlation Coefficients",
    track: "stats",
    category: "Statistics",
    difficulty: "Medium",
    status: "pending",
    link: "https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation",
    notes: "Linear correlation vs Monotonic rank correlation, confounding variables."
  },
  {
    topic: "Hypothesis Testing: Null Hypothesis, Alternative Hypothesis, P-Value",
    track: "stats",
    category: "Statistics",
    difficulty: "Hard",
    status: "pending",
    link: "https://www.statisticshowto.com/probability-and-statistics/hypothesis-testing/",
    notes: "Alpha cutoff (0.05), Type I (False Positive) vs Type II (False Negative) errors."
  },
  {
    topic: "Statistical Tests: Two-Sample T-Test, Z-Test, ANOVA, Chi-Square Test",
    track: "stats",
    category: "Statistics",
    difficulty: "Hard",
    status: "pending",
    link: "https://www.investopedia.com/terms/t/t-test.asp",
    notes: "Categorical vs Categorical (Chi-Square) and Continuous vs Categorical (ANOVA)."
  },
  {
    topic: "A/B Testing End-to-End Design: Sample Size, Minimum Detectable Effect (MDE)",
    track: "stats",
    category: "Analytics",
    difficulty: "Hard",
    status: "pending",
    link: "https://cxl.com/blog/ab-testing-guide/",
    notes: "Variant vs Control testing, statistical power (80%), stopping criteria."
  },
  {
    topic: "E-Commerce & SaaS Product Metrics: Retention, CAC, LTV, Churn, NPS",
    track: "stats",
    category: "Analytics",
    difficulty: "Medium",
    status: "pending",
    link: "https://www.reforge.com/blog/saas-metrics-guide",
    notes: "Cohort retention analysis, Customer Acquisition Cost to LTV ratio formulas."
  }
];

module.exports = dataAnalystTopics;