

### 🔹 1. Running in Node.js or a Non-Browser Environment
📌 **Issue:** localStorage is part of the Web API and does not exist in Node.js.
💡 **Solution:** Use a package like node-localstorage to enable local storage in Node.js.
- Open Terminal
  - npm install node-localstorage
- Then use it in your Node.js code:  

   ```js
  const { LocalStorage } = require('node-localstorage');
  const localStorage = new LocalStorage('./scratch'); // 'scratch' is a folder

  localStorage.setItem('theme', 'dark'); // Saves 'theme=dark' in a file
  console.log(localStorage.getItem('theme')); // Output: dark

   ```   

>Here, **./scratch** is a folder where the localStorage data will be saved as files. If the folder doesn’t exist, it will be created automatically.

#### 🗂 Where is the Data Stored?
The data is stored in the scratch directory (inside your project folder). You can check it manually by navigating to the folder.

#### 🔹 Can I Use a Different Folder?
Yes! You can specify any path instead of ./scratch. **Example:**
```js
const localStorage = new LocalStorage('./myStorage'); // Stores data in 'myStorage' folder
```
#### 🔴 If You Don’t Use ./scratch?
If you don’t provide a path, node-localstorage won’t know where to save data and will throw an error.

#### ✅ Final Takeaway
- ./scratch is just a storage folder for node-localstorage in Node.js.
- In browsers, localStorage is managed automatically, so no need for a folder.
- You can change the folder name or location as per your project needs.


---
---
## **INTRODUCTION**
> **Web Storage API** allows websites to store data in the browser, making web apps faster and more efficient. Let's dive deep into **Local Storage** and **Session Storage** with examples, best practices and advanced features!  

---

### 📝 **What is Web Storage API?**  

The **Web Storage API** is a **JavaScript API** that allows websites to store small amounts of data directly in the **browser**. The stored data is:  

✅ **Persistent** (Local Storage) or **temporary** (Session Storage)  
✅ **Faster** than traditional cookies  
✅ **Stored in key-value pairs**  

---

### 📖 **Types of Web Storage**  

| 🔥 Feature          | 🗃️ Local Storage | 🕒 Session Storage |
|---------------------|----------------|-------------------|
| **Lifespan**        | Forever until deleted | Only during the session |
| **Cleared on?**     | Manual deletion by user | Closing the tab/window |
| **Scope**          | Available across all tabs/windows | Available only in the current tab |
| **Storage Limit**  | ~5MB per origin | ~5MB per origin |
| **Accessibility**  | Accessible from all browser windows | Limited to the current tab |

---

### 👇 **Step-by-Step Guide with Examples**  


#### 🏷️ **1. Local Storage (Persistent Data):**  

Local Storage keeps data even after the browser is **closed**.  

🧩 **Example:** Storing, retrieving, and deleting data in **Local Storage**  

```javascript
// ✅ Store data
localStorage.setItem('theme', 'dark');

// ✅ Retrieve data
let theme = localStorage.getItem('theme');
console.log(theme); // Output: dark

// ❌ Remove a single item
localStorage.removeItem('theme');

// 🔄 Clear all storage
localStorage.clear();
```

---

#### 🔄 **2. Session Storage (Temporary Data):**  


Session Storage keeps data only while the **browser tab** is open.  

🧩 **Example:** Storing, retrieving, and deleting data in **Session Storage**  

```javascript
// ✅ Store data
sessionStorage.setItem('authToken', 'xyz123');

// ✅ Retrieve data
let token = sessionStorage.getItem('authToken');
console.log(token); // Output: xyz123

// ❌ Remove a single item
sessionStorage.removeItem('authToken');

// 🔄 Clear all storage
sessionStorage.clear();
```

---

### 🎭 **Advanced Feature: Storing Objects in Web Storage**  

By default, Web Storage **only supports strings**. To store objects, use **`JSON.stringify()`** and **`JSON.parse()`**.  

🧩 **Example: Storing and retrieving an object**  

```javascript
// ✅ Storing an object in Local Storage
let user = { name: "Alice", age: 25 };
localStorage.setItem('user', JSON.stringify(user));

// ✅ Retrieving the object
let storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name);  // Output: Alice
```

---

### 🛠️ **Debugging Web Storage in Browser**  

You can **view and manage Web Storage** using Developer Tools:  

1️⃣ **Open DevTools** → Press `F12` or `Ctrl + Shift + I`  
2️⃣ **Go to Application Tab**  
3️⃣ **Expand Storage → Local Storage / Session Storage**  
4️⃣ **View, edit, or delete stored data**  

🖼️ **Example Screenshot:**  
📷 `![DevTools Example](./images/devtools_web_storage.png)`

---

### ⚡ **Best Practices for Web Storage**  

✔️ **Do NOT** store sensitive information (e.g., passwords, tokens)
✔️ **Use JSON** for complex data
✔️ **Keep storage size** minimal (Limit is ~5MB per origin)
✔️ **Clear old data** periodically to free up space
✔️ **Use Web Storage** for temporary and non-critical data  

---

### 📝 **When to Use Web Storage?**  

✅ ***Good Use Cases:***
✔️ Theme preferences (dark/light mode)
✔️ User-selected language settings
✔️ Caching API responses (temporary)
✔️ Shopping cart data (before checkout)

❌ ***Avoid Web Storage for:***
🚫 Sensitive user data (use **server-side** storage instead) 
🚫 Large data sets (use **IndexedDB** for larger data)  

---

### 🔥 **Web Storage vs. Cookies - What's the Difference?**  

| Feature         | 🍪 Cookies | 🏪 Web Storage |
|---------------|-----------|-------------|
| **Storage Limit** | ~4KB | ~5MB |
| **Data Expiry** | Manually set | LocalStorage: Forever, SessionStorage: Until tab closes |
| **Sent with Requests?** | Yes (sent to server) | No |
| **Security** | Less secure | More secure (not automatically shared with the server) |
| **Use Case** | Authentication, tracking | Storing non-sensitive user settings |

---

### ➡ **Conclusion**  ⬅

💡 The **Web Storage API** is a powerful tool for storing client-side data. Whether you need persistent storage (**Local Storage**) or session-based storage (**Session Storage**), the Web Storage API makes it easy to manage data efficiently.  

✅ **Use Local Storage** for long-term data  
✅ **Use Session Storage** for temporary data  
✅ **Use JSON for structured data**  

---

### 🎁 **Bonus: Quick Cheatsheet**  

```javascript
// ✅ Local Storage
localStorage.setItem('key', 'value');  // Store
localStorage.getItem('key');           // Retrieve
localStorage.removeItem('key');        // Remove item
localStorage.clear();                   // Clear all

// ✅ Session Storage
sessionStorage.setItem('key', 'value');
sessionStorage.getItem('key');
sessionStorage.removeItem('key');
sessionStorage.clear();
```

---