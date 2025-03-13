Note: - (Deprecated) This Repsitory Was Intended to Learn Web Development Core Concepts by Building a Feature Rich Travel Advisor App Integrating With API's that Return Useful Data on Restaurants, Hotels and Attractions Near You. Note: The Original Course is No Longer Maintained and Some of the Core Concepts/Apps Have Since Been Updated or Removed See Note As from Author: 

(Deprecated - https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/)
**Legacy: This course is no longer maintained
This course no longer receives yearly updates and will no longer be maintained as we transition away from Udemy as we have moved 100% to our own ZTM Academy. This course and its updated version will only be available there. **

Overview

This repository contains a React-based application that integrates external APIs to provide location-based services. The project was initially created as part of a learning journey into web development and API integration.

**Security Improvements**

Following a recent security audit, the following measures have been taken to enhance security:

Obfuscated API Keys: All API keys have been removed from the repository and are now managed securely via environment variables.

Git History Cleanup: Historical commits containing exposed credentials have been purged using BFG Cleaner, followed by a thorough repository pruning and force-push to ensure a clean state.

Proactive Secret Scanning: Integrated ggshield to scan for secrets before committing code, preventing future accidental leaks.

Google Maps API Key Removed: The script component referencing the API key was removed from index.html.

**Features**

Displays location-based data using external APIs

Provides an interactive map interface

Filters locations based on type and rating


**Lessons Learned**

This project has been a significant learning experience in:

Secure handling of API keys and sensitive information

Best practices for managing a Git repository securely

Integrating third-party APIs in a React application

Cleaning up Git history to remove exposed credentials


**Contributions & Feedback**

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions for improvements. If you find any issues, feel free to report them.

Note: If you are using API keys, please refer to official Google documentation for help: https://cloud.google.com/api-keys/docs/how-to?hl=en and always ensure your keys are stored securely in environment variables.

