# shopifybackend2022
Shopify Backend Developer Intern Challenge Summer 2022

## Installation

1. Ensure that [Node.js](https://nodejs.org/en/download/), [Sqlite3](https://www.sqlite.org/download.html) and [Git](https://git-scm.com/downloads) are installed.
2. Clone the repository or [download the zip](https://github.com/nathanlytang/shopifybackend2022/archive/refs/heads/master.zip).
```
git clone https://github.com/nathanlytang/shopifybackend2022
```
3. Install packages for both the client and server.
```bash
cd shopifybackend2022/client
npm install
cd ../server
npm install
```

## Usage
1. Start the server in a terminal window
```bash
cd server
npm run production
```
2. Start the client in another terminal window
```bash
cd client
npm run production
```

The webpage is now available on http://127.0.0.1:3000/ or http://localhost:3000/.

* To add an item, click on the add button and add the name, description, and stock available.

* To edit an item, double-click on the field you wish to edit.  Hit the `enter` key to save.

* To delete an item, click on the checkbox corresponding to the items you wish to delete, then press the delete button under the table.

* To export as CSV, click the export button.

## Notes
If running on a separate system, the `.env` file must be edited.  The IP address must be changed from `localhost` to the IP address of the server.
```dosini
REACT_APP_API_URL=http://localhost:9000 # change localhost
```
Then rebuild the client.
```bash
cd client
npm run build
```