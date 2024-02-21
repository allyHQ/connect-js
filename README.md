# AllyConnect Usage Guide

AllyConnect is a JavaScript class designed to facilitate seamless integration of the AllyConnect widget into web applications. Follow the steps below to integrate and utilize AllyConnect in your project:

### Installation

You can install AllyConnect via npm:

```bash
npm i @ally.wtf/connect
```

### Usage

1. **Import AllyConnect:** Import the AllyConnect class into your JavaScript file.
   
   ```javascript
   let AllyConnect = require("@ally.wtf/connect");
   ```

2. **Instantiate AllyConnect:** Create a new instance of AllyConnect by providing your unique `appId`.

   ```javascript
   const ally = new AllyConnect('your_app_id');
   ```

3. **Open the Widget:** Call the `openWidget()` method to launch the Ally Connect widget.

   ```javascript
   ally.openWidget();
   ```

4. **Handling Events:** You can handle events emitted by the AllyConnect widget using the on() method. Supported events include `ready`, `select_bank`, `connecting`, `connected` & `auth_expired`.

   ```javascript
   ally.on('connecting', (data) => {
        // Handle close event
   });
   
   ally.on('connected', (data) => {
        // Handle close event
   });

   ally.on('auth_expired', (data) => {
        // Handle close event
   });
   ```

### Example

```javascript
const AllyConnect = require('@ally.wtf/connect');

// Instantiate AllyConnect
const ally = new AllyConnect('your_app_id');

// Open the Widget
ally.openWidget();

// Handle close event
ally.on('close', (data) => {
    console.log('Widget closed', data);
});
```

For more examples [check here](https://github.com/allyHQ/connect-js/tree/main/examples)

### Contributing

If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on [GitHub](https://github.com/allyHQ/connect-js).

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/allyHQ/connect-js/blob/main/LICENSE.md) file for details.

### Support

For any inquiries or assistance, contact [support@ally.wtf](support@ally.wtf).
