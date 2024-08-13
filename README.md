# EmailAdminer

EmailAdminer is a powerful Next.js application designed to streamline your Gmail management experience. With features like bulk email deletion and subscription management, EmailAdminer helps you take control of your inbox and boost your productivity.

![EmailAdminer Logo](https://www.emailadminer.com/logo.png)

## 🌟 Features

- **Bulk Email Deletion**: Easily remove hundreds of emails based on sender name.
- **Subscription Management**: Keep track of your email subscriptions and unsubscribe with ease.
- **Gmail Integration**: Seamlessly connect with your Gmail account for efficient management.
- **User-friendly Dashboard**: Intuitive interface for managing your email cleanup tasks.
- **Secure Authentication**: Utilizes NextAuth with Google provider for safe and easy login.
- **Responsive Design**: Works smoothly on desktop and mobile devices.

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.12.2 or higher)
- pnpm (v9.7.0 or higher)
- Gmail Account

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/clebertmarctyson/emailadminer.git
   cd emailadminer
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   DATABASE_URL="your_database_url"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your_nextauth_secret"
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   ```

4. Run the development server:

   ```
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Google OAuth](https://developers.google.com/identity/protocols/oauth2)
- [Prisma](https://www.prisma.io/)
- [Gmail API](https://developers.google.com/gmail/api)

## 🤝 Contributing

We welcome contributions to EmailAdminer! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 Contact

Marc Tyson CLEBERT - [@ClebertTyson](https://x.com/ClebertTyson) - marctysonclebert9@gmail.com

Project Link: [https://github.com/clebertmarctyson/emailadminer](https://github.com/clebertmarctyson/emailadminer)

## 🙏 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Gmail API Documentation](https://developers.google.com/gmail/api/guides)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)

---

Made with ❤️ by [Marc Tyson CLEBERT](https://github.com/clebertmarctyson)
