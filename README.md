# HTTP Module

Adding two scripts in package.json

`  
"scripts": {
    "start": "node index",
    "dev" : "nodemon index"
  },
 `
 
![image](https://user-images.githubusercontent.com/86548591/148643511-5873b876-b5ba-42d5-beea-5b0ee42e6b5e.png)

=> Notes : 
1. `start` is for deployment and production
2. `dev` is for development

Run `npm run script-name` i.e `npm run dev` in terminal

![image](https://user-images.githubusercontent.com/86548591/148643613-73fd1153-e347-4226-9f44-93a26dba0cd1.png)

Check output on http://localhost:3000/ in browser

=> Reason to use `npm run dev` is to avoid restarting of terminal again and again due to changes
