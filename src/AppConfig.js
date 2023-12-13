const AppConfig = {
    openWheather: {
        baseUrl: process.env.OPEN_WEATHER_URL ?? 'https://api.openweathermap.org',
        appId:  process.env.OPEN_WEATHER_APP_ID ?? '7ea4dfa41ddd589c0451617c79a62729'
    },
    bracket: {
        baseUrl: process.env.OPEN_BRACKET_URL ?? 'http://localhost:8080'
    }
}

export default AppConfig