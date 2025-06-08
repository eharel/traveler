# Traveler - Track Your Journeys

Traveler is a React and TypeScript-based web application designed to help you keep track of the cities and countries you've visited. Whether you're an avid traveler or just starting to explore the world, this app makes it easy to organize and visualize your adventures.

![Traveler App Screenshot](/public/images/traveler-screenshot.png)

## Features

- **Add Locations**: Easily add cities and countries to your travel log with details like visit dates and notes.
- **View Your Travels**: See a list of all the places you've visited with filtering and sorting options.
- **Interactive Map**: Visualize your travels on an interactive map powered by Leaflet.
- **Travel Statistics**: Get insights about your travel history and patterns.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Offline Support**: Access your travel data even without an internet connection.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/traveler.git
   cd traveler
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the JSON server (for development data):

   ```bash
   npm run server
   ```

4. In a new terminal, start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for more robust code
- **Vite**: Fast development environment and build tool
- **React Router**: For navigation and routing
- **Leaflet & React-Leaflet**: Interactive map visualization
- **JSON Server**: Simulated backend for development
- **React DatePicker**: For handling date inputs
- **ESLint**: Linting for consistent and error-free code

## Data Structure

The application stores your travel data in a JSON format with the following structure:

```json
{
  "cities": [
    {
      "id": "1",
      "cityName": "Paris",
      "country": "France",
      "emoji": "🇫🇷",
      "date": "2023-10-31T15:59:59.138Z",
      "notes": "Beautiful city with amazing architecture!"
    }
  ]
}
```

## Project Structure

```
traveler/
├── data/                # JSON data files
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── contexts/        # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Application pages/routes
│   ├── services/        # API and data services
│   └── utils/           # Helper functions
└── ...
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Roadmap

- [ ] User authentication and profiles
- [ ] Cloud synchronization
- [ ] Travel statistics and insights
- [ ] Social sharing features
- [ ] Trip planning functionality
