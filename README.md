# 🎓 ScholarMitra

### AI-Enabled Scholarship & Fellowship Management System for Scheduled Tribes

> **Smart Education | Smart India Hackathon (SIH) | Problem Statement: SIH26239**  
> **Ministry of Tribal Affairs, Government of India**

ScholarMitra is a proposed digital platform designed to simplify and modernize the scholarship and fellowship lifecycle for Scheduled Tribe students and applicants.

The platform brings **scholarship discovery, eligibility checking, application management, document verification, AI-assisted screening, application tracking and administrative review** into a single user-friendly system.

---

## 📌 Table of Contents

- [Problem Statement](#-problem-statement)
- [Our Solution](#-our-solution)
- [Objectives](#-objectives)
- [Key Features](#-key-features)
- [User Roles](#-user-roles)
- [Application Workflow](#-application-workflow)
- [AI-Powered Verification](#-ai-powered-verification)
- [System Architecture](#-system-architecture)
- [Architecture Components](#-architecture-components)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Modules](#-available-modules)
- [Data & Security](#-data--security)
- [Government Integration](#-government-integration)
- [Current Prototype](#-current-prototype)
- [Future Scope](#-future-scope)
- [Expected Impact](#-expected-impact)
- [References](#-references)
- [Team](#-team)

---

## 🚨 Problem Statement

Scholarship and fellowship programs provide important financial support to students, but applicants can face difficulties such as:

- Finding the scholarship or fellowship that matches their profile
- Understanding eligibility criteria across different schemes
- Managing multiple application requirements
- Uploading and validating supporting documents
- Tracking application progress
- Understanding why an application requires correction or additional information

From the administration side, large volumes of applications can create challenges in document screening, eligibility verification, identifying duplicate or inconsistent information, managing workflows, and maintaining transparent status tracking.

ScholarMitra proposes a centralized digital workflow to address these challenges.

---

## 💡 Our Solution

ScholarMitra provides a single platform where an applicant can:

1. Create an account and maintain a profile
2. Discover relevant scholarships and fellowships
3. Check eligibility before applying
4. Submit an application digitally
5. Upload supporting documents
6. Receive AI-assisted document verification
7. Correct issues identified during screening
8. Track the application through every stage
9. Receive notifications and updates

Administrators receive a dedicated dashboard to review applications, monitor verification status, inspect AI-generated verification results, handle exceptions and monitor scheme-level statistics.

The objective is to create a **transparent, accessible and scalable scholarship-management ecosystem**.

---

## 🎯 Objectives

### For Applicants

- Simplify scholarship discovery
- Reduce confusion around eligibility requirements
- Make applications easier to complete
- Reduce document-related errors
- Provide clear application status tracking
- Improve transparency throughout the process

### For Administrators

- Reduce repetitive manual screening
- Centralize applications and documents
- Support AI-assisted verification
- Prioritize applications requiring human attention
- Improve monitoring and reporting
- Maintain an auditable application workflow

---

## ✨ Key Features

### 👨‍🎓 Applicant Dashboard

- Personalized dashboard
- Application summary
- Application progress timeline
- Pending actions
- Recent notifications
- Recommended schemes

### 🔎 Scholarship & Fellowship Discovery

Applicants can browse schemes using information such as:

- Scheme category
- Academic level
- Eligibility
- Financial support
- Application period
- Required documents

Example schemes represented in the prototype include:

- National Fellowship for Scheduled Tribe Students (NFST)
- National Overseas Scholarship (NOS)
- Top Class Education for ST Students

> Scheme details in the prototype are illustrative and should be validated against the latest official Ministry of Tribal Affairs guidelines before production deployment.

### 📄 Digital Application Management

- Structured application forms
- Application status
- Document checklist
- Submission tracking
- Correction workflow
- Application history

### 🤖 AI-Assisted Verification

The proposed AI layer can assist with:

- OCR-based document extraction
- Document classification
- Field validation
- Eligibility matching
- Duplicate/anomaly detection
- Confidence scoring
- Human review routing

### 👨‍💼 Administration Dashboard

Administrators can monitor:

- Total applications
- Applications under review
- Verification status
- Pending actions
- Approval/rejection workflow
- AI verification queue
- Scheme analytics

### 📊 Analytics

The dashboard can provide:

- Application funnel
- Scheme-wise applications
- Verification statistics
- Processing status
- Approval trends
- Pending-review counts

### 🔔 Notifications

The proposed platform can notify applicants about:

- Application submission
- Document issues
- Verification results
- Correction requests
- Approval/rejection
- Important deadlines

---

## 👥 User Roles

### Applicant

```text
Register
   ↓
Create Profile
   ↓
Discover Schemes
   ↓
Check Eligibility
   ↓
Apply
   ↓
Upload Documents
   ↓
AI Verification
   ↓
Correction / Review
   ↓
Application Processing
   ↓
Decision
   ↓
Track Status
```

### Administrator

```text
Admin Login
   ↓
Dashboard
   ↓
View Applications
   ↓
AI Verification Queue
   ↓
Review Documents
   ↓
Verify Eligibility
   ↓
Approve / Request Correction / Reject
   ↓
Update Application Status
   ↓
Analytics & Reporting
```

---

# 🔄 Application Workflow

```text
Applicant Registration
        ↓
Profile Completion
        ↓
Scheme Discovery
        ↓
Eligibility Check
        ↓
Online Application
        ↓
Document Upload
        ↓
AI Verification
        ↓
   ┌────┴────┐
   ↓         ↓
 Valid      Issue
   ↓         ↓
   │     Correction
   │         │
   └────┬────┘
        ↓
Human / Official Verification
        ↓
Decision / Approval
        ↓
Applicant Notification
        ↓
Application Tracking
```

---

# 🤖 AI-Powered Verification

ScholarMitra proposes a human-in-the-loop AI verification pipeline.

### Verification Pipeline

```text
Uploaded Document
       │
       ▼
OCR / Text Extraction
       │
       ▼
Document Classification
       │
       ▼
Field Extraction
       │
       ▼
Field Validation
       │
       ▼
Eligibility Matching
       │
       ▼
Duplicate / Anomaly Detection
       │
       ▼
Confidence Score
       │
       ├───────────────┐
       ▼               ▼
High Confidence    Low Confidence
       │               │
       ▼               ▼
Auto Verification   Human Review
       │               │
       └───────┬───────┘
               ▼
       Final Verification
```

### AI Components

| Component | Purpose |
|---|---|
| OCR | Extract text from uploaded documents |
| Document Classifier | Identify document type |
| Field Extraction | Extract names, dates, IDs and other fields |
| Validation Engine | Check extracted information for consistency |
| Eligibility Engine | Compare applicant information with scheme rules |
| Anomaly Detection | Identify suspicious or inconsistent records |
| Confidence Scoring | Estimate reliability of automated verification |
| Human Review | Handle uncertain cases and exceptions |

### Human-in-the-Loop Principle

AI is intended to **assist officials rather than replace official decision-making**.

Cases with low confidence, conflicting information or detected anomalies can be routed to administrators for manual review.

---

# 🏗️ System Architecture

The proposed production architecture follows a modular service-oriented approach.

![ScholarMitra System Architecture](docs/system-architecture.png)

### Architecture Overview

```text
                    ┌───────────────────────┐
                    │       USERS           │
                    │ Applicant / Admin     │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │ ScholarMitra Web UI   │
                    │ Dashboard • Forms     │
                    │ Schemes • Tracking    │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │    Backend API Layer  │
                    └───────────┬───────────┘
                                │
          ┌─────────────────────┼──────────────────────┐
          │                     │                      │
          ▼                     ▼                      ▼
 ┌────────────────┐   ┌────────────────┐    ┌────────────────┐
 │ Authentication │   │ Application    │    │ Scheme Service │
 │ & RBAC         │   │ Management     │    │                │
 └────────────────┘   └────────────────┘    └───────┬────────┘
                                                     │
                                                     ▼
                                            ┌─────────────────┐
                                            │ Scheme Database │
                                            └─────────────────┘

          ┌─────────────────────┬──────────────────────┐
          │                     │                      │
          ▼                     ▼                      ▼
 ┌────────────────┐   ┌────────────────┐    ┌────────────────┐
 │ Document       │   │ AI Verification│    │ Notification   │
 │ Management     │   │ Engine         │    │ Service        │
 └───────┬────────┘   └───────┬────────┘    └────────────────┘
         │                    │
         ▼                    ├── OCR
 ┌────────────────┐           ├── Eligibility
 │ Secure Storage │           ├── Anomaly Detection
 └────────────────┘           └── Confidence Scoring

                                │
                                ▼
                    ┌───────────────────────┐
                    │ Government / DBT      │
                    │ Integrations          │
                    └───────────────────────┘
```

---

# 🧩 Architecture Components

| Layer | Component | Responsibility |
|---|---|---|
| Presentation | Web UI | Applicant and administrator interface |
| Authentication | Auth Service | Login, registration and role management |
| Application | Application Service | Application creation and processing |
| Scheme | Scheme Service | Scholarship/fellowship catalogue |
| Document | Document Service | Upload, validation and storage |
| AI | Verification Engine | AI-assisted document and eligibility verification |
| Tracking | Tracking Service | Application lifecycle and status |
| Notification | Notification Service | Email/SMS/portal notifications |
| Data | Database | Users, schemes, applications and verification data |
| Storage | Document Storage | Supporting documents |
| Integration | Government APIs | Authorised external data exchange |
| Analytics | Analytics Layer | Dashboards, reports and statistics |

---

# 🛠️ Technology Stack

## Current Prototype

| Technology | Usage |
|---|---|
| HTML5 | Application structure |
| CSS3 | Responsive UI and visual design |
| JavaScript | Frontend interactions |
| Node.js | Lightweight local development server |
| Git / GitHub | Version control |

The current prototype intentionally uses a lightweight dependency-free setup to make local execution simple and reliable.

## Proposed Production Stack

```text
Frontend
├── React / Next.js
├── TypeScript
└── Responsive UI

Backend
├── Node.js / Python
├── REST APIs
└── Authentication & RBAC

Database
├── PostgreSQL
└── Redis (optional caching)

AI / ML
├── OCR
├── NLP / Document Processing
├── Eligibility Engine
└── Anomaly Detection

Storage
└── Secure Object Storage

Infrastructure
├── Docker
├── CI/CD
├── Cloud / Government Infrastructure
└── Monitoring & Logging
```

---

# 📁 Project Structure

The current frontend prototype follows this structure:

```text
ScholarMitra/
│
├── public/
│   ├── index.html
│   ├── app.js
│   └── styles.css
│
├── package.json
├── server.mjs
├── README.md
│
└── docs/
    └── system-architecture.png
```

> The exact structure may evolve as backend and AI services are added.

---

# 🚀 Getting Started

## Prerequisites

Install:

- Node.js
- npm
- Git

Check your installation:

```bash
node -v
npm -v
git --version
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/ScholarMitra.git
```

Enter the project:

```bash
cd ScholarMitra
```

Install dependencies:

```bash
npm install
```

## Run the Project

```bash
npm run dev
```

Open the local URL shown in the terminal, typically:

```text
http://localhost:5173
```

---

# 🖥️ Available Modules

### Applicant Side

- Dashboard
- My Applications
- Scholarships & Schemes
- Application Progress
- Document Verification
- Notifications
- Help Centre
- Profile / Settings

### Administrator Side

- Admin Dashboard
- Application Management
- AI Verification Queue
- Analytics
- Scheme Management
- Review Workflow
- Application Status Monitoring

---

# 🎨 UI / UX Design

ScholarMitra follows a government-tech dashboard design philosophy focused on clarity and accessibility.

### Design Principles

- Clean information hierarchy
- Minimal cognitive load
- Clear application statuses
- Responsive layout
- Accessible typography
- Consistent visual components
- Action-oriented dashboards
- Transparent progress indicators

---

# 🔐 Data & Security

Security is a core requirement because scholarship applications can contain sensitive personal and financial information.

The proposed production system should implement:

- HTTPS/TLS
- Role-Based Access Control (RBAC)
- Secure authentication
- Strong password policies
- Session/token security
- Encryption at rest for sensitive data
- Secure document storage
- Input validation
- File-type and file-size validation
- Audit logging
- Access logging
- Rate limiting
- Backup and recovery
- Controlled administrator privileges

### Privacy by Design

Only information required for scholarship processing should be collected and retained.

Access to applicant documents should be restricted according to user role and operational requirements.

---

# 🏛️ Government Integration

ScholarMitra is designed with future integration capability for authorised government systems and data sources.

Potential integration areas include:

- Ministry of Tribal Affairs scheme information
- DBT-related scholarship information
- Identity verification systems
- Academic verification systems
- Bank/payment verification systems
- SMS/email notification infrastructure

Official APIs, authentication mechanisms, data-sharing agreements and government integration requirements would need to be established before production deployment.

### Reference Sources

- Ministry of Tribal Affairs Scholarship Information  
  https://tribal.nic.in/ScholarshiP.aspx

- DBT Tribal Affairs Scheme Information  
  https://dbttribal.gov.in/AllScheme.aspx

---

# 📊 Proposed Application Status Model

```text
DRAFT
  ↓
SUBMITTED
  ↓
DOCUMENT VERIFICATION
  ↓
ELIGIBILITY VERIFICATION
  ↓
UNDER REVIEW
  ↓
APPROVED / REJECTED
  ↓
DISBURSEMENT
  ↓
COMPLETED
```

Applications requiring corrections can follow:

```text
DOCUMENT VERIFICATION
        ↓
CORRECTION REQUIRED
        ↓
APPLICANT
        ↓
DOCUMENT RESUBMISSION
        ↓
DOCUMENT VERIFICATION
```

---

# 📈 Proposed Analytics

The administrator dashboard can provide:

### Application Metrics

- Total applications
- Submitted applications
- Applications under verification
- Applications requiring correction
- Approved applications
- Rejected applications

### Verification Metrics

- Documents processed
- AI verification success rate
- Manual review queue
- Average verification time
- Anomaly detection count

### Scheme Metrics

- Applications per scheme
- Eligibility distribution
- Application conversion
- Approval distribution
- Geographic/academic distribution where legally and operationally appropriate

---

# 🌱 Scalability

ScholarMitra is designed to scale from a prototype into a national-level platform.

### Horizontal Scaling

Backend services can be independently scaled based on workload.

### Asynchronous Processing

Document processing and AI verification can be moved to background workers so that large uploads do not block application requests.

### Caching

Frequently accessed scheme information can be cached to reduce database load.

### Modular Services

Authentication, applications, schemes, documents, AI verification and notifications can evolve as independently managed services.

---

# 🧪 Testing Strategy

A production implementation should include:

### Unit Testing

Testing individual functions and business rules.

### Integration Testing

Testing communication between:

- Frontend
- Backend APIs
- Database
- Document storage
- AI services

### UI Testing

Testing:

- Forms
- Navigation
- Responsive layouts
- Application workflows

### Security Testing

Testing:

- Authentication
- Authorization
- File uploads
- API access
- Input validation
- Data exposure

### Performance Testing

Testing the system under large numbers of simultaneous applications and document uploads.

---

# 🚀 Current Prototype

The current ScholarMitra project is a **frontend demonstration/prototype** created for the SIH problem statement.

It demonstrates the proposed user experience through:

- Applicant dashboard
- Admin dashboard
- Scholarship discovery
- Application tracking
- AI verification interface
- Application management
- Analytics
- Notifications
- Responsive UI

The current prototype uses mock/static data for demonstration.

### Important

The prototype does **not** represent a production government system and should not be interpreted as having live access to Ministry, DBT, identity, banking or academic databases.

AI verification and government integrations shown in the architecture are proposed production capabilities.

---

# 🔮 Future Scope

## Phase 1 — Prototype

- UI/UX
- Applicant dashboard
- Admin dashboard
- Scheme catalogue
- Application tracking
- AI verification interface

## Phase 2 — Backend

- User authentication
- Database
- Application APIs
- Document storage
- Notification service

## Phase 3 — AI Integration

- OCR
- Document classification
- Eligibility engine
- Anomaly detection
- Confidence scoring
- Human review workflow

## Phase 4 — Government Integration

- Authorised scheme data APIs
- Identity verification
- Academic verification
- DBT/payment integration
- Official notification infrastructure

## Phase 5 — Production

- Security audit
- Performance testing
- Monitoring
- Disaster recovery
- Accessibility testing
- Deployment on approved infrastructure

---

# 🌍 Expected Impact

### Applicants

- Easier scheme discovery
- Clearer eligibility information
- Fewer document-related errors
- Better application visibility
- Faster feedback

### Administrators

- Reduced repetitive screening
- Centralized application management
- AI-assisted verification
- Better prioritization of manual reviews
- Improved analytics

### System-Level Benefits

- Greater process transparency
- Better monitoring
- Scalable digital workflow
- Consistent verification processes
- Improved applicant communication

---

# 🏆 Smart India Hackathon Context

**Problem Statement:** SIH26239

**Title:** AI-Enabled Scholarship and Fellowship Management System for Scheduled Tribes

**Organization:** Ministry of Tribal Affairs

**Theme:** Smart Education

ScholarMitra addresses this problem through a proposed centralized platform combining scholarship discovery, application management, AI-assisted verification, administrative review and application tracking.

---

# 📚 References

1. Ministry of Tribal Affairs — Scholarship Information  
   https://tribal.nic.in/ScholarshiP.aspx

2. DBT Tribal Affairs — Scheme Information  
   https://dbttribal.gov.in/AllScheme.aspx

> Always verify scheme names, eligibility criteria, financial amounts, deadlines and operational rules against the latest official government notifications before production implementation.

---

# 👨‍💻 Team

**Project:** ScholarMitra  
**SIH Problem Statement:** SIH26239  
**Theme:** Smart Education  
**Organization:** Ministry of Tribal Affairs

### Team Members

Add your team members here:

```text
1. Name — Role
2. Name — Role
3. Name — Role
4. Name — Role
5. Name — Role
6. Name — Role
```

---

# 📄 License

This project is developed as a prototype for educational and hackathon purposes.

Production deployment, government integration and use of official data should follow the applicable government policies, licenses, security requirements and data-protection requirements.

---

## ⭐ ScholarMitra

> **Making scholarship access simpler, verification smarter, and application tracking more transparent.**


## Run

```bash
npm install
npm run dev
```

Then open **http://localhost:5173**.

Works with your Windows x64 + Node v24.19.0 setup, including Git Bash.
