# Healthy Eats

Healthy Eats is a web-based grocery list application designed to help users make healthier choices when deciding whether or not to purchase red meat. 

This application relies on the following tools: 
1. Node.js
2. Ionic
3. React

## Installing Node
Installation instructions for Node.js can be found [here.](https://nodejs.dev/learn/how-to-install-nodejs)

## *Healthy Eats* Setup
After installing Node.js, install Healthy Eats using the following steps:
1. Clone the repository or download and unzip the code into a work directory.
2. Using a command prompt, navigate to the root directory of the project.
3. Install Ionic

## Installing Ionic
To install Ionic, run the following command on the command line:
```
npm install -g @ionic/cli (https://ionicframework.com/docs/intro/cli)
```

## Installing Dependencies
Once Ionic is installed, all remaining dependencies will need to be installed. 
**If dependencies are not installed the user will be met with a blank screen.**

To install dependencies run the following command:
```
npm i
```

## Starting *Healthy Eats*
To start *Healthy Eats* run the following commands:
```
ionic serve
```

This command will start a web server and will load the home page for *Healthy Eats*.

If the home page is not automatically loaded it can be loaded at:
http://localhost:8100/home

## Navigating *Healthy Eats*
This is a proof-of-concept version of *Healthy Eats* so some functionality is limited. The following steps can be followed to demo *Healthy Eats*:
1. In the **Search Bar** at the top of the screen type "Beef"
2. Press **Add**
3. Click on the **Beef** Icon on the left of the menu.
	- The **Beef** menu will be opened.
	- This page will provides a Health score and Environment Score, Alternative Options, Alternitive Ingredients, and Nutrition Information.
4. Right-click on the **Kung Pao Tofu** link under **Alternatives** and select *Open link in new tab*
	- This will open a new web browser tab that provides the user with the recipe page for *Kung Pao Tofu*.
		- This approach is needed until persistence can been implemented for when the user leaves and returns to the application.
5. Click and hold on the **Kung Pao Tofu** link and swipe left. This will present the link for **Vegan Spaghetti.**
6. Right-click on the **Vegan Spaghetti** link under **Alternatives** and select *Open link in new tab*
	- This will open a new web browser tab that provides the user with the recipe page for *Vegan Spaghetti*.
7. Click the **Back Arrow** in the browser to return to the **Beef** page.
8. Click the **Back Arrow** in the application to return to the home page.
9. In the **Search Bar** at the top of the screen type "Tofu"
10. Press **Add**
11. Click on the **Tofu** Icon on the left of the menu.
	- The **Tofu** menu will be opened.
		- There is a known caching bug where the **Beef** menu occasionally reloads. If this happens, press the **Back Arrow** in the application and click the **Tofu** icon one more time.
	- This page will provides a Health score and Environment Score, Dishes to Try, and Nutrition
12. Right-click on the **Tofu Curry** link under **Dishes to Try** and select *Open link in new tab*
	- This will open a new web browser tab that provides the user with the recipe page for *Tofu Curry*.
