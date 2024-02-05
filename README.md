# Getting Started

### Run the application
Install all dependencies first with `npm install`
Run the app in the development mode by running the command `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Config
## API Key
Update the Abstract API Key in `.env` file to get location API working.

## Replace AUTH Header
Update the auth header with new token and comment out the lines 10, 11 in `user.ts` file under `services` folder to make actual API call to fetch user info.

### Stack
- React
- TypeScript
- Chakra UI

### Designing the pages
- Built the application in 4-5 hours
- Used Chakra UI library for all components and designs. Chose this over custom CSS styling to reduce effort and time.
- Spent time making sure the experience is not buggy by checking the various edge cases when loading data from API, local cache and local file.
- Added skeleton loaders for better user experience
- Load JSON file button pulls data from JSON file and loads it into form and user avatar card
- Didn't use any state management since that wasn't necessary
- Strucutred the files and folder like I would do on an actual project 





