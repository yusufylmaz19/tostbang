"use client";

import { useSession } from "next-auth/react";

export default function SupportCard() {
  const { data: session } = useSession({
    required: false,
  });
  console.log(session);
  return <div>role :{session?.user.role}</div>;
}
