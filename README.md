# Async Order Processer and Management

This is an Angular-based web application for working directly with the NodeJS project [Async Order Processer](https://github.com/buck999/order-processer) managing and processing orders asynchronously. It includes features like order creation, visualization and pagination. The project is built with Angular Material for UI components and supports server-side rendering (SSR) for improved performance.
## Features

- **Order Management**: Create and view orders.
- **Pagination**: Navigate through large datasets with ease.
- **Server-Side Rendering (SSR)**: Optimized for performance and SEO.
- **Angular Material**: Modern UI components for a responsive design.
- **Form Validation**: Built-in validation for user inputs.
- **Error Handling**: User-friendly error dialogs for better UX.

## Project Structure

```
src/
├── app/
│   ├── orders/
│   │   ├── components/
│   │   ├── containers/
│   │   ├── guards/
│   │   ├── model/
│   │   ├── services/
│   ├── shared/
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
├── assets/
├── styles.scss
├── main.ts
├── main.server.ts
├── server.ts
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Angular CLI](https://angular.io/cli) (v19 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd order-processer-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development Server

Run the development server:
```bash
npm start
```
Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any source files.

## Build

To build the project for production:
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

## Running SSR

To serve the app with server-side rendering:
1. Build the project:
   ```bash
   npm run build
   ```

2. Start the SSR server:
   ```bash
   npm run serve:ssr:order-processer-app
   ```

3. Open `http://localhost:4200/` in your browser.

## Testing

Run unit tests:
```bash
npm test
```

## Proxy Configuration

The app uses a proxy configuration to redirect API calls to the backend server. Update the `src/proxy.conf.json` file to match your backend API URL.

## License

This project is licensed under the GNU General Public License v3.0.
