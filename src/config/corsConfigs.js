export const corsConfigs = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:4173',
      'http://localhost:4163',
      'https://event-board-pink.vercel.app/',
      'https://event-board-ten.vercel.app/',
      'https://event-board-o57x38tsw-vladyslavs-projects-3f31ee9c.vercel.app/',
    ];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
