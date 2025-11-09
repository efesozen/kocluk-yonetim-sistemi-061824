'use client';

import { useFeedbacks } from '@/features/feedbacks/hooks/use-feedbacks';

export default function Feedback&ReviewsPage() {
  const { data: feedbacks, isLoading } = useFeedbacks();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Feedback & Reviews</h1>
      <p className="text-muted-foreground mb-6">View and manage feedback and reviews from clients.</p>
      
      <div className="grid gap-4">
        {feedbacks?.map((feedback: any) => (
          <div key={feedback.id} className="border rounded p-4">
            <pre>{JSON.stringify(feedback, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
