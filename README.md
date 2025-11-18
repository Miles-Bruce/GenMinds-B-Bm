# GenMinds - Enterprise Intelligence Asset Platform

## Description

GenMinds is an enterprise platform designed for managing AI intelligence assets (prompts, templates, workflows, personas) with versioning, evaluation, and licensing capabilities. This platform acts as an infrastructure layer for creators, allowing individual users to license their prompts and showcase their AI portfolios. GenMinds aims to standardize AI asset management, improve the stability and quality of AI outputs, and enforce quality safeguards, ensuring traceability and benchmarking for AI development. The platform is designed to streamline the operationalization of AI within an enterprise environment.

## Key Features

*   **AI Asset Management:** Manage prompts, templates, workflows, and AI personas in a centralized platform.
*   **Versioning:** Track changes to AI assets with a robust versioning system.
*   **Licensing:** Enable individual users to license their prompts and creations.
*   **Portfolio Showcase:** Provide a platform for creators to showcase their AI portfolios.
*   **Evaluation:** Evaluate the performance and quality of AI assets.
*   **User-Friendly UI/UX:** Easy-to-understand and use interface for seamless navigation.

## Tech Stack

*   **Frontend:**
    *   React
    *   TypeScript
    *   TailwindCSS
*   **Backend:**
    *   Node.js
    *   Express
*   **Database & Infrastructure:**
    *   Firebase Authentication
    *   Firestore
    *   BigQuery
    *   Google Cloud Run

## Architecture

GenMinds utilizes a cloud-native serverless architecture. The frontend is built with React and deployed on Google App Engine. The backend, built with Node.js and Express, runs on Google Cloud Run. Firebase Authentication handles user identity. Firestore stores metadata. BigQuery generates analytics.

[**Add a diagram or more detailed explanation of the data flow here**]
<img width="1024" height="1024" alt="genminds_architecture_diagram" src="https://github.com/user-attachments/assets/0d961a4b-adb9-4492-98d1-78562102d6d2" />

## Status

This project is currently in development.



