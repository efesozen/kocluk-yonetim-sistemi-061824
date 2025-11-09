'use client';

import { useSessions } from '@/features/sessions/hooks/use-sessions';

export default function CoachingSessionsPage() {
  const { data: sessions, isLoading } = useSessions();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Coaching Sessions</h1>
      <p className="text-muted-foreground mb-6">Manage coaching sessions, including creating, editing, and viewing details.</p>
      
      <div className="grid gap-4">
        {sessions?.map((session: any) => (
          <div key={session.id} className="border rounded p-4">
            <pre>{JSON.stringify(session, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
