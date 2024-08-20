<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/debsouryadatta/CourseX">
    <img src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1721889560/projects/CX_logo_u2eyid.png" alt="Logo" width="250" height="150">
  </a>

  <h3 align="center">CourseX</h3>

  <p align="center">
    CourseX - Unveil The Power of AI in Education. Generate courses with A.I.
    <br />
    <br />
    <a href="https://coursex.souryax.tech/">View Demo</a>
    ·
    <a href="https://github.com/debsouryadatta/CourseX/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/debsouryadatta/CourseX/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#coursex-demo">CourseX Demo</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#cloning-the-repository">Cloning the Repository</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#set-up-environment-variables">Set Up Environment Variables</a></li>
        <li><a href="#running-the-project">Running the Project</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Course Generator is an innovative web application built with Next.js, leveraging the power of AI to create comprehensive course content. This full-stack project showcases modern web development practices, combining the robustness of Prisma and PostgreSQL for database management with the sleek designs of Shadcn UI and Aceternity UI kit. The app integrates advanced AI capabilities using LangChain.js and the GROQ API for course generation, while also incorporating external services like YouTube and Unsplash APIs to enrich the learning experience. With features ranging from user authentication to social media interactions, PDF exports, and payment integration, Course Generator demonstrates a sophisticated approach to educational technology, blending AI-driven content creation with user-centric design and functionality.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### CourseX Demo
Check out the live demo of CourseX [here](https://coursex.souryax.tech/).


### Key Features
- AI-powered course generation using LangChain.js and GROQ API
- User authentication and authorization with NextAuth
- Responsive and modern UI design using Shadcn UI and Aceternity UI kit
- Dark mode support with next-themes
- Dynamic course creation interface
- Integration with YouTube API for relevant video content
- Unsplash API integration for course imagery
- Gallery page to showcase available courses
- Dynamic course pages with chapter navigation
- Social media features:
    - User profile pages
    - Course attribution (generated by)
    - Like, comment, and share functionality
    - Bookmark/save course feature
- PDF export functionality for entire course content using html2pdf.js
- Database management with Prisma and PostgreSQL
- Search functionality for courses and profiles with debounce throttling
- Enhanced profile page with followers, following, and total courses information
- Edit profile option with image upload to Cloudinary
- Course visibility control with invite codes
- Concept check component with AI-generated MCQs
- Stripe payment gateway integration for premium features
- Containerization with Docker and CI/CD pipeline with GitHub Actions


### Built With

- Next.js (React framework)
- Prisma (ORM)
- PostgreSQL (Database)
- Shadcn UI (for design)
- Aceternity UI kit (for design)
- LangChain.js (for AI course generation)
- GROQ API (for AI course generation)
- YouTube API (for video content)
- Unsplash API (for course imagery)
- html2pdf.js (for PDF export)
- Zustand (for state management)
- Lodash (for debounce functionality)
- Cloudinary (for image upload)
- Stripe (for payment processing)
- Docker (for containerization)
- GitHub Actions (for CI/CD)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have the following installed on your machine:
  - Git
  - Node.js
  - npm(Node Package Manager)


### Cloning the Repository

```bash
git clone https://github.com/debsouryadatta/CourseX.git
cd CourseX
```

### Installation
Install the project dependencies using npm in the root directory:
```bash
npm install
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Set Up Environment Variables -->
### Set Up Environment Variables
Create a `.env` file in the root directory of the project and add the following environment variables:
```env
# Database
DATABASE_URL=
BASE_URL=


# Next AUth
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
AUTH_URL=


# Groq API
NEXT_PUBLIC_GROQ_API_KEY=


# Langchain API for langsmith
LANGCHAIN_TRACING_V2=
LANGCHAIN_ENDPOINT=
LANGCHAIN_API_KEY=
LANGCHAIN_PROJECT=
LANGCHAIN_CALLBACKS_BACKGROUND=


# Youtube & Unsplash API
# NEXT_PUBLIC_YOUTUBE_API_KEY=
NEXT_PUBLIC_YOUTUBE_API_KEY=
# UNSPLASH_API_KEY=
UNSPLASH_API_KEY=


# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_UPLOAD_PRESET=
CLOUDINARY_FOLDER=


# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```
Replace the placeholder values with your actual respective account credentials.


<!-- Running the Project -->
### Running the Project
Run the development server:
```bash
npm run dev
```

<br>

### Running the Project on Docker Container
Build the Docker image:
```bash
docker-compose build
```
Run the Docker container:
```bash
docker-compose up
```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTACT -->
## Contact

Debsourya Datta - [LinkedIn Profile](https://www.linkedin.com/in/debsourya-datta-177909225) - debsouryadatta@gmail.com

Project Link: [https://github.com/debsouryadatta/CourseX](https://github.com/debsouryadatta/CourseX)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

