# NestJS TIL (Today I Learn)

Welcome to my NestJS TIL (Today I Learn) repository! This is a collection of utilities, decorators, guards, and more that I build as I deepen my understanding of the NestJS framework. Each piece of code here is intended to enhance the functionality and robustness of NestJS applications.

## 📚 Overview

This repository is part of my ongoing TIL initiative, where I document and share what I learn on a daily basis. The idea is to create a resource that helps me and others in the community to build better, more efficient applications with NestJS.

## 🚀 Implemented Features

Here’s a rundown of the features I’ve added so far. These are designed to be easily pluggable into any NestJS project, helping you enhance your application’s capabilities.

1. [**🔗 Basic CRUD Service:**](apps/basic-crud-service/README.md) A generic service that provides Create, Read, Update, and Delete operations for a given entity, making it easy to manage database interactions. 

## 🛠️ Future Additions

Here are some features I plan to add in the near future:

1. **Custom Decorator for Validation:** A decorator that adds custom validation logic to route parameters or request bodies, helping to enforce business rules at the controller level.
2. **Global Error Filter:** A filter that standardizes the way errors are handled across the application, providing consistent and user-friendly error messages.
3. **Simple Rate Limiter:** A guard that limits the number of requests an IP address can make to specific endpoints within a given timeframe, useful for protecting against brute-force attacks.
4. **Custom Pipe for Data Transformation:** A pipe that transforms and validates incoming data before it reaches the controller, ensuring that your application processes data in the expected format.
5. **Role-based Access Guard:** A guard that checks the user’s role before allowing access to certain routes, implementing role-based access control (RBAC) in your application.
6. **Caching with Redis:** A service that caches frequently accessed data in Redis, reducing the load on your database and improving response times.
7. **Event Emitter:** A service that enables decoupling different parts of the application by emitting and listening to events, promoting a more modular architecture.
8. **File Download Endpoint:** A controller that handles file downloads, setting appropriate headers to ensure smooth and secure file transfers.
9. **Health Check Endpoint:** An endpoint that checks the status of various application components (like database connections) and returns a summary, useful for monitoring and alerts.

Feel free to use, modify, or contribute to this repository. Your feedback and contributions are welcome!
