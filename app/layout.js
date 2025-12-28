// app/layout.js
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Gravity Team</title>
        </head>
        <body className="bg-[#0b0e13] text-white m-0 p-0">
          {children}
        </body>
      </html>
    );
  }