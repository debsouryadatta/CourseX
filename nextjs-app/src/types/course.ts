export interface CourseWithUser {
    id: string;
    title: string;
    image: string;
    description: string;
    userId: string;
    user: {
      id: string;
      name: string | null;
      email: string;
      emailVerified: Date | null;
      image: string | null;
      createdAt: Date;
      updatedAt: Date;
    };
  }