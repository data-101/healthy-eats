# Healthy Eats

## Stack
1. Ionic
2. React

## Requirements
1. Node must be installed.
2. Install Ionic 
```
npm install -g @ionic/cli
```

## Development Run
1. Install all dependencies
```
npm i
```
2. The application uses the following API: https://rapidapi.com/edamam/api/recipe-search-and-diet/. We need to generate a key from this page and and stored in the project in a file called secret.json.
```
{
    "key": "REPLACE_WITH_KEY_FROM_RAPIDAPI"
}
```
3. Then run the application 
```
ionic serve
```
4. The application is accessible at: http://localhost:8100/home
