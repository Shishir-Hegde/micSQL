
# SONEXIS – Transforming Voice Commands into Visual Insights

<div align="center">
<img width="200" height="200" src="https://github.com/user-attachments/assets/62c4a017-ae48-4b8f-a07f-fa2b45153605" alt="sonexis logo"/>
</div>

#### **Sonexis** is an intelligent voice-based analytics platform that allows non-technical users to access real-time business insights without writing a single line of SQL. By combining **speech-to-text**, **LLMs**, and **data visualization**, MicSQL turns natural language voice queries into interactive dashboards — making data truly accessible for business leaders.
### 🔍 Key Features:
- 🎤 **Voice-Driven Access** – Query your database using natural speech, powered by Whisper and a custom voice identity model.
- 🧠 **AI-Powered SQL Generation** – Converts spoken queries into optimized SQL using a schema-aware LLM (e.g., Gemini).
- 📊 **Instant Visualization** – Transforms results into intuitive charts and tables via Chart.js or D3.js.
- 🧾 **Smart Insights** – Auto-generates related queries and actionable summaries to give users a fuller picture.
- 🔐 **Secure & Personalized** – Role-based access control and adaptive learning for user-specific recommendations.

### 🛠️ Tech Stack:
**Whisper**, **PyAnnote**, **Gemini (LLM)**, **PostgreSQL**, **Next.js**, **Express.js**, **TailwindCSS**, **Chart.js / D3.js**
### System Design: 
<img src="https://github.com/user-attachments/assets/32ffccef-8155-469a-a533-7500e3be7ccf"/>

# 🚀 HackToFuture 3.0 Repository Setup Guide
#### To track your progress and collaborate effectively, every team must fork the official repository and follow the steps below.
<br>

# 🔱 Fork the Repository
 #### Go to the GitHub page https://github.com/HackToFuture/HTF-XNN <br>
  #### Click on the "Fork" button in the upper-right corner of the page.
  #### Assign the repository name as "HTF - *<Team_Code>*".

  <img align="center" width = "500" src = "https://docs.github.com/assets/cb-40742/mw-1440/images/help/repository/fork-button.webp" alt="fork image"/>
  
  
  ```
  Example :
  <Team_Code> -> A09
  Repository Name : HTF-A09
```

# 📥 Clone Your Forked Repository
  #### Go to your forked repository on GitHub.
  #### Click the green "Code" button, then click the clipboard icon to copy the URL.

   <img align="center" width = "500" height="200" src = "https://docs.github.com/assets/cb-60499/mw-1440/images/help/repository/https-url-clone-cli.webp" alt="clone image"/>
 
  #### Open your terminal and run the following git clone command to copy the repository to your local machine.
  #### Replace *repository-url* with the URL of your forked repository.
  ```
  git clone <repository-url>
```


# 🛠️ Start working on your project
#### Begin building your solution! Collaborate with your teammates and push changes regularly.

# 📝 Commit Your Changes
#### Track and save your progress using Git:
#### Check the status of your changes
   ```
    git status
 ```
  

  #### Use the git add command to stage the changes you want to commit
  ```
    git add .
 ```
      
  #### Commit with a meaningful message
  #### *Option 1* : Simple Commit Format (Beginner Friendly)
  #### Use this if you're new to Git
   ```
    git commit -m "Your descriptive commit message"
 ```
#### *Option 2* : Conventional Commits (Recommended)
#### Follow this format for more structured, professional commit history  
```
git commit -m "<type>(<scope>): <subject>"
```
| Type | Purpose |
|----------|----------|
| feat    | for a new feature for the user, not a new feature for build script. Such commit will trigger a release bumping a MINOR version    |
| fix    | for a bug fix for the user, not a fix to a build script. Such commit will trigger a release bumping a PATCH version     |
| perf    | for performance improvements. Such commit will trigger a release bumping a PATCH version    |
| docs    | for changes to the documentation     |
| test | for adding missing tests, refactoring tests; no production code change  |
| style  | for formatting changes, missing semicolons, etc  |
| refactor | for refactoring production code, e.g. renaming a variable  |
| build | for updating build configuration, development tools or other changes irrelevant to the user|

#### Scope: Area of change (e.g., api, ui, auth)
#### Subject: One-line summary in present tense, no period at the end

```
Example: git commit -m "fix(button): fix submit button not working"
```

# 🚀 Push Your Changes
  #### Send your local commits to GitHub:
  ```
    git push origin
 ```
# 🧠 Tips
#### *Commit often* : Small, frequent commits help track progress and fix bugs easily.
#### *Write clear messages* : Describe what you did in each commit.
#### *Collaborate* : Make sure everyone in your team contributes.

---

**For any issues or doubts, reach out to the organizing team.** *Happy hacking!* 💻✨
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> f5b5d04 (Initial commit from Create Next App)
