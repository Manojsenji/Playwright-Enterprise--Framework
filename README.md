Go to the path--->create folder (Playwright-enterprise-framework)
		(mkdir playwright-enterprise-framework)
		d playwright-enterprise-framework
npm init -y
npm init playwright@latest
typescript--->yes
tests--->yes
github actions--->true
install playwright browser-->true

npm install dotenv
npm install winston
npm install -D allure-playwright
npm install -g allure-commandline
allure –-version

allure generate allure-results --clean -o allure-report
allure open allure-report


Folder Structure
playwright-framework/
│
├── tests/
│   ├── ui/
│   ├── api/
│
├── pages/
│
├── utils/
│
├── fixtures/
│
├── test-data/
│
├── playwright.config.ts
├── .env.qa / .env.uat / .env.prod
