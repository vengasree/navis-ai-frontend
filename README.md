# Navis AI - Personal AI Security Agent

Navis AI is a web application that helps users stay safe from online scams and phishing. The user pastes an email, SMS, or chat message, and Navis AI analyses it and explains whether it is safe or risky.

This repository contains the **frontend** (React + Vite). The backend (Flask) is developed separately.

## Features

- Paste any email, SMS, or chat message and click **Analyse**
- Risk Level: Low / Medium / High
- Final Decision: Safe or Risky, with clear reasons
- Clarifying questions for Medium risk ("Do you know this sender?", "Were you expecting this message?")
- Final recommendation based on the user's answers
- Modern dark theme with cyan accents, works on desktop and phone screens

## Tech Stack

- React
- Vite
- CSS

## Project Structure

```
src/
  api/analyse.js              Sends the message to the Flask backend
  components/
    Header.jsx                Title and tagline
    MessageBox.jsx            Text box and Analyse button
    ResultCard.jsx            Risk level, decision, and reasons
    ClarifyQuestions.jsx      Questions for Medium risk
  App.jsx                     Main page
  App.css                     Styles
```

## How to Run

1. Install Node.js
2. Open a terminal in this folder
3. Run `npm install`
4. Run `npm run dev`
5. Open http://localhost:5173/

## Connecting to the Backend

Open `src/components/MessageBox.jsx` and change:

```
const USE_BACKEND = false
```

to `true`. The backend address is set in `src/api/analyse.js`.

## Future Scope

- Continuous background monitoring of emails and messages
- Automatic threat detection without manual pasting
- File and attachment scanning
- Mobile application version
- Fully autonomous protection mode