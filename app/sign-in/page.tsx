import { SignIn } from "@stackframe/stack";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Access your account and manage your inventory easily.",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pg-gradient-to-br from-purple-50 to-purple-100">
      <div className="w-full max-w-md space-y-0">
        <SignIn />
        <Link
          href="/"
          className="absolute top-4 left-4 text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
