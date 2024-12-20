// Both Local Storage and Session Storage are part of the Web Storage API provided by modern browsers. They allow developers to store key-value pairs in a user's web browser. These are often used to persist data without the need for server-side storage.

// Feature	       Local Storage	      Session Storage
// DataLifespan	Data persists even    Data is cleared when the browser or tab is closed.
//                 after the browser 
//                 is closed.	
// Scope	        Shared across all      Tab-specific; not shared across tabs or windows.
//                 tabs and windows of 
//                 the same origin.	
 
// Storage         Typically around        Typically around 5 MB.
//                 5-10 MB.	
	        
// API Methods
// Both localStorage and sessionStorage share the same methods:

// setItem(key, value):
// Adds a key-value pair to storage.
// getItem(key):
// Retrieves the value associated with a key.
// removeItem(key):
// Removes a specific key and its value.
// clear():
// Removes all key-value pairs from storage.
// key(index):
// Returns the key at a specific index.


//Example

function saveThemePreference(theme) {
    localStorage.setItem("theme", theme);
}

function applyThemePreference() {
    const theme = localStorage.getItem("theme");
    if (theme) {
        document.body.className = theme; // Apply saved theme
    }
}


saveThemePreference("dark-mode");


applyThemePreference();



